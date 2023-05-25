/* eslint-disable no-nested-ternary */
import styled from '@emotion/styled';
import {
  createPolymorphicComponent,
  MantineTheme,
  UnstyledButton,
  UnstyledButtonProps,
} from '@mantine/core';

interface SidebarIconButtonProps extends UnstyledButtonProps {
  isActive?: boolean;
}

// Wraps a Tabler Icon component
export const SidebarIconButtonIconWrapper = styled.div(({ theme }) => ({
  marginRight: theme.spacing.sm,
  color:
    theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
}));

// eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle
const _LinkButton = styled(UnstyledButton, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})(({ theme, ...props }: { theme: MantineTheme; isActive: boolean }) => {
  return {
    ...theme.fn.focusStyles(),
    // Layout
    display: 'flex',
    alignItems: 'center',

    // Size
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    width: '100%',

    // Fonts
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    // Decorations
    textDecoration: 'none',
    borderRadius: theme.radius.sm,

    // Color
    // If button is active bg color is light blue, else is not set
    backgroundColor: props.isActive
      ? theme.fn.variant({
          variant: 'light',
          color: theme.primaryColor,
        }).background
      : null,
    color: !props.isActive
      ? // If button is not active change color corresponding to theme
        theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7]
      : // Active Color
        theme.fn.variant({
          variant: 'light',
          color: theme.primaryColor,
        }).color,

    '&:hover': {
      backgroundColor: !props.isActive
        ? // If button is not active change bg corresponding to theme
          theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0]
        : // Active bg color
          theme.fn.variant({
            variant: 'light',
            color: theme.primaryColor,
          }).background,

      color: !props.isActive
        ? // If button is not active show a color corresponding to theme
          theme.colorScheme === 'dark'
          ? theme.white
          : theme.black
        : // Active Color
          theme.fn.variant({
            variant: 'light',
            color: theme.primaryColor,
          }).color,
    },

    [`${SidebarIconButtonIconWrapper}`]: {
      color: !props.isActive
        ? // If button is not active show a color corresponding to theme
          theme.colorScheme === 'dark'
          ? theme.colors.dark[2]
          : theme.colors.gray[6]
        : // Active Color
          theme.fn.variant({
            variant: 'light',
            color: theme.primaryColor,
          }).color,

      '&:hover': {
        color: !props.isActive
          ? // If button is not active show a color corresponding to theme
            theme.colorScheme === 'dark'
            ? theme.white
            : theme.black
          : // Active Color
            theme.fn.variant({
              variant: 'light',
              color: theme.primaryColor,
            }).color,
      },
    },
  };
});

const SidebarIconButton = createPolymorphicComponent<
  'button',
  SidebarIconButtonProps
>(_LinkButton);

SidebarIconButton.defaultProps = {
  isActive: false,
};

export default SidebarIconButton;
