/**
 * @generated SignedSource<<7c0f3415e6f4a205a5782d6b03e63c74>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemDrawerTitleDisplay_ItemNameFragment$data = {
  readonly name: string | null;
  readonly " $fragmentType": "ItemDrawerTitleDisplay_ItemNameFragment";
};
export type ItemDrawerTitleDisplay_ItemNameFragment$key = {
  readonly " $data"?: ItemDrawerTitleDisplay_ItemNameFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemDrawerTitleDisplay_ItemNameFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemDrawerTitleDisplay_ItemNameFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "ItemType",
  "abstractKey": null
};

(node as any).hash = "07f98e6d821a10ca64a6611ebf0052cf";

export default node;
