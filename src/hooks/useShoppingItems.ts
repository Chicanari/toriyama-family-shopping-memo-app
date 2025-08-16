import { useEffect, useState } from 'react'
import type { Item } from '../services/shoppingApi'
import { fetchItems, addItem, toggleItem, removeItem } from '../services/shoppingApi'

export function useShoppingItems() {
  const [items, setItems] = useState<Item[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function refresh() {
    try {
      setError(null)
      const list = await fetchItems()
      setItems(list)
    } catch (e: any) {
      setError(e?.errors?.[0]?.message ?? String(e))
    }
  }

  async function create(name: string, qty: number) {
    setLoading(true)
    try {
      await addItem(name, qty)
      await refresh()
    } finally {
      setLoading(false)
    }
  }

  async function toggle(id: string, nextChecked: boolean) {
    await toggleItem(id, nextChecked)
    await refresh()
  }

  async function remove(id: string) {
    await removeItem(id)
    await refresh()
  }

  useEffect(() => { refresh() }, [])

  return { items, loading, error, refresh, create, toggle, remove }
}
