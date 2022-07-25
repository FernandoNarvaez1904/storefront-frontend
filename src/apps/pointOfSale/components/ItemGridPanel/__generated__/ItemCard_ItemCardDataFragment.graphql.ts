/**
 * @generated SignedSource<<08deabbab5a0c51c6e86064ec8468486>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemCard_ItemCardDataFragment$data = {
  readonly id: any;
  readonly name: string | null;
  readonly price: number | null;
  readonly " $fragmentType": "ItemCard_ItemCardDataFragment";
};
export type ItemCard_ItemCardDataFragment$key = {
  readonly " $data"?: ItemCard_ItemCardDataFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemCard_ItemCardDataFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemCard_ItemCardDataFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "price",
      "storageKey": null
    }
  ],
  "type": "ItemType",
  "abstractKey": null
};

(node as any).hash = "61cc53870a85968045ceaf05d7dbeb17";

export default node;
