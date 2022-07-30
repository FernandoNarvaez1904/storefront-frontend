/**
 * @generated SignedSource<<ebd60bf1eddb983348fea4d2d9e6cdf5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type GridType = "ImageGrid" | "TextGrid" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ItemGrid_ConfFragment$data = {
  readonly gridType: GridType;
  readonly " $fragmentType": "ItemGrid_ConfFragment";
};
export type ItemGrid_ConfFragment$key = {
  readonly " $data"?: ItemGrid_ConfFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemGrid_ConfFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemGrid_ConfFragment",
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

(node as any).hash = "e0a0b0c4e3287f88bf866d564397d319";

export default node;
