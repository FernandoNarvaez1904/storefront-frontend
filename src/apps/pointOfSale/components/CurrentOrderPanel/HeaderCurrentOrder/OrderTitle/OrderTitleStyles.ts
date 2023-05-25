import { createStyles } from '@mantine/core';

const useOrderTitleStyles = createStyles((theme) => ({
  pill: {
    backgroundColor: theme.colors.blue[6],
    justifyContent: 'space-between',
    borderRadius: '5px',
    color: 'white',
  },
}));

export default useOrderTitleStyles;
