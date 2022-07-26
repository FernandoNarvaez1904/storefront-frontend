import { Button, Group, Menu, Text } from '@mantine/core';
import {
  Barcode,
  ChevronDown,
  Numbers,
  TextRecognition,
} from 'tabler-icons-react';
import React from 'react';
import { useRecoilState } from 'recoil';
import { filterItemValue } from '../../state/Atoms';

type Props = {};

function ItemGridConfBar() {
  const [value, setValue] = useRecoilState(filterItemValue);

  const getIconForMenu = (val: 'name' | 'barcode' | 'sku', size = 18) => {
    if (val === 'name') return <TextRecognition size={size} />;
    if (val === 'barcode') return <Barcode size={size} />;
    if (val === 'sku') return <Numbers size={size} />;
    return null;
  };

  const onClickMenuItem = (val: 'name' | 'barcode' | 'sku') => () => {
    setValue({ kind: val, value: '' });
  };

  return (
    <Group>
      <Menu shadow="md" width={125} position="bottom-end" trigger="hover">
        <Menu.Target>
          <Button
            leftIcon={getIconForMenu(value.kind, 22)}
            size="xs"
            sx={{ width: '120px' }}
          >
            <Text transform="capitalize">{value.kind}</Text>
            <ChevronDown size={18} />
          </Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item
            icon={getIconForMenu('name')}
            onClick={onClickMenuItem('name')}
          >
            Name
          </Menu.Item>
          <Menu.Item
            icon={getIconForMenu('barcode')}
            onClick={onClickMenuItem('barcode')}
          >
            Barcode
          </Menu.Item>
          <Menu.Item
            icon={getIconForMenu('sku')}
            onClick={onClickMenuItem('sku')}
          >
            Sku
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}

export default ItemGridConfBar;
