import { Button, Group, Menu, Text } from '@mantine/core';
import {
  Capture,
  ChevronDown,
  Refresh,
  TextRecognition,
} from 'tabler-icons-react';
import React from 'react';
import {
  graphql,
  useFragment,
  UseQueryLoaderLoadQueryOptions,
} from 'react-relay';
import { ItemGrid_AllItemsQuery$variables } from './__generated__/ItemGrid_AllItemsQuery.graphql';
import { updateGridTypeConf } from '../../store/updateLocal';
import relayEnvironment from '../../../../RelayEnviroment';
import {
  GridType,
  ItemGridConfBar_ConfFragment$key,
} from './__generated__/ItemGridConfBar_ConfFragment.graphql';

const dataConf = graphql`
  fragment ItemGridConfBar_ConfFragment on PointOfSaleConfType {
    gridType
  }
`;

type Props = {
  loadAllItem: (
    variables: ItemGrid_AllItemsQuery$variables,
    options?: UseQueryLoaderLoadQueryOptions | undefined
  ) => any;
  confFragmentRef: ItemGridConfBar_ConfFragment$key;
};

function ItemGridConfBar({ loadAllItem, confFragmentRef }: Props) {
  const gridType = useFragment<ItemGridConfBar_ConfFragment$key>(
    dataConf,
    confFragmentRef
  );

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
            leftIcon={getParseInfoForGridMenu(gridType.gridType)?.icon}
            size="sm"
            color="dark"
            variant="white"
          >
            <Text transform="capitalize">
              {getParseInfoForGridMenu(gridType.gridType)?.text}
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
