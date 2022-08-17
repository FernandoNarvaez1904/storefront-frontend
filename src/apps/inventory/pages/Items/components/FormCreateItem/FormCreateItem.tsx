import { Button, NumberInput, Stack, Switch, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import {
  FormCreateItem_CreateItemMutation,
  FormCreateItem_CreateItemMutation$data,
} from 'apps/inventory/pages/Items/components/FormCreateItem/__generated__/FormCreateItem_CreateItemMutation.graphql';
import { graphql, useMutation } from 'react-relay';
import { PayloadError, SelectorStoreUpdater } from 'relay-runtime';

const createItemMutation = graphql`
  mutation FormCreateItem_CreateItemMutation($input: ItemCreateInput!) {
    itemCreate(input: $input) {
      userErrors {
        field
        message
      }
      node {
        id
        ...RowTbodyItems_ItemsRowFragment
      }
    }
  }
`;

type Props = {
  onItemCreated: (
    response?: FormCreateItem_CreateItemMutation$data,
    errors?: PayloadError[] | null
  ) => void;
};

function FormCreateItem({ onItemCreated }: Props) {
  const [commit, onFlight] =
    useMutation<FormCreateItem_CreateItemMutation>(createItemMutation);

  const initVal: {
    name: string;
    sku: string;
    barcode: string;
    cost: number | null;
    markup: number | null;
    price: number | null;
    isService: boolean;
  } = {
    name: '',
    sku: '',
    barcode: '',
    cost: null,
    markup: null,
    price: null,
    isService: false,
  };

  const form = useForm({
    initialValues: initVal,
  });

  const price =
    (form.values.cost as number) +
    (form.values.cost as number) * ((form.values.markup as number) / 100);

  const addingNewElementToItemConnectionStore: SelectorStoreUpdater<
    FormCreateItem_CreateItemMutation$data
  > = (store, data) => {
    // getting itemConnection
    const itemCon = store.get('client:root:itemConnection');
    if (itemCon == null) return;

    // Getting new item's record in the store
    if (data.itemCreate.node === null) return;
    const record = store.get(data.itemCreate.node.id);
    // If record does not Exist AKA the mutation was not successful return
    if (record === null || record === undefined) return;

    // Adding 1 to the totalCount
    const totalCount = itemCon.getValue('totalCount') as number;
    if (totalCount == null) return;
    itemCon.setValue(totalCount + 1, 'totalCount');

    // Getting all the existing edges
    const items = itemCon.getLinkedRecords('edges');
    if (items === null || items === undefined) return;

    // Creating a new edge, that links to the new item's record
    const newEdge = store.create(
      `client:root:itemConnection:edges:${items.length}`,
      'ItemTypeEdge'
    );
    newEdge.setLinkedRecord(record, 'node');

    // Adding the new edge to  itemsConnection Record
    itemCon.setLinkedRecords([newEdge, ...items], 'edges');
  };

  const onSubmit = form.onSubmit((values) => {
    if (values.cost === null) return;
    if (values.markup === null) return;

    commit({
      variables: {
        input: {
          barcode: values.barcode,
          cost: values.cost,
          sku: values.sku,
          markup: values.markup,
          name: values.name,
          isService: values.isService,
        },
      },
      onCompleted: (response, errors) => {
        const hasErrors = response.itemCreate.userErrors.length;
        if (hasErrors) {
          response.itemCreate.userErrors.forEach((error) => {
            form.setFieldError(error.field, error.message);
          });
          return;
        }
        // Only runs if hasErrors is false
        onItemCreated(response, errors);
      },

      updater: addingNewElementToItemConnectionStore,
    });
  });

  return (
    <form onSubmit={onSubmit} style={{ height: '100%' }}>
      <Stack spacing="xs" sx={{ height: '100%' }}>
        <TextInput
          label="Name"
          placeholder={"Item's Name"}
          required
          {...form.getInputProps('name')}
        />
        <TextInput
          label="SKU"
          placeholder="ex: 4567CK"
          required
          {...form.getInputProps('sku')}
        />
        <TextInput
          label="Barcode"
          placeholder="Scan the barcode!"
          required
          {...form.getInputProps('barcode')}
        />
        <NumberInput
          label="Cost"
          precision={2}
          placeholder="C$0.00"
          required
          {...form.getInputProps('cost')}
        />
        <NumberInput
          label="Markup"
          precision={2}
          placeholder="0.00%"
          required
          {...form.getInputProps('markup')}
        />
        <NumberInput
          disabled
          description="Editing Coming Soon"
          label="Price"
          precision={2}
          placeholder={price}
          required
          {...form.getInputProps('price')}
        />

        <Switch
          label="Is Service"
          {...form.getInputProps('isService')}
          mt="sm"
        />
        <Button mt="sm" type="submit" loading={onFlight}>
          Save Item
        </Button>
      </Stack>
    </form>
  );
}

export default FormCreateItem;
