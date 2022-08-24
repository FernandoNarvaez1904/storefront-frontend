import { setItemDrawerStoreDefaultValues } from 'apps/inventory/pages/Items/components/ItemsTable/store/defaultValues';
import { Outlet } from 'react-router-dom';
import relayEnvironment from 'RelayEnviroment';

function Inventory() {
  setItemDrawerStoreDefaultValues(relayEnvironment);
  return <Outlet />;
}

export default Inventory;
