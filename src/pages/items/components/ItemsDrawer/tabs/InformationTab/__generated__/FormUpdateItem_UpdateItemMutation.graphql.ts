/**
 * @generated SignedSource<<646988fe31bb971ad181acb0d51661b8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ItemUpdateInput = {
  data: ItemUpdateDataInput;
  id: string;
};
export type ItemUpdateDataInput = {
  barcode?: string | null;
  cost?: number | null;
  markup?: number | null;
  name?: string | null;
};
export type FormUpdateItem_UpdateItemMutation$variables = {
  input: ItemUpdateInput;
};
export type FormUpdateItem_UpdateItemMutation$data = {
  readonly itemUpdate: {
    readonly node: {
      readonly id: string;
      readonly name: string;
      readonly " $fragmentSpreads": FragmentRefs<"FormUpdateItem_ItemFragment" | "InformationTabFragment">;
    } | null;
    readonly userErrors: ReadonlyArray<{
      readonly field: string;
      readonly message: string;
    }>;
  };
};
export type FormUpdateItem_UpdateItemMutation = {
  response: FormUpdateItem_UpdateItemMutation$data;
  variables: FormUpdateItem_UpdateItemMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
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
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "field",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "message",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FormUpdateItem_UpdateItemMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ItemUpdatePayload",
        "kind": "LinkedField",
        "name": "itemUpdate",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ItemType",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "InformationTabFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "FormUpdateItem_ItemFragment"
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "userErrors",
            "plural": true,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FormUpdateItem_UpdateItemMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ItemUpdatePayload",
        "kind": "LinkedField",
        "name": "itemUpdate",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "ItemType",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
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
                "name": "isActive",
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
                "name": "currentStock",
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
                "name": "isService",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "userErrors",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v4/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f390144b867a13db562d2a542c23d796",
    "id": null,
    "metadata": {},
    "name": "FormUpdateItem_UpdateItemMutation",
    "operationKind": "mutation",
    "text": "mutation FormUpdateItem_UpdateItemMutation(\n  $input: ItemUpdateInput!\n) {\n  itemUpdate(input: $input) {\n    node {\n      id\n      name\n      ...InformationTabFragment\n      ...FormUpdateItem_ItemFragment\n    }\n    userErrors {\n      __typename\n      field\n      message\n    }\n  }\n}\n\nfragment FormUpdateItem_ItemFragment on ItemType {\n  id\n  name\n  barcode\n  cost\n  markup\n  price\n}\n\nfragment InformationTabActionHeaderItemFragment on ItemType {\n  id\n}\n\nfragment InformationTabFragment on ItemType {\n  id\n  ...InformationTabInfoSectionFragment\n  ...FormUpdateItem_ItemFragment\n  ...InformationTabActionHeaderItemFragment\n}\n\nfragment InformationTabInfoSectionFragment on ItemType {\n  id\n  name\n  barcode\n  cost\n  isActive\n  sku\n  price\n  markup\n  currentStock\n  creationDate\n  isService\n}\n"
  }
};
})();

(node as any).hash = "089d8dcfb0986343826caf7f5ab477ea";

export default node;
