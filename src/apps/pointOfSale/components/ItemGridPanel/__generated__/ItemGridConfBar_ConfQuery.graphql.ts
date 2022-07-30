/**
 * @generated SignedSource<<f3f0e70d4bd344a54e124a96661ee6fd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ClientRequest, ClientQuery } from 'relay-runtime';
export type GridType = "ImageGrid" | "TextGrid" | "%future added value";
export type ItemGridConfBar_ConfQuery$variables = {};
export type ItemGridConfBar_ConfQuery$data = {
  readonly pointOfSaleConf: {
    readonly gridType: GridType;
  };
};
export type ItemGridConfBar_ConfQuery = {
  response: ItemGridConfBar_ConfQuery$data;
  variables: ItemGridConfBar_ConfQuery$variables;
};

const node: ClientRequest = (function(){
var v0 = [
  {
    "kind": "ClientExtension",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PointOfSaleConfType",
        "kind": "LinkedField",
        "name": "pointOfSaleConf",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "gridType",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemGridConfBar_ConfQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ItemGridConfBar_ConfQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "ccf6a85195581d2e63fe6b4aa447f2c8",
    "id": null,
    "metadata": {},
    "name": "ItemGridConfBar_ConfQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "6719529231463d57bb14b58537f41a00";

export default node;
