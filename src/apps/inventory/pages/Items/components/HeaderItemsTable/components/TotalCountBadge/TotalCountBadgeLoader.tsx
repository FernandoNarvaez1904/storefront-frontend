import ItemsQuery_ItemsPageQueryGraphql, {
  ItemsQuery_ItemsPageQuery,
} from 'apps/inventory/pages/Items/__generated__/ItemsQuery_ItemsPageQuery.graphql';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';
import TotalCountBadgeDisplay from './TotalCountBadgeDisplay';

type Props = {
  queryRef: PreloadedQuery<ItemsQuery_ItemsPageQuery>;
};

function TotalCountBadge({ queryRef }: Props) {
  const data = usePreloadedQuery<ItemsQuery_ItemsPageQuery>(
    ItemsQuery_ItemsPageQueryGraphql,
    queryRef
  );

  return (
    <TotalCountBadgeDisplay itemConnectionFragmentRef={data.itemConnection} />
  );
}

export default TotalCountBadge;
