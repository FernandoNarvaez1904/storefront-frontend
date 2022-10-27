/**
 * @generated SignedSource<<5eb2274824a7caf2e373e2590f3206f4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
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
      readonly barcode: string;
      readonly cost: number;
      readonly id: string;
      readonly isActive: boolean;
      readonly name: string;
      readonly sku: string;
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
      "name": "isActive",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "sku",
      "storageKey": null
    }
  ],
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
          (v4/*: any*/)
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
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0306e5ad477da6f550e867bab4574e6e",
    "id": null,
    "metadata": {},
    "name": "FormCreateItem_CreateItemMutation",
    "operationKind": "mutation",
    "text": "mutation FormCreateItem_CreateItemMutation(\n  $input: ItemCreateInput!\n) {\n  itemCreate(input: $input) {\n    userErrors {\n      __typename\n      field\n      message\n    }\n    node {\n      id\n      name\n      barcode\n      cost\n      isActive\n      sku\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "757c8e179b18c53e401b2132a90c2d13";

export default node;
