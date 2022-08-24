import { Box, createStyles, Stack } from "@mantine/core";
import { setItemDrawerStoreDefaultValues } from "apps/inventory/pages/Items/components/ItemsTable/store/defaultValues";
import { Outlet } from "react-router-dom";
import relayEnvironment from "RelayEnviroment";

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
    <Stack className={classes.fullHeightFlex} spacing="xs">
      <Box className={classes.growingFlexItem}>
        {/* Renders the content inside Sub-Route */}
        <Outlet />
      </Box>
    </Stack>
  );
}

export default Inventory;
