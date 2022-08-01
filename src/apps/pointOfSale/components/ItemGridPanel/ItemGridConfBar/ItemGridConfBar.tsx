import { Button, Group, Menu, Text } from '@mantine/core';
import { updateGridTypeConf } from 'apps/pointOfSale/store/updateLocal';
import React from 'react';
import {
  graphql,
  useLazyLoadQuery,
  UseQueryLoaderLoadQueryOptions,
} from 'react-relay';
import relayEnvironment from 'RelayEnviroment';
import {
  Capture,
  ChevronDown,
  Refresh,
  TextRecognition,
} from 'tabler-icons-react';
import { ItemGrid_AllItemsQuery$variables } from '../ItemGrid/__generated__/ItemGrid_AllItemsQuery.graphql';
import {
  GridType,
  ItemGridConfBar_ConfQuery,
} from './__generated__/ItemGridConfBar_ConfQuery.graphql';

const dataConf = graphql`
  query ItemGridConfBar_ConfQuery {
    pointOfSaleConf {
      gridType
    }
  }
`;

type Props = {
  loadAllItem: (
    variables: ItemGrid_AllItemsQuery$variables,
    options?: UseQueryLoaderLoadQueryOptions | undefined
  ) => any;
};

function ItemGridConfBar({ loadAllItem }: Props) {
  const gridType = useLazyLoadQuery<ItemGridConfBar_ConfQuery>(dataConf, {});

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
    if (val === '%future added value') {
      return {
        icon: <TextRecognition />,
        text: 'Text Grid',
      };
    }
    return null;
  };

  return (
    <Group>
      <Button
        onClick={() => loadAllItem({}, { fetchPolicy: 'network-only' })}
        size="sm"
        leftIcon={<Refresh size={18} />}
        color="dark"
        variant="white"
      >
        Refresh
      </Button>
      <Menu shadow="md" position="bottom-end" trigger="hover">
        <Menu.Target>
          <Button
            leftIcon={
              getParseInfoForGridMenu(gridType.pointOfSaleConf.gridType)?.icon
            }
            size="sm"
            color="dark"
            variant="white"
          >
            <Text transform="capitalize">
              {getParseInfoForGridMenu(gridType.pointOfSaleConf.gridType)?.text}
            </Text>
            <ChevronDown size={18} />
          </Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item
            icon={getParseInfoForGridMenu('ImageGrid')?.icon}
            onClick={() => updateGridTypeConf(relayEnvironment, 'ImageGrid')}
          >
            {getParseInfoForGridMenu('ImageGrid')?.text}
          </Menu.Item>
          <Menu.Item
            icon={getParseInfoForGridMenu('TextGrid')?.icon}
            onClick={() => updateGridTypeConf(relayEnvironment, 'TextGrid')}
          >
            {getParseInfoForGridMenu('TextGrid')?.text}
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}

export default ItemGridConfBar;
