/**
 * @generated SignedSource<<1b1d3887af5dd451e59563be56d842e3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type InformationTabFragment$data = {
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
  readonly " $fragmentSpreads": FragmentRefs<"FormUpdateItem_ItemFragment">;
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
      "name": "barcode",
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
      "name": "isActive",
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
      "name": "currentStock",
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
      "name": "isService",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "FormUpdateItem_ItemFragment"
    }
  ],
  "type": "ItemType",
  "abstractKey": null
};

(node as any).hash = "45040c8a3748e3fb16c852b8773ad3d9";

export default node;
