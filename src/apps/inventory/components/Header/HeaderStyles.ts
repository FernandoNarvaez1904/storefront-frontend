import { createStyles } from '@mantine/core';

const useHeaderStyles = createStyles((theme) => ({
  header: {
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
    justifyContent: 'space-between',
    height: 66,
  },
}));

export default useHeaderStyles;
