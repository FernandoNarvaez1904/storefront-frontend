import {
  Barcode,
  ChevronDown,
  Numbers,
  Search,
  ShoppingCartPlus,
  TextRecognition,
} from 'tabler-icons-react';
import { Button, Group, Menu, Text, TextInput } from '@mantine/core';
import React from 'react';
import { useRecoilState } from 'recoil';
import { filterItemValue } from '../../state/Atoms';

function SearchInput() {
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
    <Group spacing="xs" sx={{ width: '97%' }}>
      <TextInput
        value={value.value}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, value: e.target.value }))
        }
        icon={<Search size={18} />}
        radius="md"
        size="sm"
        placeholder="Search Items"
        sx={{ flexGrow: 1 }}
      />
      <Menu shadow="md" width={125} position="bottom-end" trigger="hover">
        <Menu.Target>
          <Button
            leftIcon={getIconForMenu(value.kind, 22)}
            size="sm"
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
      <Button size="sm" leftIcon={<ShoppingCartPlus />}>
        Add
      </Button>
    </Group>
  );
}

export default SearchInput;
