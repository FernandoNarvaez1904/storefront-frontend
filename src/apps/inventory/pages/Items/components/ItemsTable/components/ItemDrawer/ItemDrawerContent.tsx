import { Stack, Tabs } from '@mantine/core';
import {
  IconClock,
  IconForklift,
  IconInfoCircle,
  IconReceipt,
} from '@tabler/icons';
import GeneralInformationTab from 'apps/inventory/pages/Items/components/ItemsTable/components/ItemDrawer/TabsContent/GeneralInformationTab';
import { graphql, useFragment } from 'react-relay';
import { ItemDrawerContent_SingleItemFragment$key } from './__generated__/ItemDrawerContent_SingleItemFragment.graphql';
import useItemDrawerStyles from './ItemDrawerStyles';

const itemFragment = graphql`
  fragment ItemDrawerContent_SingleItemFragment on ItemType {
    ...GeneralInformationTab_itemFragment
  }
`;

type Props = {
  itemFragmentRef: ItemDrawerContent_SingleItemFragment$key;
};

function ItemDrawerContent({ itemFragmentRef }: Props) {
  const item = useFragment(itemFragment, itemFragmentRef);
  const { classes } = useItemDrawerStyles();

  return (
    <Stack sx={{ height: '100%' }}>
      <Tabs defaultValue="info" variant="outline" className={classes.tabs}>
        <Tabs.List>
          <Tabs.Tab value="info" icon={<IconInfoCircle size={18} />}>
            General
          </Tabs.Tab>
          <Tabs.Tab value="trans" icon={<IconReceipt size={18} />} disabled>
            Transactions
          </Tabs.Tab>
          <Tabs.Tab value="move" icon={<IconForklift size={18} />} disabled>
            Movements
          </Tabs.Tab>
          <Tabs.Tab value="hist" icon={<IconClock size={18} />} disabled>
            History
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="info" pl={5} sx={{ flexGrow: 1 }}>
          <GeneralInformationTab itemFragmentRef={item} />
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}

export default ItemDrawerContent;
