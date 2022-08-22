/**
 * @generated SignedSource<<422d2d7a847d3b1d6d402d55f5418852>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemCreateInput = {
  barcode: string;
  cost: number;
  isService: boolean;
  markup: number;
  name: string;
  sku: string;
};
export type FormCreateItem_CreateItemMutation$variables = {
  input: ItemCreateInput;
};
export type FormCreateItem_CreateItemMutation$data = {
  readonly itemCreate: {
    readonly node: {
      readonly id: any;
      readonly " $fragmentSpreads": FragmentRefs<"FormUpdateItem_ItemFragment" | "RowTbodyItems_ItemsRowFragment">;
    } | null;
    readonly userErrors: ReadonlyArray<{
      readonly field: string;
      readonly message: string;
    }>;
  };
};
export type FormCreateItem_CreateItemMutation = {
  response: FormCreateItem_CreateItemMutation$data;
  variables: FormCreateItem_CreateItemMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "field",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "message",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FormCreateItem_CreateItemMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ItemCreatePayload",
        "kind": "LinkedField",
        "name": "itemCreate",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "userErrors",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ItemType",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "RowTbodyItems_ItemsRowFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "FormUpdateItem_ItemFragment"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormCreateItem_CreateItemMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ItemCreatePayload",
        "kind": "LinkedField",
        "name": "itemCreate",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "userErrors",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ItemType",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v4/*: any*/),
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
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "barcode",
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
    "cacheID": "076174f3693b9a4ef9f1e40dc1349765",
    "id": null,
    "metadata": {},
    "name": "FormCreateItem_CreateItemMutation",
    "operationKind": "mutation",
    "text": "mutation FormCreateItem_CreateItemMutation(\n  $input: ItemCreateInput!\n) {\n  itemCreate(input: $input) {\n    userErrors {\n      __typename\n      field\n      message\n    }\n    node {\n      id\n      ...RowTbodyItems_ItemsRowFragment\n      ...FormUpdateItem_ItemFragment\n    }\n  }\n}\n\nfragment FormUpdateItem_ItemFragment on ItemType {\n  id\n  name\n  barcode\n  cost\n  markup\n  price\n}\n\nfragment RowTbodyItems_ItemsRowFragment on ItemType {\n  id\n  name\n  sku\n  cost\n  markup\n  price\n  isService\n  isActive\n}\n"
  }
};
})();

(node as any).hash = "81a7007dc7a0985b6501ed5b885f6b3a";

export default node;
