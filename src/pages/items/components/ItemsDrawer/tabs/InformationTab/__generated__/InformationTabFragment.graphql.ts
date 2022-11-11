/**
 * @generated SignedSource<<b55a5d04ff695985f9e987168f982160>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type InformationTabFragment$data = {
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"FormUpdateItem_ItemFragment" | "InformationTabActionHeaderItemFragment" | "InformationTabInfoSectionFragment">;
  readonly " $fragmentType": "InformationTabFragment";
};
export type InformationTabFragment$key = {
  readonly " $data"?: InformationTabFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"InformationTabFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InformationTabFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "InformationTabInfoSectionFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "FormUpdateItem_ItemFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "InformationTabActionHeaderItemFragment"
    }
  ],
  "type": "ItemType",
  "abstractKey": null
};

(node as any).hash = "b854de3ab28f656069176b9c9ad8ad8a";

export default node;
