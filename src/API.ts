/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateShoppingItemInput = {
  id?: string | null,
  name: string,
  quantity: number,
  checked: boolean,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelShoppingItemConditionInput = {
  name?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  checked?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelShoppingItemConditionInput | null > | null,
  or?: Array< ModelShoppingItemConditionInput | null > | null,
  not?: ModelShoppingItemConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ShoppingItem = {
  __typename: "ShoppingItem",
  id: string,
  name: string,
  quantity: number,
  checked: boolean,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateShoppingItemInput = {
  id: string,
  name?: string | null,
  quantity?: number | null,
  checked?: boolean | null,
  owner?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteShoppingItemInput = {
  id: string,
};

export type ModelShoppingItemFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  checked?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelShoppingItemFilterInput | null > | null,
  or?: Array< ModelShoppingItemFilterInput | null > | null,
  not?: ModelShoppingItemFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelShoppingItemConnection = {
  __typename: "ModelShoppingItemConnection",
  items:  Array<ShoppingItem | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionShoppingItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  checked?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionShoppingItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionShoppingItemFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateShoppingItemMutationVariables = {
  input: CreateShoppingItemInput,
  condition?: ModelShoppingItemConditionInput | null,
};

export type CreateShoppingItemMutation = {
  createShoppingItem?:  {
    __typename: "ShoppingItem",
    id: string,
    name: string,
    quantity: number,
    checked: boolean,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateShoppingItemMutationVariables = {
  input: UpdateShoppingItemInput,
  condition?: ModelShoppingItemConditionInput | null,
};

export type UpdateShoppingItemMutation = {
  updateShoppingItem?:  {
    __typename: "ShoppingItem",
    id: string,
    name: string,
    quantity: number,
    checked: boolean,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteShoppingItemMutationVariables = {
  input: DeleteShoppingItemInput,
  condition?: ModelShoppingItemConditionInput | null,
};

export type DeleteShoppingItemMutation = {
  deleteShoppingItem?:  {
    __typename: "ShoppingItem",
    id: string,
    name: string,
    quantity: number,
    checked: boolean,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type GetShoppingItemQueryVariables = {
  id: string,
};

export type GetShoppingItemQuery = {
  getShoppingItem?:  {
    __typename: "ShoppingItem",
    id: string,
    name: string,
    quantity: number,
    checked: boolean,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListShoppingItemsQueryVariables = {
  filter?: ModelShoppingItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListShoppingItemsQuery = {
  listShoppingItems?:  {
    __typename: "ModelShoppingItemConnection",
    items:  Array< {
      __typename: "ShoppingItem",
      id: string,
      name: string,
      quantity: number,
      checked: boolean,
      owner?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateShoppingItemSubscriptionVariables = {
  filter?: ModelSubscriptionShoppingItemFilterInput | null,
  owner?: string | null,
};

export type OnCreateShoppingItemSubscription = {
  onCreateShoppingItem?:  {
    __typename: "ShoppingItem",
    id: string,
    name: string,
    quantity: number,
    checked: boolean,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateShoppingItemSubscriptionVariables = {
  filter?: ModelSubscriptionShoppingItemFilterInput | null,
  owner?: string | null,
};

export type OnUpdateShoppingItemSubscription = {
  onUpdateShoppingItem?:  {
    __typename: "ShoppingItem",
    id: string,
    name: string,
    quantity: number,
    checked: boolean,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteShoppingItemSubscriptionVariables = {
  filter?: ModelSubscriptionShoppingItemFilterInput | null,
  owner?: string | null,
};

export type OnDeleteShoppingItemSubscription = {
  onDeleteShoppingItem?:  {
    __typename: "ShoppingItem",
    id: string,
    name: string,
    quantity: number,
    checked: boolean,
    owner?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};
