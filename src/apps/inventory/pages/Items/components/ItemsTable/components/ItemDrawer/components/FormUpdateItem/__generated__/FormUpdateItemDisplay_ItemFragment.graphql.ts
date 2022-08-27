/**
 * @generated SignedSource<<8b3bb47d99668028d3d1120497a9897e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FormUpdateItemDisplay_ItemFragment$data = {
  readonly barcode: string;
  readonly cost: number;
  readonly id: any;
  readonly markup: number;
  readonly name: string;
  readonly price: number | null;
  readonly " $fragmentType": "FormUpdateItemDisplay_ItemFragment";
};
export type FormUpdateItemDisplay_ItemFragment$key = {
  readonly " $data"?: FormUpdateItemDisplay_ItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FormUpdateItemDisplay_ItemFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FormUpdateItemDisplay_ItemFragment",
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
      "name": "markup",
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

(node as any).hash = "d7e0a62c0b81734d8f63d0d31be29a5f";

export default node;
