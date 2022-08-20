/**
 * @generated SignedSource<<0a0b20bdb7267aee6372273d4612ebc8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemDrawerContent_SingleItemFragment$data = {
  readonly barcode: string | null;
  readonly cost: number;
  readonly currentStock: number;
  readonly id: any;
  readonly isActive: boolean;
  readonly isService: boolean;
  readonly markup: number;
  readonly name: string | null;
  readonly price: number | null;
  readonly sku: string;
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
      "name": "sku",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cost",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "markup",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "price",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isService",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isActive",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "currentStock",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "barcode",
      "storageKey": null
    }
  ],
  "type": "ItemType",
  "abstractKey": null
};

(node as any).hash = "671be08b4f8b8bdde960e381b9a9ee4f";

export default node;
