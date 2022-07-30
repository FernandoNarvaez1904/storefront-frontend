/**
 * @generated SignedSource<<db89537ebb786010db3648b699df3a3a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ClientRequest, ClientQuery } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PosRelayRootLoader_ConfQuery$variables = {};
export type PosRelayRootLoader_ConfQuery$data = {
  readonly pointOfSaleConf: {
    readonly " $fragmentSpreads": FragmentRefs<"MainPanels_ConfFragment">;
  };
};
export type PosRelayRootLoader_ConfQuery = {
  response: PosRelayRootLoader_ConfQuery$data;
  variables: PosRelayRootLoader_ConfQuery$variables;
};

const node: ClientRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PosRelayRootLoader_ConfQuery",
    "selections": [
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
                "args": null,
                "kind": "FragmentSpread",
                "name": "MainPanels_ConfFragment"
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
    "name": "PosRelayRootLoader_ConfQuery",
    "selections": [
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
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "GridFilterItemValue",
                "kind": "LinkedField",
                "name": "gridFilterValue",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "gridFilterType",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "value",
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
    "cacheID": "15f612222e2544a25b953da5014d431c",
    "id": null,
    "metadata": {},
    "name": "PosRelayRootLoader_ConfQuery",
    "operationKind": "query",
    "text": null
  }
};

(node as any).hash = "731c66aedb857f59a1c560d5b3818b3c";

export default node;
