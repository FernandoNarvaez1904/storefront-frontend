/**
 * @generated SignedSource<<b3e4e99446e18860c31a6d5e27f50980>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemInOrder_AllItemFragment$data = {
  readonly id: string;
  readonly item: {
    readonly name: string | null;
    readonly price: number | null;
  };
  readonly quantity: number;
  readonly " $fragmentType": "ItemInOrder_AllItemFragment";
};
export type ItemInOrder_AllItemFragment$key = {
  readonly " $data"?: ItemInOrder_AllItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemInOrder_AllItemFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemInOrder_AllItemFragment",
  "selections": [
    {
      "kind": "ClientExtension",
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
          "concreteType": "ItemType",
          "kind": "LinkedField",
          "name": "item",
          "plural": false,
          "selections": [
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
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "quantity",
          "storageKey": null
        }
      ]
    }
  ],
  "type": "ItemInOrder",
  "abstractKey": null
};

(node as any).hash = "7015febdd329db3871853c90c7912123";

export default node;
