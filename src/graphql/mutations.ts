/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createShoppingItem = /* GraphQL */ `mutation CreateShoppingItem(
  $input: CreateShoppingItemInput!
  $condition: ModelShoppingItemConditionInput
) {
  createShoppingItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateShoppingItemMutationVariables,
  APITypes.CreateShoppingItemMutation
>;
export const updateShoppingItem = /* GraphQL */ `mutation UpdateShoppingItem(
  $input: UpdateShoppingItemInput!
  $condition: ModelShoppingItemConditionInput
) {
  updateShoppingItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateShoppingItemMutationVariables,
  APITypes.UpdateShoppingItemMutation
>;
export const deleteShoppingItem = /* GraphQL */ `mutation DeleteShoppingItem(
  $input: DeleteShoppingItemInput!
  $condition: ModelShoppingItemConditionInput
) {
  deleteShoppingItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteShoppingItemMutationVariables,
  APITypes.DeleteShoppingItemMutation
>;
