import {
  Barcode,
  ChevronDown,
  Numbers,
  Search,
  TextRecognition,
} from 'tabler-icons-react';
import { Button, Group, Menu, Text, TextInput } from '@mantine/core';
import React from 'react';
import { graphql, useFragment } from 'react-relay';
import { updateGridFilterItem } from '../../store/updateLocal';
import relayEnvironment from '../../../../RelayEnviroment';
import {
  GridFilterType,
  SearchInput_ConfFragment$key,
} from './__generated__/SearchInput_ConfFragment.graphql';

const dataConf = graphql`
  fragment SearchInput_ConfFragment on GridFilterItemValue {
    gridFilterType
    value
  }
`;

type Props = {
  confFragment: SearchInput_ConfFragment$key;
};

function SearchInput({ confFragment }: Props) {
  const data = useFragment<SearchInput_ConfFragment$key>(dataConf, confFragment);

  const getIconForMenu = (val: GridFilterType, size = 18) => {
    if (val === "name") return <TextRecognition size={size} />;
    if (val === "barcode") return <Barcode size={size} />;
    if (val === "sku") return <Numbers size={size} />;
    return null;
  };

  const onClickMenuItem = (val: "name" | "barcode" | "sku") => () => {
    updateGridFilterItem(relayEnvironment, { kind: val, value: data.value });
  };

  return (
    <Group spacing="xs" sx={{ width: "97%" }}>
      <TextInput
        value={data.value}
        onChange={(e) =>
          updateGridFilterItem(relayEnvironment, {
            kind: data.gridFilterType,
            value: e.target.value
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
          <Button leftIcon={getIconForMenu(data.gridFilterType, 22)} size="sm">
            <Text transform="capitalize">{data.gridFilterType}</Text>
            <ChevronDown size={18} />
          </Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item
            icon={getIconForMenu("name")}
            onClick={onClickMenuItem("name")}
          >
            Name
          </Menu.Item>
          <Menu.Item
            icon={getIconForMenu("barcode")}
            onClick={onClickMenuItem("barcode")}
          >
            Barcode
          </Menu.Item>
          <Menu.Item
            icon={getIconForMenu("sku")}
            onClick={onClickMenuItem("sku")}
          >
            Sku
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}

export default SearchInput;
