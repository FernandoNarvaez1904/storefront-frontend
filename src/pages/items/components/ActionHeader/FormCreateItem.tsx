/* eslint-disable */
import { Button, NumberInput, Stack, Switch, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { ConnectionHandler, graphql, useMutation } from 'react-relay';
import { PayloadError } from 'relay-runtime';
import {
  FormCreateItem_CreateItemMutation,
  FormCreateItem_CreateItemMutation$data,
} from './__generated__/FormCreateItem_CreateItemMutation.graphql';

const createItemMutation = graphql`
  mutation FormCreateItem_CreateItemMutation(
    $input: ItemCreateInput!
    $connections: [ID!]!
  ) {
    itemCreate(input: $input) {
      userErrors {
        field
        message
      }
      node
        @prependNode(connections: $connections, edgeTypeName: "CommentsEdge") {
        id
        name
        barcode
        cost
        isActive
        sku
      }
    }
  }
`;

interface FormItemCreateProps {
  onItemCreated: (
    response?: FormCreateItem_CreateItemMutation$data,
    errors?: PayloadError[] | null
  ) => void;
}

interface CreateItemFormValues {
  name: string;
  sku: string;
  barcode: string;
  cost: number | null;
  markup: number | null;
  price: number | null;
  isService: boolean;
}

function FormCreateItem({ onItemCreated }: FormItemCreateProps) {
  const [commit, onFlight] =
    useMutation<FormCreateItem_CreateItemMutation>(createItemMutation);

  const formInitialValue: CreateItemFormValues = {
    name: '',
    sku: '',
    barcode: '',
    cost: null,
    markup: null,
    price: null,
    isService: false,
  };

  const form = useForm({
    initialValues: formInitialValue,
  });

  const price =
    (form.values.cost as number) +
    (form.values.cost as number) * ((form.values.markup as number) / 100);

  const connectionId = ConnectionHandler.getConnectionID(
    'root',
    'ItemsTableItemConnectionFragment_itemConnection'
  );

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
        connections: [connectionId],
      },
      onCompleted: (response, errors) => {
        const hasErrors = response.itemCreate.userErrors.length;
        if (hasErrors) {
          // Show Error in corresponding field
          response.itemCreate.userErrors.forEach((error) => {
            form.setFieldError(error.field, error.message);
          });
          return;
        }
        // Only runs if hasErrors is false
        onItemCreated(response, errors);
      },
      updater: (store) => {
        // Getting Connection
        const itemCon = store.get(connectionId);
        if (itemCon == null) return;
        // Adding 1 to the totalCount
        const totalCount = itemCon.getValue('totalCount') as number;
        if (totalCount == null) return;
        itemCon.setValue(totalCount + 1, 'totalCount');
      },
    });
  });

  return (
    <form onSubmit={onSubmit} style={{ height: '100%' }}>
      <Stack spacing="xs" sx={{ height: '100%' }}>
        <TextInput
          label="Name"
          placeholder="Item's Name"
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
          label="Price"
          precision={2}
          placeholder={price}
          required
          description="Editing Coming Soon"
          {...form.getInputProps('price')}
        />
        <Switch
          label="Is Service"
          mt="sm"
          {...form.getInputProps('isService')}
        />
        <Button mt="sm" type="submit" loading={onFlight}>
          Save Item
        </Button>
      </Stack>
    </form>
  );
}

export default FormCreateItem;
