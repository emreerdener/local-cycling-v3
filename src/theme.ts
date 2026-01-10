"use client";

import {
  ActionIcon,
  AppShell,
  Badge,
  Button,
  Menu,
  Modal,
  NavLink,
  createTheme,
  Tooltip,
  Popover,
  Slider,
  SegmentedControl,
  Input,
  ScrollArea,
  PasswordInput,
  Notification,
  DEFAULT_THEME,
} from "@mantine/core";
import { RichTextEditor } from "@mantine/tiptap";
import { poppins } from "./app/fonts";

export const theme = createTheme({
  headings: {
    fontFamily: `${poppins.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
    fontWeight: "600",
    sizes: {
      h1: {
        fontWeight: "700",
      },
    },
  },
  cursorType: "pointer",
  primaryColor: "orange",
  components: {
    AppShell: AppShell.extend({
      defaultProps: {
        header: { height: 60 },
      },
    }),
    Input: Input.extend({
      styles: {
        input: { borderRadius: "8px" },
      },
    }),
    ActionIcon: ActionIcon.extend({
      vars: (_, props) => {
        if (props.color === "gray") {
          return {
            root: {
              "--ai-color":
                "light-dark(var(--mantine-color-gray-9), var(--mantine-color-gray-0))",
            },
          };
        }
        return { root: {} };
      },
    }),
    NavLink: NavLink.extend({
      styles: {
        root: { borderRadius: "8px", fontWeight: "500" },
      },
    }),
    Tooltip: Tooltip.extend({
      defaultProps: {
        zIndex: "999",
      },
    }),
    SegmentedControl: SegmentedControl.extend({
      defaultProps: {
        radius: "xl",
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        radius: "lg",
        trapFocus: false,
      },
      styles: {
        close: { borderRadius: "999px" },
      },
    }),
    Drawer: Modal.extend({
      styles: {
        close: { borderRadius: "999px" },
      },
      defaultProps: {
        trapFocus: false,
      },
    }),
    Menu: Menu.extend({
      defaultProps: {
        radius: "md",
      },
    }),
    Badge: Badge.extend({
      styles: {
        label: {
          textTransform: "initial",
          letterSpacing: "0",
          fontWeight: "600",
          flexShrink: 0,
          display: "flex",
        },
        root: { flexShrink: 0, display: "flex" },
      },
    }),
    Button: Button.extend({
      defaultProps: {
        color: "orange",
        radius: "xl",
        variant: "filled",
      },
      styles: {
        label: { fontWeight: "500", flexShrink: 0 },
      },
    }),
    RichTextEditor: RichTextEditor.extend({
      styles: {
        root: {
          borderRadius: "16px",
          backgroundColor: "var(--mantine-color-body)",
        },
        content: {
          borderBottomRightRadius: "16px",
          borderBottomLeftRadius: "16px",
        },
        toolbar: { borderRadius: "16px", border: "none" },
      },
    }),
    Slider: Slider.extend({
      styles: {
        label: {
          top: "-30px",
          borderRadius: "99px",
          paddingTop: "2px",
          paddingBottom: "2px",
          paddingLeft: "8px",
          paddingRight: "8px",
        },
        bar: {
          backgroundColor: "var(--mantine-color-orange-light-color)",
        },
      },
    }),
    RangeSlider: Slider.extend({
      defaultProps: {
        thumbSize: 22,
      },
    }),
    Popover: Popover.extend({
      defaultProps: {
        radius: "md",
        shadow: "md",
      },
    }),
    PasswordInput: PasswordInput.extend({
      styles: {
        visibilityToggle: { borderRadius: "99px" },
      },
    }),
    Notification: Notification.extend({
      defaultProps: {
        radius: "md",
        withBorder: true,
      },
    }),
    ScrollArea: ScrollArea.extend({
      defaultProps: {
        type: "never",
        scrollbarSize: 0,
      },
    }),
  },
});
