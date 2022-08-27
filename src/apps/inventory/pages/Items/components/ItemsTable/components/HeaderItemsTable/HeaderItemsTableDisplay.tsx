import { Badge, Group, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import ItemsLoader_ItemsPageQueryGraphql, {
  ItemsLoader_ItemsPageQuery,
} from 'apps/inventory/pages/Items/__generated__/ItemsLoader_ItemsPageQuery.graphql';
import { itemsTableFilterAtom } from 'apps/inventory/pages/Items/state/atoms';
import { useState } from 'react';
import {
  graphql,
  PreloadedQuery,
  useFragment,
  usePreloadedQuery,
} from 'react-relay';
import { useSetRecoilState } from 'recoil';
import { HeaderItemsTableDisplay_ItemCountFragment$key } from './__generated__/HeaderItemsTableDisplay_ItemCountFragment.graphql';
import SelectSearchFilterType from './components/SelectSearchFilterType';
import useItemsTableHeaderStyles from './ItemsTableHeaderStyles';

const itemCountFragment = graphql`
  fragment HeaderItemsTableDisplay_ItemCountFragment on ItemTypeConnection {
    totalCount
  }
`;

type Props = {
  queryRef: PreloadedQuery<ItemsLoader_ItemsPageQuery>;
};

function HeaderItemsTableDisplay({ queryRef }: Props) {
  const queryData = usePreloadedQuery(
    ItemsLoader_ItemsPageQueryGraphql,
    queryRef
  );
  const itemConnectionEdge =
    useFragment<HeaderItemsTableDisplay_ItemCountFragment$key>(
      itemCountFragment,
      queryData.itemConnection
    );

  // Handles search value only for local rendering
  const [localSearch, setLocalSearch] = useState('');
  // Sets the table filter value
  const setItemsTableFilter = useSetRecoilState(itemsTableFilterAtom);

  const { classes } = useItemsTableHeaderStyles();

  const onChangeInput = (value: string) => {
    setLocalSearch(value);
    // The timeout is done to delay filtering. If the delay is not present, the
    // rendering of the table will slow down the responsiveness of the TextInput
    setTimeout(() => {
      setItemsTableFilter((prev) => ({ ...prev, value }));
    }, 50);
  };

  return (
    <Group className={classes.header}>
      <TextInput
        size="xs"
        value={localSearch}
        placeholder="Search Items"
        icon={<IconSearch size={16} />}
        className={classes.searchInput}
        rightSectionWidth={110.5}
        rightSection={<SelectSearchFilterType />}
        onChange={(e) => {
          onChangeInput(e.target.value);
        }}
      />

      <Badge> Item Count: {itemConnectionEdge.totalCount}</Badge>
    </Group>
  );
}

export default HeaderItemsTableDisplay;
