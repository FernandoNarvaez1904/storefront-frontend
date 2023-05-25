import { Stack } from '@mantine/core';
import { useState } from 'react';
import { useFragment } from 'react-relay';
import { useSetRecoilState } from 'recoil';
import { graphql } from 'relay-runtime';
import { itemDrawerState } from '../../../../state/atoms';
import { InformationTabFragment$key } from './__generated__/InformationTabFragment.graphql';
import FormUpdateItem from './FormUpdateItem';
import InformationTabActionHeader from './components/InformationTabActionHeader';
import InformationTabInfoSection from './InformationTabInfoSection';
import { FormUpdateItem_UpdateItemMutation$data } from './__generated__/FormUpdateItem_UpdateItemMutation.graphql';

const itemFragment = graphql`
  fragment InformationTabFragment on ItemType {
    id
    ...InformationTabInfoSectionFragment
    ...FormUpdateItem_ItemFragment
    ...InformationTabActionHeaderItemFragment
  }
`;

interface InformationTabProps {
  itemRef: InformationTabFragment$key;
}

function InformationTab({ itemRef }: InformationTabProps) {
  const item = useFragment<InformationTabFragment$key>(itemFragment, itemRef);
  const [isEditMode, setIsEditMode] = useState(false);
  const setItemDrawer = useSetRecoilState(itemDrawerState);

  const onItemUpdateUpdateDrawerTitle = (
    response: FormUpdateItem_UpdateItemMutation$data
  ) => {
    setIsEditMode(false);
    setItemDrawer((prev) => ({
      ...prev,
      title: response.itemUpdate.node?.name as string,
    }));
  };

  const content = isEditMode ? (
    <FormUpdateItem
      queryRef={item}
      onItemUpdate={onItemUpdateUpdateDrawerTitle}
    />
  ) : (
    <InformationTabInfoSection itemRef={item} />
  );

  return (
    <Stack spacing="xs" mt="xs" pb="md">
      <InformationTabActionHeader
        isEditMode={isEditMode}
        setIsEditMode={setIsEditMode}
        itemRef={item}
      />
      <Stack spacing="xl">{content}</Stack>
    </Stack>
  );
}

export default InformationTab;
