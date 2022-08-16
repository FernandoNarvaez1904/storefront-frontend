/**
 * @generated SignedSource<<629cf0654ad6ebee0110f7ada15c4da3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemsQuery_ItemsPageQuery$variables = {};
export type ItemsQuery_ItemsPageQuery$data = {
  readonly itemConnection: {
    readonly " $fragmentSpreads": FragmentRefs<"ItemTableTbodyDisplay_AllItemFragment" | "TotalCountBadgeComponent_ItemCountFragment">;
  };
};
export type ItemsQuery_ItemsPageQuery = {
  response: ItemsQuery_ItemsPageQuery$data;
  variables: ItemsQuery_ItemsPageQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemsQuery_ItemsPageQuery",
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "TotalCountBadgeComponent_ItemCountFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ItemTableTbodyDisplay_AllItemFragment"
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
    "name": "ItemsQuery_ItemsPageQuery",
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
            "kind": "ScalarField",
            "name": "totalCount",
            "storageKey": null
          },
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
                    "name": "sku",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cost",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "markup",
                    "storageKey": null
                  },
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
                    "name": "isService",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isActive",
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
    "cacheID": "53edb6cd4dc8d2e813ce10259ea30ceb",
    "id": null,
    "metadata": {},
    "name": "ItemsQuery_ItemsPageQuery",
    "operationKind": "query",
    "text": "query ItemsQuery_ItemsPageQuery {\n  itemConnection {\n    ...TotalCountBadgeComponent_ItemCountFragment\n    ...ItemTableTbodyDisplay_AllItemFragment\n  }\n}\n\nfragment ItemTableTbodyDisplay_AllItemFragment on ItemTypeConnection {\n  edges {\n    node {\n      id\n      name\n      sku\n      cost\n      markup\n      price\n      isService\n      isActive\n    }\n  }\n}\n\nfragment TotalCountBadgeComponent_ItemCountFragment on ItemTypeConnection {\n  totalCount\n}\n"
  }
};

(node as any).hash = "bcc23a68e40adb91819aa38b3876908a";

export default node;
