/**
 * @generated SignedSource<<b20c37329fabfc6b89160963b84de5bb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemDrawer_itemQuery$variables = {
  id: any;
};
export type ItemDrawer_itemQuery$data = {
  readonly item: {
    readonly id: any;
    readonly name: string | null;
    readonly " $fragmentSpreads": FragmentRefs<"FormUpdateItem_ItemFragment" | "ItemDrawerContent_SingleItemFragment">;
  };
};
export type ItemDrawer_itemQuery = {
  response: ItemDrawer_itemQuery$data;
  variables: ItemDrawer_itemQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemDrawer_itemQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ItemType",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ItemDrawerContent_SingleItemFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FormUpdateItem_ItemFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ItemDrawer_itemQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ItemType",
        "kind": "LinkedField",
        "name": "item",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "77804b79635295d4148031a476f76dbd",
    "id": null,
    "metadata": {},
    "name": "ItemDrawer_itemQuery",
    "operationKind": "query",
    "text": "query ItemDrawer_itemQuery(\n  $id: GlobalID!\n) {\n  item(id: $id) {\n    id\n    name\n    ...ItemDrawerContent_SingleItemFragment\n    ...FormUpdateItem_ItemFragment\n  }\n}\n\nfragment FormUpdateItem_ItemFragment on ItemType {\n  id\n  name\n  barcode\n  cost\n  markup\n  price\n}\n\nfragment GeneralInformationTab_itemFragment on ItemType {\n  id\n  sku\n  name\n  cost\n  price\n  markup\n  barcode\n  isActive\n  isService\n  versionId\n  creationDate\n  currentStock\n}\n\nfragment ItemDrawerContent_SingleItemFragment on ItemType {\n  ...GeneralInformationTab_itemFragment\n}\n"
  }
};
})();

(node as any).hash = "cdefaad9fa269c3d633f6360074bf775";

export default node;
