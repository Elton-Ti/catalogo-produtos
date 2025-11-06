import { useEffect, useState } from "react";
import productsData from "../data/products.json";
import type { Product } from "../types/Product";
import { ProductCard } from "../components/ProductCard";

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState(""); // estado da busca
  const [currentPage, setCurrentPage] = useState(1); // página atual
  const productsPerPage = 10;

  useEffect(() => {
    setProducts(productsData as Product[]);
  }, []);

  // Filtra os produtos conforme o texto digitado
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // Paginação
  const totalPages = Math.ceil(filtered.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filtered.slice(startIndex, startIndex + productsPerPage);

  // Quando a busca mudar, volta para a página 1
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  return (
    <main className="p-6">
      {/* Campo de busca */}
      <div className="mb-6 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Buscar produto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-400 dark:bg-gray-800 dark:text-white"
        />
      </div>

      {/* Quantos resultados encontrados */}
      <p className="text-center text-sm mb-4 text-gray-500 dark:text-gray-400">
        {filtered.length} resultado{filtered.length !== 1 && "s"} encontrado
        {filtered.length !== 1 && "s"}.
      </p>

      {/* Lista de produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {/* Paginação */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`px-3 py-1 rounded ${
                page === currentPage
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </main>
  );
}
