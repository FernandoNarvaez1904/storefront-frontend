import { Stack, Tabs } from '@mantine/core';
import {
  IconClock,
  IconForklift,
  IconInfoCircle,
  IconReceipt,
} from '@tabler/icons';
import { ItemDrawerLoader_itemQuery } from 'apps/inventory/pages/Items/components/ItemsTable/components/ItemDrawer/__generated__/ItemDrawerLoader_itemQuery.graphql';
import { PreloadedQuery } from 'react-relay';
import useItemDrawerStyles from '../../ItemDrawerStyles';
import GeneralInformationTab from './tabs/GeneralInformationTab';

export type ItemDrawerInfoTabsDisplayProps = {
  queryRef: PreloadedQuery<ItemDrawerLoader_itemQuery>;
};

function ItemDrawerInfoTabsDisplay({
  queryRef,
}: ItemDrawerInfoTabsDisplayProps) {
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
          <GeneralInformationTab queryRef={queryRef} />
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
}

export default ItemDrawerInfoTabsDisplay;
