import { Badge } from '@mantine/core';
import { TotalCountBadgeComponent_ItemCountFragment$key } from 'apps/inventory/pages/Items/components/HeaderItemsTable/components/TotalCountBadge/__generated__/TotalCountBadgeComponent_ItemCountFragment.graphql';
import { graphql, useFragment } from 'react-relay';

const itemCountFragment = graphql`
  fragment TotalCountBadgeDisplay_ItemCountFragment on ItemTypeConnection {
    totalCount
  }
`;

type Props = {
  itemCountFragmentRef: TotalCountBadgeComponent_ItemCountFragment$key;
};

function TotalCountBadgeDisplay({ itemCountFragmentRef }: Props) {
  const data = useFragment(itemCountFragment, itemCountFragmentRef);
  return <Badge> Item Count: {data.totalCount}</Badge>;
}

export default TotalCountBadgeDisplay;
