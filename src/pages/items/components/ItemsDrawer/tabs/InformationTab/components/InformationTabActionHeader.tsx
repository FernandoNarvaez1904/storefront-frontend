import { Group } from '@mantine/core';
import { graphql } from 'relay-runtime';
import { ConnectionHandler, useFragment, useMutation } from 'react-relay';
import { useSetRecoilState } from 'recoil';
import { IconArrowLeft, IconEdit, IconTrash } from '@tabler/icons';
import { InformationTabActionHeaderDeleteItemMutation } from './__generated__/InformationTabActionHeaderDeleteItemMutation.graphql';
import { InformationTabActionHeaderItemFragment$key } from './__generated__/InformationTabActionHeaderItemFragment.graphql';
import { itemDrawerState } from '../../../../../state/atoms';
import {
  DeleteItemButton,
  EditItemButton,
  GoBackItemButton,
} from '../InformationTab.Styles';

const deleteItemMutation = graphql`
  mutation InformationTabActionHeaderDeleteItemMutation(
    $input: ItemDeleteInput!
    $connections: [ID!]!
  ) {
    itemDelete(input: $input) {
      node {
        id @deleteEdge(connections: $connections)
      }
      userErrors {
        field
        message
      }
    }
  }
`;

const itemFragment = graphql`
  fragment InformationTabActionHeaderItemFragment on ItemType {
    id
  }
`;

interface InformationTypeActionHeaderProps {
  isEditMode: boolean;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  itemRef: InformationTabActionHeaderItemFragment$key;
}

function InformationTabActionHeader({
  isEditMode,
  setIsEditMode,
  itemRef,
}: InformationTypeActionHeaderProps) {
  const item = useFragment<InformationTabActionHeaderItemFragment$key>(
    itemFragment,
    itemRef
  );

  const [commitDeleteItemMutation, isInFlight] =
    useMutation<InformationTabActionHeaderDeleteItemMutation>(
      deleteItemMutation
    );

  const connectionId = ConnectionHandler.getConnectionID(
    'root',
    'ItemsTableItemConnectionFragment_itemConnection'
  );

  const setDrawerState = useSetRecoilState(itemDrawerState);

  const deleteItem = () => {
    commitDeleteItemMutation({
      variables: { input: { id: item.id }, connections: [connectionId] },
      onCompleted: () => {
        setDrawerState({ isOpen: false, title: '', node: null });
      },
    });
  };

  return (
    <Group spacing="xs">
      {isEditMode ? (
        <>
          <GoBackItemButton
            size="xs"
            onClick={() => setIsEditMode((prev) => !prev)}
            leftIcon={<IconArrowLeft size={18} />}
          >
            Go Back
          </GoBackItemButton>

          <DeleteItemButton
            size="xs"
            loading={isInFlight}
            onClick={deleteItem}
            leftIcon={<IconTrash size={18} />}
          >
            Delete
          </DeleteItemButton>
        </>
      ) : (
        <EditItemButton
          size="xs"
          onClick={() => setIsEditMode((prev) => !prev)}
          leftIcon={<IconEdit size={18} />}
        >
          Edit Item
        </EditItemButton>
      )}
    </Group>
  );
}

export default InformationTabActionHeader;
