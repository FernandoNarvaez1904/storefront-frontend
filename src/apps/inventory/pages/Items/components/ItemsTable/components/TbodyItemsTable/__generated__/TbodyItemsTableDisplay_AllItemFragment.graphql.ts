/**
 * @generated SignedSource<<21868dc4c59c1f4f6249345b6e0c74df>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TbodyItemsTableDisplay_AllItemFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly barcode: string | null;
      readonly id: any;
      readonly name: string | null;
      readonly sku: string;
      readonly " $fragmentSpreads": FragmentRefs<"RowTbodyItems_ItemsRowFragment">;
    };
  }>;
  readonly " $fragmentType": "TbodyItemsTableDisplay_AllItemFragment";
};
export type TbodyItemsTableDisplay_AllItemFragment$key = {
  readonly " $data"?: TbodyItemsTableDisplay_AllItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TbodyItemsTableDisplay_AllItemFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TbodyItemsTableDisplay_AllItemFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ItemTypeEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ItemType",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
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
              "name": "sku",
              "storageKey": null
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "RowTbodyItems_ItemsRowFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ItemTypeConnection",
  "abstractKey": null
};

(node as any).hash = "c7ceb335a71e30a26b5fb835b328fb1e";

export default node;
