import { Button, Group, Menu, Text, TextInput } from '@mantine/core';
import {
  GridFilterType,
  SearchInput_ConfQuery,
} from 'apps/pointOfSale/components/ItemGridPanel/__generated__/SearchInput_ConfQuery.graphql';
import { updateGridFilterItem } from 'apps/pointOfSale/store/updateLocal';
import React from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';
import relayEnvironment from 'RelayEnviroment';
import {
  Barcode,
  ChevronDown,
  Numbers,
  Search,
  TextRecognition,
} from 'tabler-icons-react';

const dataConf = graphql`
  query SearchInput_ConfQuery {
    pointOfSaleConf {
      gridFilterValue {
        gridFilterType
        value
      }
    }
  }
`;

function SearchInput() {
  const data = useLazyLoadQuery<SearchInput_ConfQuery>(dataConf, {});
  const dataParsed = data.pointOfSaleConf.gridFilterValue;

  const getIconForMenu = (val: GridFilterType, size = 18) => {
    if (val === 'name') return <TextRecognition size={size} />;
    if (val === 'barcode') return <Barcode size={size} />;
    if (val === 'sku') return <Numbers size={size} />;
    return null;
  };

  const onClickMenuItem = (val: 'name' | 'barcode' | 'sku') => () => {
    updateGridFilterItem(relayEnvironment, {
      kind: val,
      value: dataParsed.value,
    });
  };

  return (
    <Group spacing="xs" sx={{ width: '97%' }}>
      <TextInput
        value={dataParsed.value}
        onChange={(e) =>
          updateGridFilterItem(relayEnvironment, {
            kind: dataParsed.gridFilterType,
            value: e.target.value,
          })
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
            leftIcon={getIconForMenu(dataParsed.gridFilterType, 22)}
            size="sm"
          >
            <Text transform="capitalize">{dataParsed.gridFilterType}</Text>
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

export default SearchInput;
