/**
 * @generated SignedSource<<a3796404ef8a04e8708418f38da4694d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemInStack_AllItemFragment$data = {
  readonly id: string;
  readonly item: {
    readonly name: string;
    readonly price: number | null;
  };
  readonly quantity: number;
  readonly " $fragmentType": "ItemInStack_AllItemFragment";
};
export type ItemInStack_AllItemFragment$key = {
  readonly " $data"?: ItemInStack_AllItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemInStack_AllItemFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemInStack_AllItemFragment",
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

(node as any).hash = "48e3bb80eb0b5430c0f21a4b3a19e11e";

export default node;
