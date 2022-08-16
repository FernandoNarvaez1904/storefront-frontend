import ItemsQuery_ItemsPageQueryGraphql, {
  ItemsQuery_ItemsPageQuery,
} from 'apps/inventory/pages/Items/__generated__/ItemsQuery_ItemsPageQuery.graphql';
import TbodyItemsTableDisplay from 'apps/inventory/pages/Items/components/ItemsTable/components/TbodyItemsTable/TbodyItemsTableDisplay';
import { PreloadedQuery, usePreloadedQuery } from 'react-relay';

type Props = {
  queryRef: PreloadedQuery<ItemsQuery_ItemsPageQuery>;
};

function TbodyItemsTableLoader({ queryRef }: Props) {
  const data = usePreloadedQuery<ItemsQuery_ItemsPageQuery>(
    ItemsQuery_ItemsPageQueryGraphql,
    queryRef
  );

  return <TbodyItemsTableDisplay fragmentRef={data.itemConnection} />;
}

export default TbodyItemsTableLoader;
