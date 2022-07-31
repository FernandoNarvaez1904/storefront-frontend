/**
 * @generated SignedSource<<2c040ff4e0ae58912b00cea4176e4788>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ClientRequest, ClientQuery } from 'relay-runtime';
export type ProductStack_Query$variables = {};
export type ProductStack_Query$data = {
  readonly activeOrder: {
    readonly items: ReadonlyArray<{
      readonly item: {
        readonly id: any;
        readonly name: string | null;
        readonly price: number | null;
      } | null;
      readonly quantity: number | null;
    } | null> | null;
  } | null;
};
export type ProductStack_Query = {
  response: ProductStack_Query$data;
  variables: ProductStack_Query$variables;
};

const node: ClientRequest = (function(){
var v0 = [
  {
    "kind": "ClientExtension",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ActiveOrder",
        "kind": "LinkedField",
        "name": "activeOrder",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ItemInOrder",
            "kind": "LinkedField",
            "name": "items",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ItemType",
                "kind": "LinkedField",
                "name": "item",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "price",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "quantity",
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
    "name": "ProductStack_Query",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ProductStack_Query",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "42e74dde321badfc00bd4bf8adf5203b",
    "id": null,
    "metadata": {},
    "name": "ProductStack_Query",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "e9e1bf8fd7b05ba16ce1b041825295ae";

export default node;
