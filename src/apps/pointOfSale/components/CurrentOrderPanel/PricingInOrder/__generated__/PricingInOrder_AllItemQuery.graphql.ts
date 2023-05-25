/**
 * @generated SignedSource<<e007305006beeb17c091ed90e4988f7a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ClientRequest, ClientQuery } from 'relay-runtime';
export type PricingInOrder_AllItemQuery$variables = {};
export type PricingInOrder_AllItemQuery$data = {
  readonly activeOrder: {
    readonly items: ReadonlyArray<{
      readonly item: {
        readonly price: number | null;
      };
      readonly quantity: number;
    } | null>;
  };
};
export type PricingInOrder_AllItemQuery = {
  response: PricingInOrder_AllItemQuery$data;
  variables: PricingInOrder_AllItemQuery$variables;
};

const node: ClientRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "price",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "quantity",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PricingInOrder_AllItemQuery",
    "selections": [
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
                      (v0/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v1/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ]
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PricingInOrder_AllItemQuery",
    "selections": [
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
                      (v0/*: any*/),
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v1/*: any*/),
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "447fe202a975ca9c1eec345eb1bc41a1",
    "id": null,
    "metadata": {},
    "name": "PricingInOrder_AllItemQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "e8ceae780faf4a7c86d5b99957ba41a0";

export default node;
