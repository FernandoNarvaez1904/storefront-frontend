/**
 * @generated SignedSource<<60ced07c45f8ae76a2c814c67d41fc97>>
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
export type FormUpdateItemDisplay_UpdateItemMutation$variables = {
  input: ItemUpdateInput;
};
export type FormUpdateItemDisplay_UpdateItemMutation$data = {
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
export type FormUpdateItemDisplay_UpdateItemMutation = {
  response: FormUpdateItemDisplay_UpdateItemMutation$data;
  variables: FormUpdateItemDisplay_UpdateItemMutation$variables;
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
    "name": "FormUpdateItemDisplay_UpdateItemMutation",
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
    "name": "FormUpdateItemDisplay_UpdateItemMutation",
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
    "cacheID": "0447dfc5680e18880b2c50f721bc2b66",
    "id": null,
    "metadata": {},
    "name": "FormUpdateItemDisplay_UpdateItemMutation",
    "operationKind": "mutation",
    "text": "mutation FormUpdateItemDisplay_UpdateItemMutation(\n  $input: ItemUpdateInput!\n) {\n  itemUpdate(input: $input) {\n    node {\n      id\n      name\n      barcode\n      cost\n      markup\n      price\n    }\n    userErrors {\n      __typename\n      field\n      message\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ad18134f1f38779c63f26be94314b49d";

export default node;
