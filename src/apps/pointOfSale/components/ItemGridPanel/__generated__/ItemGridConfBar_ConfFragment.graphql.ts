/**
 * @generated SignedSource<<da76b20f8be2eb0b109806d5750bf02b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type GridType = "ImageGrid" | "TextGrid" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ItemGridConfBar_ConfFragment$data = {
  readonly gridType: GridType;
  readonly " $fragmentType": "ItemGridConfBar_ConfFragment";
};
export type ItemGridConfBar_ConfFragment$key = {
  readonly " $data"?: ItemGridConfBar_ConfFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemGridConfBar_ConfFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemGridConfBar_ConfFragment",
  "selections": [
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "gridType",
          "storageKey": null
        }
      ]
    }
  ],
  "type": "PointOfSaleConfType",
  "abstractKey": null
};

(node as any).hash = "38e1536237c1b26af5ab449e1c485718";

export default node;
