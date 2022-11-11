import { graphql } from 'relay-runtime';
import { useFragment } from 'react-relay';
import ItemInfoTabSection from './components/ItemInfoTabSection';
import ItemInfoTabField from './components/ItemInfoTabField';
import { InformationTabInfoSectionFragment$key } from './__generated__/InformationTabInfoSectionFragment.graphql';

const itemFragment = graphql`
  fragment InformationTabInfoSectionFragment on ItemType {
    id
    name
    barcode
    cost
    isActive
    sku
    price
    markup
    currentStock
    isActive
    creationDate
    isService
  }
`;

interface InformationTabInfoSectionProps {
  itemRef: InformationTabInfoSectionFragment$key;
}

function InformationTabInfoSection({
  itemRef,
}: InformationTabInfoSectionProps) {
  const item = useFragment<InformationTabInfoSectionFragment$key>(
    itemFragment,
    itemRef
  );

  return (
    <>
      <ItemInfoTabSection title="General Information">
        <ItemInfoTabField title="ID:" value={item.id} />
        <ItemInfoTabField title="SKU:" value={item.sku} />
        <ItemInfoTabField title="Name:" value={item.name} />
        <ItemInfoTabField title="Barcode:" value={item.barcode} />
        <ItemInfoTabField title="Group Name:" value="root" />
        <ItemInfoTabField
          title="Creation Date: "
          value={new Date(item.creationDate).toLocaleDateString()}
        />
        <ItemInfoTabField
          title="Is Active:"
          value={item.isActive ? 'True' : 'False'}
        />
        <ItemInfoTabField
          title="Is Service"
          value={item.isService ? 'True' : 'False'}
        />
      </ItemInfoTabSection>

      <ItemInfoTabSection title="Purchases Information">
        <ItemInfoTabField title="Cost:" value={` C$${item.cost}`} />
        <ItemInfoTabField title="Vendors:" value=" No vendors specified" />
      </ItemInfoTabSection>

      <ItemInfoTabSection title="Selling Information">
        <ItemInfoTabField title="Markup:" value={`${item.markup}%`} />
        <ItemInfoTabField title="Price:" value={`C$${item.price}`} />
      </ItemInfoTabSection>

      <ItemInfoTabSection title="Inventory Information">
        <ItemInfoTabField title="Stock:" value={`${item.currentStock}`} />
        <ItemInfoTabField
          title="Stock Cost Value:"
          value={`C$${item.currentStock * item.cost}`}
        />
        <ItemInfoTabField
          title="Stock Sell Value:"
          value={`C$${
            item.currentStock * (item.price === null ? 0 : item.price)
          }`}
        />
      </ItemInfoTabSection>
    </>
  );
}

export default InformationTabInfoSection;
