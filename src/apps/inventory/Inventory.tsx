import { AppShell, Box, createStyles, Stack } from "@mantine/core";
import Header from "apps/inventory/components/Header";
import { setItemDrawerStoreDefaultValues } from "apps/inventory/pages/Items/components/ItemsTable/store/defaultValues";
import { Outlet } from "react-router-dom";
import relayEnvironment from "RelayEnviroment";
import Sidebar from "./components/Sidebar/Sidebar";

// Not in its own file as its in root
const useInventoryStyles = createStyles({
  fullHeightFlex: {
    height: '100%',
  },
  growingFlexItem: {
    flexGrow: 1,
  },
});

function Inventory() {
  const { classes } = useInventoryStyles();
  setItemDrawerStoreDefaultValues(relayEnvironment);
  return (
    <AppShell navbar={<Sidebar />} padding={0}>
      <Stack className={classes.fullHeightFlex} spacing="xs">
        <Header />
        <Box className={classes.growingFlexItem}>
          {/* Renders the content inside Sub-Route */}
          <Outlet />
        </Box>
      </Stack>
    </AppShell>
  );
}

export default Inventory;
