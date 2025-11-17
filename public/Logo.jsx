'use client';

//mantine
import { Group, Image } from '@mantine/core';

//nextjs
import NextImage from 'next/image';

//Images
import logoLight from './images/logo-light.svg';
import logoDark from './images/logo-dark.svg';

export default function Logo() {
    return (
        <Group gap={4} wrap="nowrap" align="center">

            <Image
              darkHidden
              component={NextImage}
              src={logoLight}
              alt="Local Cycling logo"
              width={140}
              height={26}
              fit="contain"
              miw={140}
              priority
            />

            <Image
              lightHidden
              component={NextImage}
              src={logoDark}
              alt="Local Cycling logo"
              width={140}
              height={26}
              fit="contain"
              miw={140}
              priority
            />
        </Group>
    );
}
