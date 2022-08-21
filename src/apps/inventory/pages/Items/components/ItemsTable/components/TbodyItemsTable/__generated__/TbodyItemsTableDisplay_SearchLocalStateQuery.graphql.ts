/**
 * @generated SignedSource<<897ef03efdcb219e8832993c9f53b1c7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ClientRequest, ClientQuery } from 'relay-runtime';
export type ItemsTable_FilterTypes = "barcode" | "name" | "sku" | "%future added value";
export type TbodyItemsTableDisplay_SearchLocalStateQuery$variables = {};
export type TbodyItemsTableDisplay_SearchLocalStateQuery$data = {
  readonly itemsTable_localState: {
    readonly filter: {
      readonly type: ItemsTable_FilterTypes;
      readonly value: string;
    };
  };
};
export type TbodyItemsTableDisplay_SearchLocalStateQuery = {
  response: TbodyItemsTableDisplay_SearchLocalStateQuery$data;
  variables: TbodyItemsTableDisplay_SearchLocalStateQuery$variables;
};

const node: ClientRequest = (function(){
var v0 = [
  {
    "kind": "ClientExtension",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ItemsTableLocalState",
        "kind": "LinkedField",
        "name": "itemsTable_localState",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ItemsTable_Filter",
            "kind": "LinkedField",
            "name": "filter",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "value",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "type",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TbodyItemsTableDisplay_SearchLocalStateQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TbodyItemsTableDisplay_SearchLocalStateQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "00518475effb689bc3241008e0eca812",
    "id": null,
    "metadata": {},
    "name": "TbodyItemsTableDisplay_SearchLocalStateQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "c1f425b2437031eeb53f2bbe543e176f";

export default node;
