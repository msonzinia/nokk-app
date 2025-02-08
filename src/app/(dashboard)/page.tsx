import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Barra de navegación */}
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/75">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <div className="flex items-center">
                <img src="/nokk-logo.svg" className="h-8 mr-3" alt="Nokk Logo" />
                <span className="text-xl font-semibold text-zinc-100">Nokk</span>
              </div>
            </div>
            <div className="flex items-center">
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    userButtonBox: "h-8 w-8"
                  }
                }}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="p-4 sm:ml-64 pt-20">
        <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/50">
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded-lg bg-zinc-800/50">
              <p className="text-2xl text-zinc-100">
                Bienvenido al Dashboard de Nokk
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center justify-center rounded-lg bg-zinc-800/50 h-28">
              <p className="text-zinc-100">Obras Activas</p>
            </div>
            <div className="flex items-center justify-center rounded-lg bg-zinc-800/50 h-28">
              <p className="text-zinc-100">Cajas Registradas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}