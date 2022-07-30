/**
 * @generated SignedSource<<359986872ce17b07beb51c81d9cff676>>
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
  readonly gridFilterValue: {
    readonly " $fragmentSpreads": FragmentRefs<"SearchInput_ConfFragment">;
  };
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
              "args": null,
              "kind": "FragmentSpread",
              "name": "SearchInput_ConfFragment"
            }
          ],
          "storageKey": null
        }
      ]
    }
  ],
  "type": "PointOfSaleConfType",
  "abstractKey": null
};

(node as any).hash = "6bfb024de8121e1a56d1394bc9d37baa";

export default node;
