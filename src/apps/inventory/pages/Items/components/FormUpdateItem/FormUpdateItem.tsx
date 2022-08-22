import { Button, NumberInput, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { graphql, useFragment, useMutation } from 'react-relay';
import { PayloadError } from 'relay-runtime';
import { FormUpdateItem_ItemFragment$key } from './__generated__/FormUpdateItem_ItemFragment.graphql';
import {
  FormUpdateItem_UpdateItemMutation,
  FormUpdateItem_UpdateItemMutation$data,
  ItemUpdateDataInput,
} from './__generated__/FormUpdateItem_UpdateItemMutation.graphql';

const itemFragment = graphql`
  fragment FormUpdateItem_ItemFragment on ItemType {
    id
    name
    barcode
    cost
    markup
    price
  }
`;

const updateItemMutation = graphql`
  mutation FormUpdateItem_UpdateItemMutation($input: ItemUpdateInput!) {
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

type Props = {
  itemFragmentRef: FormUpdateItem_ItemFragment$key;
  onItemUpdate:
    | ((
        response: FormUpdateItem_UpdateItemMutation$data,
        errors: PayloadError[] | null
      ) => void | null)
    | undefined;
};

function FormUpdateItem({ itemFragmentRef, onItemUpdate }: Props) {
  const item = useFragment<FormUpdateItem_ItemFragment$key>(
    itemFragment,
    itemFragmentRef
  );
  const [updateItemCommit, onFlight] =
    useMutation<FormUpdateItem_UpdateItemMutation>(updateItemMutation);

  const form = useForm({
    initialValues: {
      name: item.name,
      barcode: item.barcode,
      cost: item.cost,
      markup: item.markup,
      price: item.price,
    },
  });

  const onSubmit = () => {
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
  };

  return (
    <form onSubmit={onSubmit}>
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

export default FormUpdateItem;
