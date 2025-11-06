import { Home } from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <header className="p-4 text-center font-bold text-xl">
        Catálogo de Produtos
      </header>
      <Home />
    </div>
  );
}

export default App;
