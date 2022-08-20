/**
 * @generated SignedSource<<3be08252592d577e2d367a91b61de4eb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ClientRequest, ClientQuery } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemDrawer_LocalStateQuery$variables = {};
export type ItemDrawer_LocalStateQuery$data = {
  readonly itemsTable_localState: {
    readonly drawerState: {
      readonly currentItem: {
        readonly id: any;
        readonly name: string | null;
        readonly " $fragmentSpreads": FragmentRefs<"ItemDrawerContent_SingleItemFragment">;
      } | null;
      readonly opened: boolean;
    };
  };
};
export type ItemDrawer_LocalStateQuery = {
  response: ItemDrawer_LocalStateQuery$data;
  variables: ItemDrawer_LocalStateQuery$variables;
};

const node: ClientRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "opened",
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
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemDrawer_LocalStateQuery",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ItemsTableLocalState",
            "kind": "LinkedField",
            "name": "itemsTable_localState",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ItemsTable_DrawerLocalState",
                "kind": "LinkedField",
                "name": "drawerState",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ItemType",
                    "kind": "LinkedField",
                    "name": "currentItem",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      (v2/*: any*/),
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "ItemDrawerContent_SingleItemFragment"
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
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ItemDrawer_LocalStateQuery",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ItemsTableLocalState",
            "kind": "LinkedField",
            "name": "itemsTable_localState",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ItemsTable_DrawerLocalState",
                "kind": "LinkedField",
                "name": "drawerState",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ItemType",
                    "kind": "LinkedField",
                    "name": "currentItem",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      (v2/*: any*/),
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
                        "name": "price",
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
                        "name": "barcode",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isActive",
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
                        "name": "versionId",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "creationDate",
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
      }
    ]
  },
  "params": {
    "cacheID": "73d2f57ed95d324246a9424b5b3c9799",
    "id": null,
    "metadata": {},
    "name": "ItemDrawer_LocalStateQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "d0cbd70b2fc169fec5d4fc9b0a9eef49";

export default node;
