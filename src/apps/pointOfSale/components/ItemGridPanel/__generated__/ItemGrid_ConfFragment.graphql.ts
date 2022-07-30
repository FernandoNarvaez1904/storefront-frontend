/**
 * @generated SignedSource<<8addcbe797abe498af10d38e175cb0db>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type GridFilterType = "barcode" | "name" | "sku" | "%future added value";
export type GridType = "ImageGrid" | "TextGrid" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ItemGrid_ConfFragment$data = {
  readonly gridFilterValue: {
    readonly gridFilterType: GridFilterType;
    readonly value: string;
  };
  readonly gridType: GridType;
  readonly " $fragmentType": "ItemGrid_ConfFragment";
};
export type ItemGrid_ConfFragment$key = {
  readonly " $data"?: ItemGrid_ConfFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemGrid_ConfFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemGrid_ConfFragment",
  "selections": [
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "gridType",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "GridFilterItemValue",
          "kind": "LinkedField",
          "name": "gridFilterValue",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "gridFilterType",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "value",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ]
    }
  ],
  "type": "PointOfSaleConfType",
  "abstractKey": null
};

(node as any).hash = "a248bfde8f5a2930762ca89689a16e7d";

export default node;
