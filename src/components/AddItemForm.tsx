import { useState } from 'react'

type AddItemFormProps = {
  onAdd: (name: string, quantity: number) => void
  loading?: boolean
}

export default function AddItemForm({ onAdd, loading = false }: AddItemFormProps) {
  const [name, setName] = useState('')
  const [qty, setQty] = useState(1)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim()) return
    onAdd(name.trim(), qty)
    setName('')
    setQty(1)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 mb-6 p-2 rounded-lg ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-emerald-300"
    >
      <input
        placeholder="例: Milk"
        value={name}
        onChange={e => setName(e.target.value)}
        className="flex-1 px-2 py-1 border-0 focus:outline-none bg-transparent"
      />
      <input
        type="number"
        min={1}
        value={qty}
        onChange={e => setQty(Number(e.target.value))}
        className="w-20 px-2 py-1 border-0 focus:outline-none bg-transparent"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-3 py-1 bg-white hover:bg-gray-100 rounded disabled:opacity-50"
      >
        {loading ? '追加中…' : '追加'}
      </button>
    </form>
  )
}
