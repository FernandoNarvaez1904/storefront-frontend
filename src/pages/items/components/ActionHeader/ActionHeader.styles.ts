import styled from '@emotion/styled';
import { Button, ButtonProps, createPolymorphicComponent } from '@mantine/core';

export const AddItemButton = createPolymorphicComponent<'button', ButtonProps>(
  styled(Button)(({ theme }) => ({
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.teal[8]
        : theme.colors.teal[5],
    ':hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.teal[9]
          : theme.colors.teal[6],
    },
  }))
);
