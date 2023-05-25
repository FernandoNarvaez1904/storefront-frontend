/**
 * @generated SignedSource<<7b4e0a79bcc0d987d92da8c5c87e2df9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemDrawerLoader_itemQuery$variables = {
  id: string;
};
export type ItemDrawerLoader_itemQuery$data = {
  readonly item: {
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"FormUpdateItemDisplay_ItemFragment" | "GeneralInformationTabDisplay_itemFragment" | "ItemDrawerTitleDisplay_ItemNameFragment">;
  };
};
export type ItemDrawerLoader_itemQuery = {
  response: ItemDrawerLoader_itemQuery$data;
  variables: ItemDrawerLoader_itemQuery$variables;
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ItemDrawerLoader_itemQuery",
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
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "GeneralInformationTabDisplay_itemFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FormUpdateItemDisplay_ItemFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ItemDrawerTitleDisplay_ItemNameFragment"
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
    "name": "ItemDrawerLoader_itemQuery",
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
            "name": "name",
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
    "cacheID": "64f65e29553e1defe284680f2b2c0466",
    "id": null,
    "metadata": {},
    "name": "ItemDrawerLoader_itemQuery",
    "operationKind": "query",
    "text": "query ItemDrawerLoader_itemQuery(\n  $id: ID!\n) {\n  item(id: $id) {\n    id\n    ...GeneralInformationTabDisplay_itemFragment\n    ...FormUpdateItemDisplay_ItemFragment\n    ...ItemDrawerTitleDisplay_ItemNameFragment\n  }\n}\n\nfragment FormUpdateItemDisplay_ItemFragment on ItemType {\n  id\n  name\n  barcode\n  cost\n  markup\n  price\n}\n\nfragment GeneralInformationTabDisplay_itemFragment on ItemType {\n  id\n  sku\n  name\n  cost\n  price\n  markup\n  barcode\n  isActive\n  isService\n  creationDate\n  currentStock\n}\n\nfragment ItemDrawerTitleDisplay_ItemNameFragment on ItemType {\n  name\n}\n"
  }
};
})();

(node as any).hash = "007406c8251f07b8480bb0c5117453e6";

export default node;
