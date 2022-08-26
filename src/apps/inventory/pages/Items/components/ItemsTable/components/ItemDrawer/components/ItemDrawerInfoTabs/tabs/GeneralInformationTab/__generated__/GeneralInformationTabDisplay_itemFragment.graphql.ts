/**
 * @generated SignedSource<<33a77fca0ed093d5301c82ebc915d410>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GeneralInformationTabDisplay_itemFragment$data = {
  readonly barcode: string | null;
  readonly cost: number;
  readonly creationDate: any | null;
  readonly currentStock: number;
  readonly id: any;
  readonly isActive: boolean;
  readonly isService: boolean;
  readonly markup: number;
  readonly name: string | null;
  readonly price: number | null;
  readonly sku: string;
  readonly versionId: any | null;
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
      "name": "versionId",
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

(node as any).hash = "eaf640b2cc19dda89c510f55cd545dd3";

export default node;
