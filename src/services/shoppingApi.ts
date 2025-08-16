// src/services/shoppingApi.ts
import { gqlClient } from '../APIClient'
import * as mutations from '../graphql/mutations'
import * as queries from '../graphql/queries'
import type {
  ShoppingItem,
  CreateShoppingItemMutation,
  CreateShoppingItemMutationVariables,
  UpdateShoppingItemMutation,
  UpdateShoppingItemMutationVariables,
  DeleteShoppingItemMutation,
  DeleteShoppingItemMutationVariables,
  ListShoppingItemsQuery,
} from '../API'
import type { GraphQLQuery } from 'aws-amplify/api' // ★ 追加

// Hook 側の型に合わせるためのエイリアス
export type Item = ShoppingItem

// 認証方式（API_KEY → 'apiKey', UserPool → 'userPool'）
const AUTH: 'apiKey' | 'userPool' = 'userPool'

// 一覧取得
export async function fetchItems(): Promise<Item[]> {
  const res = await gqlClient.graphql<GraphQLQuery<ListShoppingItemsQuery>>({
    query: queries.listShoppingItems,
    authMode: AUTH,
  })
  const items = res.data?.listShoppingItems?.items ?? []
  return items.filter(Boolean) as Item[]
}

// 追加
export async function addItem(name: string, quantity: number): Promise<Item> {
  const variables: CreateShoppingItemMutationVariables = {
    input: { name, quantity, checked: false },
  }
  const res = await gqlClient.graphql<GraphQLQuery<CreateShoppingItemMutation>>({
    query: mutations.createShoppingItem,
    variables,
    authMode: AUTH,
  })
  const created = res.data?.createShoppingItem
  if (!created) throw new Error('createShoppingItem failed')
  return created
}

// チェック切替
export async function toggleItem(id: string, nextChecked: boolean): Promise<Item> {
  const variables: UpdateShoppingItemMutationVariables = {
    input: { id, checked: nextChecked },
  }
  const res = await gqlClient.graphql<GraphQLQuery<UpdateShoppingItemMutation>>({
    query: mutations.updateShoppingItem,
    variables,
    authMode: AUTH,
  })
  const updated = res.data?.updateShoppingItem
  if (!updated) throw new Error('updateShoppingItem failed')
  return updated
}

// 削除
export async function removeItem(id: string): Promise<string> {
  const variables: DeleteShoppingItemMutationVariables = { input: { id } }
  const res = await gqlClient.graphql<GraphQLQuery<DeleteShoppingItemMutation>>({
    query: mutations.deleteShoppingItem,
    variables,
    authMode: AUTH,
  })
  const deleted = res.data?.deleteShoppingItem?.id
  if (!deleted) throw new Error('deleteShoppingItem failed')
  return deleted
}
