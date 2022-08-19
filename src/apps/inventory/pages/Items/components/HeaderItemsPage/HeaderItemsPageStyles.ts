import { createStyles } from '@mantine/core';

const useHeaderItemsPageStyles = createStyles((theme) => ({
  addItemButton: {
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
  },
}));

export default useHeaderItemsPageStyles;
