import { Button, Stack } from '@mantine/core';
import { useState } from 'react';
import { useFragment } from 'react-relay';
import { useSetRecoilState } from 'recoil';
import { graphql } from 'relay-runtime';
import { itemDrawerState } from '../../../../state/atoms';
import { InformationTabFragment$key } from './__generated__/InformationTabFragment.graphql';
import FormUpdateItem from './FormUpdateItem';
import ItemInfoTabField from './ItemInfoTabField';
import ItemInfoTabSection from './ItemInfoTabSection';

const itemFragment = graphql`
  fragment InformationTabFragment on ItemType {
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
    ...FormUpdateItem_ItemFragment
  }
`;

interface InformationTabProps {
  itemRef: InformationTabFragment$key;
}

function InformationTab({ itemRef }: InformationTabProps) {
  const item = useFragment<InformationTabFragment$key>(itemFragment, itemRef);
  const [isEditMode, setIsEditMode] = useState(false);
  const setItemDrawer = useSetRecoilState(itemDrawerState);
  return (
    <Stack spacing="xs" mt="xs" pb="md">
      <Button
        size="xs"
        fullWidth
        color={isEditMode ? 'gray.7' : 'blue.9'}
        onClick={() => setIsEditMode((prev) => !prev)}
      >
        {isEditMode ? 'Go Back' : 'Edit Item'}
      </Button>
      <Stack spacing="xl">
        {isEditMode ? (
          <FormUpdateItem
            queryRef={item}
            onItemUpdate={(response) => {
              setIsEditMode(false);
              setItemDrawer((prev) => ({
                ...prev,
                title: response.itemUpdate.node?.name as string,
              }));
            }}
          />
        ) : (
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
              <ItemInfoTabField
                title="Vendors:"
                value=" No vendors specified"
              />
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
        )}
      </Stack>
    </Stack>
  );
}

export default InformationTab;
