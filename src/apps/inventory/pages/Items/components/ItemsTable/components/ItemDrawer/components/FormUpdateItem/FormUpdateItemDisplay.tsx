import { Button, NumberInput, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import ItemDrawerLoader_itemQueryGraphql, {
  ItemDrawerLoader_itemQuery,
} from 'apps/inventory/pages/Items/components/ItemsTable/components/ItemDrawer/__generated__/ItemDrawerLoader_itemQuery.graphql';
import {
  graphql,
  PreloadedQuery,
  useFragment,
  useMutation,
  usePreloadedQuery,
} from 'react-relay';
import { PayloadError } from 'relay-runtime';
import { FormUpdateItemDisplay_ItemFragment$key } from './__generated__/FormUpdateItemDisplay_ItemFragment.graphql';
import {
  FormUpdateItemDisplay_UpdateItemMutation,
  FormUpdateItemDisplay_UpdateItemMutation$data,
  ItemUpdateDataInput,
} from './__generated__/FormUpdateItemDisplay_UpdateItemMutation.graphql';

const itemFragment = graphql`
  fragment FormUpdateItemDisplay_ItemFragment on ItemType {
    id
    name
    barcode
    cost
    markup
    price
  }
`;

const updateItemMutation = graphql`
  mutation FormUpdateItemDisplay_UpdateItemMutation($input: ItemUpdateInput!) {
    itemUpdate(input: $input) {
      node {
        id
        name
        barcode
        cost
        markup
        price
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export type FormUpdateItemDisplayProps = {
  queryRef: PreloadedQuery<ItemDrawerLoader_itemQuery>;
  onItemUpdate:
    | ((
        response: FormUpdateItemDisplay_UpdateItemMutation$data,
        errors: PayloadError[] | null
      ) => void | null)
    | undefined;
};

function FormUpdateItemDisplay({
  queryRef,
  onItemUpdate,
}: FormUpdateItemDisplayProps) {
  const data = usePreloadedQuery<ItemDrawerLoader_itemQuery>(
    ItemDrawerLoader_itemQueryGraphql,
    queryRef
  );
  const item = useFragment<FormUpdateItemDisplay_ItemFragment$key>(
    itemFragment,
    data.item
  );
  const [updateItemCommit, onFlight] =
    useMutation<FormUpdateItemDisplay_UpdateItemMutation>(updateItemMutation);

  const form = useForm({
    initialValues: {
      name: item.name,
      barcode: item.barcode,
      cost: item.cost,
      markup: item.markup,
      price: item.price,
    },
  });

  const onSubmit = () =>
    form.onSubmit((values) => {
      const updateItemInput: ItemUpdateDataInput = {
        barcode: values.barcode,
        cost: values.cost,
        markup: values.markup,
        name: values.name,
      };
      updateItemCommit({
        variables: {
          input: {
            id: item.id,
            data: updateItemInput,
          },
        },
        onCompleted: onItemUpdate,
      });
    });

  return (
    <form onSubmit={onSubmit()}>
      <Stack>
        <TextInput label="Name" required {...form.getInputProps('name')} />
        <TextInput
          label="Barcode"
          required
          {...form.getInputProps('barcode')}
        />
        <NumberInput label="Cost" required {...form.getInputProps('cost')} />
        <NumberInput
          label="Markup"
          required
          {...form.getInputProps('markup')}
        />
        <NumberInput
          label="Price"
          required
          disabled
          {...form.getInputProps('price')}
        />
        <Button type="submit" loading={onFlight} disabled={!form.isDirty()}>
          Save Item
        </Button>
      </Stack>
    </form>
  );
}

export default FormUpdateItemDisplay;
