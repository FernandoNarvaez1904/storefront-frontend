/**
 * @generated SignedSource<<c14afce80be1aec887e0c5797975d458>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FormUpdateItem_ItemFragment$data = {
  readonly barcode: string;
  readonly cost: number;
  readonly id: string;
  readonly markup: number;
  readonly name: string;
  readonly price: number | null;
  readonly " $fragmentType": "FormUpdateItem_ItemFragment";
};
export type FormUpdateItem_ItemFragment$key = {
  readonly " $data"?: FormUpdateItem_ItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FormUpdateItem_ItemFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FormUpdateItem_ItemFragment",
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

(node as any).hash = "3579183f731ec05f3e6a025146032a46";

export default node;
