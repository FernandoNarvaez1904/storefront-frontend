/**
 * @generated SignedSource<<8988b8c802db37e3ab966d74721976ee>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GeneralInformationTabDisplay_itemFragment$data = {
  readonly barcode: string;
  readonly cost: number;
  readonly creationDate: any;
  readonly currentStock: number;
  readonly id: string;
  readonly isActive: boolean;
  readonly isService: boolean;
  readonly markup: number;
  readonly name: string;
  readonly price: number | null;
  readonly sku: string;
  readonly " $fragmentType": "GeneralInformationTabDisplay_itemFragment";
};
export type GeneralInformationTabDisplay_itemFragment$key = {
  readonly " $data"?: GeneralInformationTabDisplay_itemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"GeneralInformationTabDisplay_itemFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GeneralInformationTabDisplay_itemFragment",
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
      "name": "sku",
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
      "name": "cost",
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
      "name": "markup",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "barcode",
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
      "name": "isService",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "creationDate",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "currentStock",
      "storageKey": null
    }
  ],
  "type": "ItemType",
  "abstractKey": null
};

(node as any).hash = "90fd00c886da5d1a898718682bdbaaf5";

export default node;
