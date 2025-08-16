type Item = {
  id: string
  name: string
  quantity: number
  checked: boolean
}

type ShoppingListProps = {
  items: Item[]
  onToggle: (item: Item) => void
  onDelete: (id: string) => void
}

export default function ShoppingList({ items, onToggle, onDelete }: ShoppingListProps) {
  return (
    <ul className="divide-y">
      {items.map(item => (
        <li
          key={item.id}
          className="flex justify-between items-center py-2"
        >
          <span
            className={`flex-1 ${item.checked ? 'line-through text-gray-400' : ''}`}
          >
            {item.name} × {item.quantity}
          </span>

          <div className="flex gap-2">
            <button
              onClick={() => onToggle(item)}
              className="text-sm text-emerald-600 hover:underline"
            >
              {item.checked ? '戻す' : '完了'}
            </button>

            <button
              onClick={() => onDelete(item.id)}
              className="text-sm text-red-500 hover:underline"
            >
              削除
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
