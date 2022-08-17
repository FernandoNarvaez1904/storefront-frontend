import { graphql, useFragment } from 'react-relay';
import { TbodyItemsTableDisplay_AllItemFragment$key } from './__generated__/TbodyItemsTableDisplay_AllItemFragment.graphql';
import RowTbodyItems from './RowTbodyItems';

const allItemsFragment = graphql`
  fragment TbodyItemsTableDisplay_AllItemFragment on ItemTypeConnection {
    edges {
      node {
        id
        ...RowTbodyItems_ItemsRowFragment
      }
    }
  }
`;

type Props = {
  fragmentRef: TbodyItemsTableDisplay_AllItemFragment$key;
};

function TbodyItemsTableDisplay({ fragmentRef }: Props) {
  const data = useFragment<TbodyItemsTableDisplay_AllItemFragment$key>(
    allItemsFragment,
    fragmentRef
  );

  const rows = data.edges.map((item, idx: number) => (
    <RowTbodyItems fragmentRef={item.node} idx={idx + 1} key={item.node.id} />
  ));

  return <tbody>{rows}</tbody>;
}

export default TbodyItemsTableDisplay;
