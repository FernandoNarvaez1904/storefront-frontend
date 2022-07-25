/**
 * @generated SignedSource<<ad442a4966fc037ba4c4ff4ec9387f14>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemGrid_AllItemsQuery$variables = {};
export type ItemGrid_AllItemsQuery$data = {
  readonly itemConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly barcode: string | null;
        readonly id: any;
        readonly name: string | null;
        readonly sku: string;
        readonly " $fragmentSpreads": FragmentRefs<"ItemCard_ItemCardDataFragment">;
      };
    }>;
  };
};
export type ItemGrid_AllItemsQuery = {
  response: ItemGrid_AllItemsQuery$data;
  variables: ItemGrid_AllItemsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "barcode",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "sku",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemGrid_AllItemsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ItemTypeConnection",
        "kind": "LinkedField",
        "name": "itemConnection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ItemTypeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ItemType",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "ItemCard_ItemCardDataFragment"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ItemGrid_AllItemsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ItemTypeConnection",
        "kind": "LinkedField",
        "name": "itemConnection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ItemTypeEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ItemType",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "price",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "00bc0e1cc8d721dc65d4e073bc16c40e",
    "id": null,
    "metadata": {},
    "name": "ItemGrid_AllItemsQuery",
    "operationKind": "query",
    "text": "query ItemGrid_AllItemsQuery {\n  itemConnection {\n    edges {\n      node {\n        id\n        name\n        barcode\n        sku\n        ...ItemCard_ItemCardDataFragment\n      }\n    }\n  }\n}\n\nfragment ItemCard_ItemCardDataFragment on ItemType {\n  id\n  name\n  price\n}\n"
  }
};
})();

(node as any).hash = "101291d1d78c19fe13426ee8da357a9d";

export default node;
