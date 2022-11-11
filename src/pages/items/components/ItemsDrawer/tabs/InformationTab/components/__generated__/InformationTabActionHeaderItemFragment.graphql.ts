/**
 * @generated SignedSource<<e6d2dc79fc904dc201cc07f561ce1e4a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type InformationTabActionHeaderItemFragment$data = {
  readonly id: string;
  readonly " $fragmentType": "InformationTabActionHeaderItemFragment";
};
export type InformationTabActionHeaderItemFragment$key = {
  readonly " $data"?: InformationTabActionHeaderItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"InformationTabActionHeaderItemFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InformationTabActionHeaderItemFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "ItemType",
  "abstractKey": null
};

(node as any).hash = "09a9e8803e4352b016c6f793166b63a5";

export default node;
