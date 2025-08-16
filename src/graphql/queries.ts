/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getShoppingItem = /* GraphQL */ `query GetShoppingItem($id: ID!) {
  getShoppingItem(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetShoppingItemQueryVariables,
  APITypes.GetShoppingItemQuery
>;
export const listShoppingItems = /* GraphQL */ `query ListShoppingItems(
  $filter: ModelShoppingItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listShoppingItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      quantity
      checked
      owner
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListShoppingItemsQueryVariables,
  APITypes.ListShoppingItemsQuery
>;
