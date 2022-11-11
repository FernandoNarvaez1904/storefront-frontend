import { createStyles } from '@mantine/core';

const useItemTableStyles = createStyles({
  thead: {
    ':after': {
      display: 'none',
    },
  },
  pagination: {
    '@media (min-width: 755px)': {
      justifyContent: 'space-between',
    },

    '@media (max-width: 1020px)': {
      display: 'flex',
      flexWrap: 'wrap-reverse',
      justifyContent: 'center',
    },

    '@media (max-width: 755px)': {
      display: 'flex',
      flexWrap: 'wrap-reverse',
      gap: 0,
    },
  },
  pagination_info: {
    display: 'inline-block',
    '@media (max-width: 755px)': {
      display: 'block',
      paddingTop: 10,
    },
  },

  pagination_size: {
    display: 'flex',
    '@media (max-width: 755px)': {
      justifySelf: 'flex-end',
      gap: 5,
    },
  },
  pagination_page: {
    margin: '0 auto',
    justifyContent: 'space-around',
    '@media (max-width: 755px)': {
      button: {
        padding: 0,
      },
      gap: 3.88,
    },
    '@media (max-width: 360px)': {
      button: {
        padding: 0,
      },
      gap: 2,
    },
  },
  scrollArea: {
    flexGrow: 1,
  },
  globalFilter: {
    display: 'none',
  },
  table: {
    userSelect: 'none',
  },
});

export default useItemTableStyles;
