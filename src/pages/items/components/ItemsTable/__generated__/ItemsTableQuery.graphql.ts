/**
 * @generated SignedSource<<83513610e865c555b68b814d57482d10>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ItemsTableQuery$variables = {};
export type ItemsTableQuery$data = {
  readonly itemConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly barcode: string;
        readonly cost: number;
        readonly id: string;
        readonly isActive: boolean;
        readonly name: string;
        readonly sku: string;
      };
    }>;
    readonly totalCount: number;
  };
};
export type ItemsTableQuery = {
  response: ItemsTableQuery$data;
  variables: ItemsTableQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
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
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemsTableQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ItemsTableQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "0a0151db3814abdc140a66bdc1d5761e",
    "id": null,
    "metadata": {},
    "name": "ItemsTableQuery",
    "operationKind": "query",
    "text": "query ItemsTableQuery {\n  itemConnection {\n    totalCount\n    edges {\n      node {\n        id\n        name\n        barcode\n        cost\n        isActive\n        sku\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3538b199716bd15bae06e16df65c0fde";

export default node;
