/**
 * @generated SignedSource<<0bd765fe4697ec6d2a1942e5753c65ae>>
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
        readonly name: string | null;
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
  "name": "name",
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
    "cacheID": "10d0bc8bb6b1fa79582ec512193c4eab",
    "id": null,
    "metadata": {},
    "name": "ItemGrid_AllItemsQuery",
    "operationKind": "query",
    "text": "query ItemGrid_AllItemsQuery {\n  itemConnection {\n    edges {\n      node {\n        name\n        ...ItemCard_ItemCardDataFragment\n      }\n    }\n  }\n}\n\nfragment ItemCard_ItemCardDataFragment on ItemType {\n  id\n  name\n  price\n}\n"
  }
};
})();

(node as any).hash = "f4fde906e649b38771c5054b7b554428";

export default node;
