/**
 * @generated SignedSource<<2857ffc153d8ad10b4a99d0f4bf876cf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ItemUpdateInput = {
  data: ItemUpdateDataInput;
  id: any;
};
export type ItemUpdateDataInput = {
  barcode?: string | null;
  cost?: number | null;
  markup?: number | null;
  name?: string | null;
};
export type FormUpdateItem_UpdateItemMutation$variables = {
  input: ItemUpdateInput;
};
export type FormUpdateItem_UpdateItemMutation$data = {
  readonly itemUpdate: {
    readonly node: {
      readonly barcode: string | null;
      readonly cost: number;
      readonly id: any;
      readonly markup: number;
      readonly name: string | null;
      readonly price: number | null;
    } | null;
    readonly userErrors: ReadonlyArray<{
      readonly field: string;
      readonly message: string;
    }>;
  };
};
export type FormUpdateItem_UpdateItemMutation = {
  response: FormUpdateItem_UpdateItemMutation$data;
  variables: FormUpdateItem_UpdateItemMutation$variables;
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
      "name": "barcode",
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
    }
  ],
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "field",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "message",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FormUpdateItem_UpdateItemMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ItemUpdatePayload",
        "kind": "LinkedField",
        "name": "itemUpdate",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "userErrors",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/)
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
    "name": "FormUpdateItem_UpdateItemMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ItemUpdatePayload",
        "kind": "LinkedField",
        "name": "itemUpdate",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "62929246dc5b9a59edaaa1f3bc92afa7",
    "id": null,
    "metadata": {},
    "name": "FormUpdateItem_UpdateItemMutation",
    "operationKind": "mutation",
    "text": "mutation FormUpdateItem_UpdateItemMutation(\n  $input: ItemUpdateInput!\n) {\n  itemUpdate(input: $input) {\n    node {\n      id\n      name\n      barcode\n      cost\n      markup\n      price\n    }\n    userErrors {\n      __typename\n      field\n      message\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "494d3df843a05eb79bae2ce10483fb1b";

export default node;
