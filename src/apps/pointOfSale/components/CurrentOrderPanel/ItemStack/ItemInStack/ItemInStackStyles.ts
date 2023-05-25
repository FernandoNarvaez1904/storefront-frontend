import { createStyles } from '@mantine/core';

interface ItemInStackStylesProps {
  isImageGrid: boolean;
}

const useItemInStackStyles = createStyles(
  (theme, { isImageGrid }: ItemInStackStylesProps) => ({
    root: {
      height: 60,
      width: '100%',
    },

    numberInputRoot: {
      width: 'calc(30%)',
      maxWidth: '100px',
    },

    priceRoot: {
      width: 'calc(30%)',
      textAlign: 'right',
      overflow: 'hidden',
      justifyContent: 'flex-end',
    },

    priceText: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },

    titleRoot: {
      width: 'calc(40%)',
      flexGrow: 1,
    },

    titleNamePriceRoot: {
      overflow: 'hidden',
      marginLeft: isImageGrid ? 0 : 10,
    },

    titleNameText: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      fontWeight: isImageGrid ? 'normal' : 'bold',
    },
  })
);

export default useItemInStackStyles;
