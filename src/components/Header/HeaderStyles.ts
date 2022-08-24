import { createStyles } from '@mantine/core';

const useHeaderStyles = createStyles((theme) => ({
  header: {
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
    justifyContent: 'space-between',
    height: 66,
  },
  changeThemeButton: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.yellow[4]
        : theme.colors.blue[5],
  },

  defaultButton: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
  },
}));

export default useHeaderStyles;
