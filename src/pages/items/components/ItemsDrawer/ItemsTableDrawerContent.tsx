import { ScrollArea, Stack, Tabs, Text, useMantineTheme } from '@mantine/core';
import { useElementSize, useMediaQuery } from '@mantine/hooks';
import {
  IconClock,
  IconForklift,
  IconInfoCircle,
  IconReceipt,
} from '@tabler/icons';
import { ReactNode } from 'react';
import InformationTab from './tabs';
import { InformationTabFragment$key } from './tabs/InformationTab/__generated__/InformationTabFragment.graphql';

interface ItemsTableDrawerContentProps {
  itemRef: InformationTabFragment$key;
}

function ScrollPanelContent({ children }: { children: ReactNode }) {
  const { height, ref } = useElementSize();
  return (
    <Stack sx={{ height: '100%' }} ref={ref} pl="xs">
      <ScrollArea sx={{ height }}>{children}</ScrollArea>
    </Stack>
  );
}

function ItemsTableDrawerContent({ itemRef }: ItemsTableDrawerContentProps) {
  const theme = useMantineTheme();
  const isScreenSM = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  return (
    <Tabs defaultValue="info" variant="outline" sx={{ height: '100%' }}>
      <ScrollArea sx={{ width: '100%' }}>
        <Tabs.List sx={{ display: 'flex', flexWrap: 'nowrap' }}>
          <Tabs.Tab
            value="info"
            icon={<IconInfoCircle size={isScreenSM ? 20 : 18} />}
          >
            <Text size={isScreenSM ? 'md' : 'sm'}>General </Text>
          </Tabs.Tab>
          <Tabs.Tab
            value="trans"
            icon={<IconReceipt size={isScreenSM ? 20 : 18} />}
          >
            <Text size={isScreenSM ? 'md' : 'sm'}>Transactions</Text>
          </Tabs.Tab>
          <Tabs.Tab
            value="move"
            icon={<IconForklift size={isScreenSM ? 20 : 18} />}
          >
            <Text size={isScreenSM ? 'md' : 'sm'}>Movements</Text>
          </Tabs.Tab>
          <Tabs.Tab
            value="hist"
            icon={<IconClock size={isScreenSM ? 20 : 18} />}
          >
            <Text size={isScreenSM ? 'md' : 'sm'}>History</Text>
          </Tabs.Tab>
        </Tabs.List>
      </ScrollArea>

      <Tabs.Panel value="info" sx={{ height: '90%' }}>
        <ScrollPanelContent>
          <InformationTab itemRef={itemRef} />
        </ScrollPanelContent>
      </Tabs.Panel>

      <Tabs.Panel value="trans" sx={{ height: '90%' }}>
        <ScrollPanelContent>trans</ScrollPanelContent>
      </Tabs.Panel>

      <Tabs.Panel value="move" sx={{ height: '90%' }}>
        <ScrollPanelContent>move</ScrollPanelContent>
      </Tabs.Panel>
      <Tabs.Panel value="hist" sx={{ height: '90%' }}>
        <ScrollPanelContent>hist</ScrollPanelContent>
      </Tabs.Panel>
    </Tabs>
  );
}

export default ItemsTableDrawerContent;
