/**
 * @generated SignedSource<<56e3cff2452c1f393d4c26b844bdd9f0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type GridFilterType = "barcode" | "name" | "sku" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type SearchInput_ConfFragment$data = {
  readonly gridFilterType: GridFilterType;
  readonly value: string;
  readonly " $fragmentType": "SearchInput_ConfFragment";
};
export type SearchInput_ConfFragment$key = {
  readonly " $data"?: SearchInput_ConfFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SearchInput_ConfFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchInput_ConfFragment",
  "selections": [
    {
      "kind": "ClientExtension",
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
      ]
    }
  ],
  "type": "GridFilterItemValue",
  "abstractKey": null
};

(node as any).hash = "426a4f034493bc1e1b140b9d38ed541d";

export default node;
