/**
 * @generated SignedSource<<24aa760e954c1ec5fc1911db34900d6b>>
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
    readonly " $fragmentSpreads": FragmentRefs<"TbodyItemsTableDisplay_AllItemFragment" | "TotalCountBadgeDisplay_ItemCountFragment">;
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
            "name": "TotalCountBadgeDisplay_ItemCountFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TbodyItemsTableDisplay_AllItemFragment"
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
    "cacheID": "ffda4b024120cf4f4fda24b086250a54",
    "id": null,
    "metadata": {},
    "name": "ItemsQuery_ItemsPageQuery",
    "operationKind": "query",
    "text": "query ItemsQuery_ItemsPageQuery {\n  itemConnection {\n    ...TotalCountBadgeDisplay_ItemCountFragment\n    ...TbodyItemsTableDisplay_AllItemFragment\n  }\n}\n\nfragment RowTbodyItems_ItemsRowFragment on ItemType {\n  id\n  name\n  sku\n  cost\n  markup\n  price\n  isService\n  isActive\n}\n\nfragment TbodyItemsTableDisplay_AllItemFragment on ItemTypeConnection {\n  edges {\n    node {\n      id\n      ...RowTbodyItems_ItemsRowFragment\n    }\n  }\n}\n\nfragment TotalCountBadgeDisplay_ItemCountFragment on ItemTypeConnection {\n  totalCount\n}\n"
  }
};

(node as any).hash = "594e5e6526e8a4816c85888832168220";

export default node;
