/**
 * @generated SignedSource<<ee035c413f7c60d7cf9fb8cc3bfd96bd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ClientRequest, ClientQuery } from 'relay-runtime';
export type GridType = "ImageGrid" | "TextGrid" | "%future added value";
export type ProductStack_Query$variables = {};
export type ProductStack_Query$data = {
  readonly activeOrder: {
    readonly items: ReadonlyArray<{
      readonly id: string;
      readonly item: {
        readonly id: any;
        readonly name: string | null;
        readonly price: number | null;
      };
      readonly quantity: number;
    } | null>;
  };
  readonly pointOfSaleConf: {
    readonly gridType: GridType;
  };
};
export type ProductStack_Query = {
  response: ProductStack_Query$data;
  variables: ProductStack_Query$variables;
};

const node: ClientRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
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
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "ItemType",
                "kind": "LinkedField",
                "name": "item",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
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
      },
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
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ProductStack_Query",
    "selections": (v1/*: any*/)
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

(node as any).hash = "0328d5a85f3cb8d34d981b7d2dd4f478";

export default node;
