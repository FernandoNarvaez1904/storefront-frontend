/**
 * @generated SignedSource<<fed8754c5dc9040782f8f7f4f54f52b1>>
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
        readonly barcode: string;
        readonly id: string;
        readonly name: string;
        readonly sku: string;
        readonly " $fragmentSpreads": FragmentRefs<"ItemCard_ItemCardDataFragment">;
      };
    }>;
    readonly totalCount: number;
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
  "name": "totalCount",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "barcode",
  "storageKey": null
},
v4 = {
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
          (v0/*: any*/),
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
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
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
          (v0/*: any*/),
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
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "price",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "currentStock",
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
    "cacheID": "685fe9be24c16fd252c77eec3181f115",
    "id": null,
    "metadata": {},
    "name": "ItemGrid_AllItemsQuery",
    "operationKind": "query",
    "text": "query ItemGrid_AllItemsQuery {\n  itemConnection {\n    totalCount\n    edges {\n      node {\n        id\n        name\n        barcode\n        sku\n        ...ItemCard_ItemCardDataFragment\n      }\n    }\n  }\n}\n\nfragment ItemCard_ItemCardDataFragment on ItemType {\n  id\n  name\n  price\n  currentStock\n}\n"
  }
};
})();

(node as any).hash = "e5c18126bd9ad5a0e07f8349bff3399e";

export default node;
