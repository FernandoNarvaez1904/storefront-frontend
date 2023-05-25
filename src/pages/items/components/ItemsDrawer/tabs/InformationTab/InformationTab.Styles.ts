import { Button, ButtonProps, createPolymorphicComponent } from '@mantine/core';
import styled from '@emotion/styled';

export const EditItemButton = createPolymorphicComponent<'button', ButtonProps>(
  styled(Button)(({ theme }) => ({
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.blue[9]
        : theme.colors.blue[7],
    ':hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.blue[8]
          : theme.colors.blue[8],
    },
    flexGrow: 1,
  }))
);

export const DeleteItemButton = createPolymorphicComponent<
  'button',
  ButtonProps
>(
  styled(Button)(({ theme }) => ({
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.red[9] : theme.colors.red[7],
    ':hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.red[8]
          : theme.colors.red[8],
    },
  }))
);

export const GoBackItemButton = createPolymorphicComponent<
  'button',
  ButtonProps
>(
  styled(Button)(({ theme }) => ({
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.gray[8]
        : theme.colors.gray[6],
    ':hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.gray[7]
          : theme.colors.gray[7],
    },
    flexGrow: 1,
  }))
);
