/**
 * @generated SignedSource<<761e7905a1529bc17e2faf0da7ffbe60>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ClientRequest, ClientQuery } from 'relay-runtime';
export type GridType = "ImageGrid" | "TextGrid" | "%future added value";
export type MainPanels_ConfQuery$variables = {};
export type MainPanels_ConfQuery$data = {
  readonly pointOfSaleConf: {
    readonly gridType: GridType;
  };
};
export type MainPanels_ConfQuery = {
  response: MainPanels_ConfQuery$data;
  variables: MainPanels_ConfQuery$variables;
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
    "name": "MainPanels_ConfQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MainPanels_ConfQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "e2bd830a30b77f94399706fa6a4785db",
    "id": null,
    "metadata": {},
    "name": "MainPanels_ConfQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

(node as any).hash = "a6acca186135c4fa4f859a6e685ae451";

export default node;
