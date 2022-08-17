/**
 * @generated SignedSource<<7cadc8944b7e5d7004f557f0f1a4a9ee>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TotalCountBadgeDisplay_ItemCountFragment$data = {
  readonly totalCount: number;
  readonly " $fragmentType": "TotalCountBadgeDisplay_ItemCountFragment";
};
export type TotalCountBadgeDisplay_ItemCountFragment$key = {
  readonly " $data"?: TotalCountBadgeDisplay_ItemCountFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TotalCountBadgeDisplay_ItemCountFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TotalCountBadgeDisplay_ItemCountFragment",
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

(node as any).hash = "83d0db00c7b8986c1bbb091cd2cf06d8";

export default node;
