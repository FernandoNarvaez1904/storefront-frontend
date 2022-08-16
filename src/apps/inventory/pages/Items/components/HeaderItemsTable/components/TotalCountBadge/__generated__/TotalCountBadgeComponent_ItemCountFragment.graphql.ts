/**
 * @generated SignedSource<<d8f89f5512468454d9c830d55338da96>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TotalCountBadgeComponent_ItemCountFragment$data = {
  readonly totalCount: number;
  readonly " $fragmentType": "TotalCountBadgeComponent_ItemCountFragment";
};
export type TotalCountBadgeComponent_ItemCountFragment$key = {
  readonly " $data"?: TotalCountBadgeComponent_ItemCountFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TotalCountBadgeComponent_ItemCountFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TotalCountBadgeComponent_ItemCountFragment",
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

(node as any).hash = "5c0b5bc04a299e79325977b2c805e065";

export default node;
