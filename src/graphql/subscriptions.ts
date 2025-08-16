/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateShoppingItem = /* GraphQL */ `subscription OnCreateShoppingItem(
  $filter: ModelSubscriptionShoppingItemFilterInput
  $owner: String
) {
  onCreateShoppingItem(filter: $filter, owner: $owner) {
    id
    name
    quantity
    checked
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateShoppingItemSubscriptionVariables,
  APITypes.OnCreateShoppingItemSubscription
>;
export const onUpdateShoppingItem = /* GraphQL */ `subscription OnUpdateShoppingItem(
  $filter: ModelSubscriptionShoppingItemFilterInput
  $owner: String
) {
  onUpdateShoppingItem(filter: $filter, owner: $owner) {
    id
    name
    quantity
    checked
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateShoppingItemSubscriptionVariables,
  APITypes.OnUpdateShoppingItemSubscription
>;
export const onDeleteShoppingItem = /* GraphQL */ `subscription OnDeleteShoppingItem(
  $filter: ModelSubscriptionShoppingItemFilterInput
  $owner: String
) {
  onDeleteShoppingItem(filter: $filter, owner: $owner) {
    id
    name
    quantity
    checked
    owner
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteShoppingItemSubscriptionVariables,
  APITypes.OnDeleteShoppingItemSubscription
>;
