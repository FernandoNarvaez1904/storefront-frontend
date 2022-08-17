/**
 * @generated SignedSource<<24e1ac108d119d457678d6b71537d4cf>>
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
      readonly id: any;
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

(node as any).hash = "539bb30c113135287411755033290740";

export default node;
