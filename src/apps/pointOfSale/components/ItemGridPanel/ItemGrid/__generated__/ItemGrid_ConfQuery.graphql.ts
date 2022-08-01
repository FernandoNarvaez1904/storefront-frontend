/**
 * @generated SignedSource<<a685fc982afab7ef5a8c9bd4a4d5c2ae>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ClientRequest, ClientQuery } from 'relay-runtime';
export type GridFilterType = "barcode" | "name" | "sku" | "%future added value";
export type GridType = "ImageGrid" | "TextGrid" | "%future added value";
export type ItemGrid_ConfQuery$variables = {};
export type ItemGrid_ConfQuery$data = {
  readonly pointOfSaleConf: {
    readonly gridFilterValue: {
      readonly gridFilterType: GridFilterType;
      readonly value: string;
    };
    readonly gridType: GridType;
  };
};
export type ItemGrid_ConfQuery = {
  response: ItemGrid_ConfQuery$data;
  variables: ItemGrid_ConfQuery$variables;
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
            "kind": "ScalarField",
            "name": "gridType",
            "storageKey": null
          },
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
    "name": "ItemGrid_ConfQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ItemGrid_ConfQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "8327d1a460ee522964ee5f0e37ee8c3b",
    "id": null,
    "metadata": {},
    "name": "ItemGrid_ConfQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "fd00504e7ffc61ac2017e665801e5df0";

export default node;
