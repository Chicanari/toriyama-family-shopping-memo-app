import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import Header from './components/Header'
import AddItemForm from './components/AddItemForm'
import ShoppingList from './components/ShoppingList'
import {useShoppingItems} from './hooks/useShoppingItems'

function App({ signOut, user }: { signOut?: () => void; user?: any }) {
  const { items, loading, error, create, toggle, remove } = useShoppingItems()

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* <header className="w-full bg-white shadow p-4">
        <h1 className="text-lg font-bold text-gray-700">Shopping Memo</h1>
      </header> */}

      <main className="w-full max-w-md mt-6 p-4 bg-white shadow rounded">
        <Header user={user} onLogout={signOut} />

        <AddItemForm onAdd={create} loading={loading} />

        {error && <p className="text-sm text-rose-600 mt-2">Error: {error}</p>}

        <ShoppingList
          items={items}
          onToggle={(i) => toggle(i.id, !i.checked)}
          onDelete={(id) => remove(id)}  
        />
      </main>
    </div>
  )
}

export default withAuthenticator(App)
