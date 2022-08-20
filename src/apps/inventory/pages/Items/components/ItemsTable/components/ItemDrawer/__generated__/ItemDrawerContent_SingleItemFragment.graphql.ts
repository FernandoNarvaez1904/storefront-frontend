/**
 * @generated SignedSource<<7afadd69e2fc93512e8cb4ec4dfd5c3b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemDrawerContent_SingleItemFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"GeneralInformationTab_itemFragment">;
  readonly " $fragmentType": "ItemDrawerContent_SingleItemFragment";
};
export type ItemDrawerContent_SingleItemFragment$key = {
  readonly " $data"?: ItemDrawerContent_SingleItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemDrawerContent_SingleItemFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemDrawerContent_SingleItemFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "GeneralInformationTab_itemFragment"
    }
  ],
  "type": "ItemType",
  "abstractKey": null
};

(node as any).hash = "852aa30b4944a1ec6cb3ab92e7109995";

export default node;
