/**
 * @generated SignedSource<<eca71a581afdfc210c5952aa4ab7b8b3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type GridType = "ImageGrid" | "TextGrid" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type MainPanels_ConfFragment$data = {
  readonly gridType: GridType;
  readonly " $fragmentSpreads": FragmentRefs<"ItemGridConfBar_ConfFragment" | "ItemGrid_ConfFragment">;
  readonly " $fragmentType": "MainPanels_ConfFragment";
};
export type MainPanels_ConfFragment$key = {
  readonly " $data"?: MainPanels_ConfFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MainPanels_ConfFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MainPanels_ConfFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ItemGridConfBar_ConfFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ItemGrid_ConfFragment"
    },
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

(node as any).hash = "937787ca63b3bedde5a7372556682a56";

export default node;
