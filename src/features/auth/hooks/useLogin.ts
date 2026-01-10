import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "@mantine/form";
import { z } from "zod";
import { zodResolver } from "mantine-form-zod-resolver";
import { createClient } from "@/lib/supabase/client";
import { notifications } from "@mantine/notifications";

// Define the validation schema here (Feature-colocation)
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const useLogin = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createClient();

  const form = useForm({
    initialValues: { email: "", password: "" },
    validate: zodResolver(loginSchema),
  });

  const handleSubmit = async (values: typeof form.values) => {
    setIsLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    if (error) {
      notifications.show({
        title: "Login failed",
        message: error.message,
        color: "red",
      });
    } else {
      notifications.show({
        title: "Welcome back!",
        message: "Redirecting to dashboard...",
        color: "green",
      });
      router.push("/");
      router.refresh();
    }
    setIsLoading(false);
  };

  return {
    form,
    isLoading,
    handleSubmit: form.onSubmit(handleSubmit),
  };
};
