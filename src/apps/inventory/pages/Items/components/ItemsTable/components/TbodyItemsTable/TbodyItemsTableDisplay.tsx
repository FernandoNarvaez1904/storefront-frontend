import { ItemTableTbodyDisplay_AllItemFragment$key } from 'apps/inventory/pages/Items/components/ItemsTable/components/TbodyItemsTable/__generated__/ItemTableTbodyDisplay_AllItemFragment.graphql';
import { graphql, useFragment } from 'react-relay';

const allItemsFragment = graphql`
  fragment ItemTableTbodyDisplay_AllItemFragment on ItemTypeConnection {
    edges {
      node {
        id
        name
        sku
        cost
        markup
        price
        isService
        isActive
      }
    }
  }
`;
type Props = {
  fragmentRef: ItemTableTbodyDisplay_AllItemFragment$key;
};

function TbodyItemsTableDisplay({ fragmentRef }: Props) {
  const data = useFragment(allItemsFragment, fragmentRef);

  const rows = data.edges.map((item, idx) => (
    <tr key={item.node.id}>
      <td>{idx + 1}</td>
      <td>{item.node.name}</td>
      <td>{item.node.sku}</td>
      <td>{item.node.cost}</td>
      <td>{item.node.markup}%</td>
      <td>{item.node.price}</td>
      <td>{item.node.isService ? 'True' : 'False'}</td>
      <td>{item.node.isActive ? 'True' : 'False'}</td>
    </tr>
  ));
  return <tbody>{rows}</tbody>;
}

export default TbodyItemsTableDisplay;
