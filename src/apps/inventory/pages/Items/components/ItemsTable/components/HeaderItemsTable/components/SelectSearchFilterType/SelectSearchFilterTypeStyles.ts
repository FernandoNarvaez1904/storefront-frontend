import { createStyles } from '@mantine/core';

const useSelectSearchFilterStyles = createStyles((theme) => ({
  icon: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[2]
        : theme.colors.dark[3],
  },
}));

export default useSelectSearchFilterStyles;
