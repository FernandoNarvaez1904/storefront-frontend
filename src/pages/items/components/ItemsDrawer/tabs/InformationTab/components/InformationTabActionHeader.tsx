import { Button, Stack } from '@mantine/core';
import { graphql } from 'relay-runtime';
import { ConnectionHandler, useFragment, useMutation } from 'react-relay';
import { useSetRecoilState } from 'recoil';
import { InformationTabActionHeaderDeleteItemMutation } from './__generated__/InformationTabActionHeaderDeleteItemMutation.graphql';
import { InformationTabActionHeaderItemFragment$key } from './__generated__/InformationTabActionHeaderItemFragment.graphql';
import { itemDrawerState } from '../../../../../state/atoms';

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
    <Stack spacing="xs">
      <Button
        size="xs"
        fullWidth
        color={isEditMode ? 'gray.7' : 'blue.9'}
        onClick={() => setIsEditMode((prev) => !prev)}
      >
        {isEditMode ? 'Go Back' : 'Edit Item'}
      </Button>

      <Button
        size="xs"
        fullWidth
        color="red.9"
        loading={isInFlight}
        onClick={deleteItem}
      >
        Delete
      </Button>
    </Stack>
  );
}

export default InformationTabActionHeader;
