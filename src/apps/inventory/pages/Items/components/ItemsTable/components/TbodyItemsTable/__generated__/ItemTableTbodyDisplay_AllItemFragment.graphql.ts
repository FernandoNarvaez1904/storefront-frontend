/**
 * @generated SignedSource<<587a497f40fa740dccbb74fdde9bf3de>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemTableTbodyDisplay_AllItemFragment$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly cost: number;
      readonly id: any;
      readonly isActive: boolean;
      readonly isService: boolean;
      readonly markup: number;
      readonly name: string | null;
      readonly price: number | null;
      readonly sku: string;
    };
  }>;
  readonly " $fragmentType": "ItemTableTbodyDisplay_AllItemFragment";
};
export type ItemTableTbodyDisplay_AllItemFragment$key = {
  readonly " $data"?: ItemTableTbodyDisplay_AllItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ItemTableTbodyDisplay_AllItemFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ItemTableTbodyDisplay_AllItemFragment",
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
              "name": "sku",
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
              "name": "isActive",
              "storageKey": null
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

(node as any).hash = "9988f8fe40a95199d1e880d52451ae1c";

export default node;
