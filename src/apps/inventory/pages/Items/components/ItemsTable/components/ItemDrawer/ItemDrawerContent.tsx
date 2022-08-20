import { graphql, useFragment } from 'react-relay';
import { ItemDrawerContent_SingleItemFragment$key } from './__generated__/ItemDrawerContent_SingleItemFragment.graphql';

const itemFragment = graphql`
  fragment ItemDrawerContent_SingleItemFragment on ItemType {
    id
    name
    sku
    cost
    markup
    price
    isService
    isActive
    currentStock
    barcode
  }
`;
type Props = {
  itemFragmentRef: ItemDrawerContent_SingleItemFragment$key;
};

function ItemDrawerContent({ itemFragmentRef }: Props) {
  const item = useFragment(itemFragment, itemFragmentRef);
  return <h1>{item.id}</h1>;
}

export default ItemDrawerContent;
