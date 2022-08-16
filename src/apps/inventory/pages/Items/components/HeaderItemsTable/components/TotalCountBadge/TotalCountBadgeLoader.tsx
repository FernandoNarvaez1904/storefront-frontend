import ItemsQuery_ItemsPageQueryGraphql, {
  ItemsQuery_ItemsPageQuery,
} from 'apps/inventory/pages/Items/__generated__/ItemsQuery_ItemsPageQuery.graphql';
import TotalCountBadgeDisplay from 'apps/inventory/pages/Items/components/HeaderItemsTable/components/TotalCountBadge/TotalCountBadgeDisplay';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';

type Props = {
  queryRef: PreloadedQuery<ItemsQuery_ItemsPageQuery>;
};

function TotalCountBadge({ queryRef }: Props) {
  const data = usePreloadedQuery<ItemsQuery_ItemsPageQuery>(
    ItemsQuery_ItemsPageQueryGraphql,
    queryRef
  );

  return <TotalCountBadgeDisplay itemCountFragmentRef={data.itemConnection} />;
}

export default TotalCountBadge;
