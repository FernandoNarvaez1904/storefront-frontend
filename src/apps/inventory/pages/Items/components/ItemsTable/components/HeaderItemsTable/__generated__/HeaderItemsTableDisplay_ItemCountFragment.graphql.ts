/**
 * @generated SignedSource<<a7d21a5db122565a38977c6d3a0b6c2f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HeaderItemsTableDisplay_ItemCountFragment$data = {
  readonly totalCount: number;
  readonly " $fragmentType": "HeaderItemsTableDisplay_ItemCountFragment";
};
export type HeaderItemsTableDisplay_ItemCountFragment$key = {
  readonly " $data"?: HeaderItemsTableDisplay_ItemCountFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HeaderItemsTableDisplay_ItemCountFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HeaderItemsTableDisplay_ItemCountFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalCount",
      "storageKey": null
    }
  ],
  "type": "ItemTypeConnection",
  "abstractKey": null
};

(node as any).hash = "f7e7d1b34a144716928b50b6c2b0dec4";

export default node;
