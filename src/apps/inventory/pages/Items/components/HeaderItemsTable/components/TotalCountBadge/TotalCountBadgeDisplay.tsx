import { Badge } from '@mantine/core';
import { graphql, useFragment } from 'react-relay';
import { TotalCountBadgeDisplay_ItemCountFragment$key } from './__generated__/TotalCountBadgeDisplay_ItemCountFragment.graphql';

const itemCountFragment = graphql`
  fragment TotalCountBadgeDisplay_ItemCountFragment on ItemTypeConnection {
    totalCount
  }
`;

type Props = {
  itemConnectionFragmentRef: TotalCountBadgeDisplay_ItemCountFragment$key;
};

function TotalCountBadgeDisplay({ itemConnectionFragmentRef }: Props) {
  const itemConnection = useFragment(
    itemCountFragment,
    itemConnectionFragmentRef
  );
  return <Badge> Item Count: {itemConnection.totalCount}</Badge>;
}

export default TotalCountBadgeDisplay;
