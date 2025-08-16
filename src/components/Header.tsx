type HeaderProps = {
  user?: any
  onLogout?: () => void
}

export default function Header({ user, onLogout }: HeaderProps) {

  return (
    <header className="flex items-center justify-between p-4">
      <div className="min-w-0">
        <h1 className="text-5xl font-bold leading-tight">Memo</h1>
        {user && (
          <p className="mt-1 text-sm text-gray-600 break-all whitespace-normal">
            {user?.signInDetails?.loginId ?? user?.username}
          </p>
        )}
      </div>

      {user && (
        <button
          onClick={onLogout}
          className="shrink-0 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200"
        >
          Log out
        </button>
      )}
    </header>
  );

}
