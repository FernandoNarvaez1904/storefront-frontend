/* eslint-disable react/jsx-props-no-spreading */
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
        ...InformationTabFragment
        ...FormUpdateItem_ItemFragment
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export type FormUpdateItemProps = {
  queryRef: FormUpdateItem_ItemFragment$key;
  onItemUpdate:
    | ((
        response: FormUpdateItem_UpdateItemMutation$data,
        errors: PayloadError[] | null
      ) => void | null)
    | undefined;
};

function FormUpdateItem({ queryRef, onItemUpdate }: FormUpdateItemProps) {
  const item = useFragment<FormUpdateItem_ItemFragment$key>(
    itemFragment,
    queryRef
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

  const onSubmit = () =>
    form.onSubmit((values) => {
      const updateItemInput: ItemUpdateDataInput = {
        barcode: values.barcode === item.barcode ? null : values.barcode,
        cost: values.cost === item.cost ? null : values.cost,
        markup: values.markup === item.markup ? null : values.markup,
        name: values.name === item.name ? null : values.name,
      };
      updateItemCommit({
        variables: {
          input: {
            id: item.id,
            data: updateItemInput,
          },
        },
        onCompleted: (response, errors) => {
          const hasErrors = response.itemUpdate.userErrors.length;
          if (hasErrors) {
            // Show Error in corresponding field
            response.itemUpdate.userErrors.forEach((error) => {
              form.setFieldError(error.field, error.message);
            });
            return;
          }
          // Only runs if hasErrors is false
          if (onItemUpdate) {
            onItemUpdate(response, errors);
          }
        },
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

export default FormUpdateItem;
