import RelayModernEnvironment from 'relay-runtime/lib/store/RelayModernEnvironment';
import { commitLocalUpdate } from 'relay-runtime';

export const updateGridTypeConf = (
  environment: RelayModernEnvironment,
  val: 'TextGrid' | 'ImageGrid'
) => {
  commitLocalUpdate(environment, (store) => {
    const confRecord = store.get('client:root:pointOfSaleConf');
    confRecord?.setValue(val, 'gridType');
  });
};
export const updateGridFilterItem = (
  environment: RelayModernEnvironment,
  val: {
    kind: 'name' | 'barcode' | 'sku' | '%future added value';
    value: string;
  }
) => {
  commitLocalUpdate(environment, (store) => {
    const confRecord = store.get('client:root:pointOfSaleConf:gridFilterValue');
    confRecord?.setValue(val.kind, 'gridFilterType');
    confRecord?.setValue(val.value, 'value');
  });
};
