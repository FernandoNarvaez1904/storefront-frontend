import { Button, Group, Menu, Text } from '@mantine/core';
import {
  Capture,
  ChevronDown,
  Refresh,
  TextRecognition,
} from 'tabler-icons-react';
import React from 'react';
import { UseQueryLoaderLoadQueryOptions } from 'react-relay';
import { useRecoilState } from 'recoil';
import { ItemGrid_AllItemsQuery$variables } from './__generated__/ItemGrid_AllItemsQuery.graphql';
import { gridType, GridType } from '../../state/Atoms';

type Props = {
  loadAllItem: (
    variables: ItemGrid_AllItemsQuery$variables,
    options?: UseQueryLoaderLoadQueryOptions | undefined
  ) => any;
};

function ItemGridConfBar({ loadAllItem }: Props) {
  const [gridKind, setGridType] = useRecoilState<GridType>(gridType);

  const getParseInfoForGridMenu = (val: GridType) => {
    if (val === 'TextGrid')
      return {
        icon: <TextRecognition />,
        text: 'Text Grid',
      };
    if (val === 'ImageGrid')
      return {
        icon: <Capture />,
        text: 'Image Grid',
      };
    return null;
  };

  return (
    <Group>
      <Button
        onClick={() => loadAllItem({}, { fetchPolicy: 'network-only' })}
        size="sm"
        leftIcon={<Refresh size={18} />}
      >
        Refresh
      </Button>
      <Menu shadow="md" position="bottom-end" trigger="hover">
        <Menu.Target>
          <Button leftIcon={getParseInfoForGridMenu(gridKind)?.icon} size="sm">
            <Text transform="capitalize">
              {getParseInfoForGridMenu(gridKind)?.text}
            </Text>
            <ChevronDown size={18} />
          </Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item
            icon={getParseInfoForGridMenu('ImageGrid')?.icon}
            onClick={() => setGridType('ImageGrid')}
          >
            {getParseInfoForGridMenu('ImageGrid')?.text}
          </Menu.Item>
          <Menu.Item
            icon={getParseInfoForGridMenu('TextGrid')?.icon}
            onClick={() => setGridType('TextGrid')}
          >
            {getParseInfoForGridMenu('TextGrid')?.text}
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}

export default ItemGridConfBar;
