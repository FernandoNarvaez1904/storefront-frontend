/**
 * @generated SignedSource<<159b0186e3ec551c83c0f2bab7147978>>
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
  connections: ReadonlyArray<string>;
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
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
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
},
v5 = {
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "FormCreateItem_CreateItemMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
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
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "FormCreateItem_CreateItemMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
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
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "prependNode",
            "key": "",
            "kind": "LinkedHandle",
            "name": "node",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "CommentsEdge"
              }
            ]
          }
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

(node as any).hash = "bc5684fd2315b4cfd7eaf46583b861df";

export default node;
