/**
 * @generated SignedSource<<03aa8d35c9035ff7cc735a6ca16febfd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ClientRequest, ClientQuery } from 'relay-runtime';
export type GridFilterType = "barcode" | "name" | "sku" | "%future added value";
export type SearchInput_ConfQuery$variables = {};
export type SearchInput_ConfQuery$data = {
  readonly pointOfSaleConf: {
    readonly gridFilterValue: {
      readonly gridFilterType: GridFilterType;
      readonly value: string;
    };
  };
};
export type SearchInput_ConfQuery = {
  response: SearchInput_ConfQuery$data;
  variables: SearchInput_ConfQuery$variables;
};

const node: ClientRequest = (function(){
var v0 = [
  {
    "kind": "ClientExtension",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PointOfSaleConfType",
        "kind": "LinkedField",
        "name": "pointOfSaleConf",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "GridFilterItemValue",
            "kind": "LinkedField",
            "name": "gridFilterValue",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "gridFilterType",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "value",
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
    "name": "SearchInput_ConfQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SearchInput_ConfQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "c887a4bd1e14d6c49f2555a3126e2fb4",
    "id": null,
    "metadata": {},
    "name": "SearchInput_ConfQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "a36eef60d4b2b2ff51ead5351ed3271c";

export default node;
