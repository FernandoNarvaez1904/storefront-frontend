import { createStyles } from '@mantine/core';

const useItemDrawerStyles = createStyles((theme) => ({
  tabs: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  defaultButton: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
  },
}));

export default useItemDrawerStyles;
