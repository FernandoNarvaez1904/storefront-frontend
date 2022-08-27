import { Group, Select, Text } from '@mantine/core';
import {
  IconBarcode,
  IconLetterCase,
  IconNumbers,
  TablerIcon,
} from '@tabler/icons';
import { itemsTableFilterAtom } from 'apps/inventory/pages/Items/state/atoms';
import { forwardRef } from 'react';
import { useRecoilState } from 'recoil';
import useSelectSearchFilterStyles from './SelectSearchFilterTypeStyles';

interface SelectItemProps extends React.ComponentPropsWithoutRef<'div'> {
  Icon: TablerIcon;
  label: string;
}

const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ Icon, label, ...others }: SelectItemProps, ref) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div ref={ref} {...others}>
      <Group noWrap>
        <Icon size={18} />
        <Text size="xs">{label}</Text>
      </Group>
    </div>
  )
);

function SelectSearchFilterTypeDisplay() {
  const [itemsTableFilter, setItemsTableFilter] =
    useRecoilState(itemsTableFilterAtom);

  const { classes } = useSelectSearchFilterStyles();

  const data = [
    { label: 'Name', value: 'name', Icon: IconLetterCase },
    { label: 'Barcode', value: 'barcode', Icon: IconBarcode },
    { label: 'SKU', value: 'sku', Icon: IconNumbers },
  ];

  const getIcon = (value: 'name' | 'barcode' | 'sku') => {
    if (value === 'name') {
      return <IconLetterCase size={18} className={classes.icon} />;
    }
    if (value === 'barcode') {
      return <IconBarcode size={18} className={classes.icon} />;
    }
    if (value === 'sku') {
      return <IconNumbers size={18} className={classes.icon} />;
    }
    return null;
  };

  const changeItemDrawerType = (value: 'name' | 'barcode' | 'sku') => {
    setItemsTableFilter((prev) => ({
      ...prev,
      type: value,
    }));
  };

  return (
    <Select
      size="xs"
      itemComponent={SelectItem}
      value={itemsTableFilter.type}
      onChange={changeItemDrawerType}
      icon={getIcon(itemsTableFilter.type)}
      data={data}
      styles={{
        input: {
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        },
      }}
    />
  );
}

export default SelectSearchFilterTypeDisplay;
