import type { Product } from "../types/Product";

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  return (
    <div className="border rounded-lg shadow p-3 flex flex-col bg-white dark:bg-gray-800 hover:shadow-md transition-shadow duration-150">
      <img
        src={product.images[0]}
        alt={product.name}
        className="rounded-md mb-1 h-20 w-full object-cover"
        loading="lazy"
        />

      <h2 className="text-md font-semibold text-gray-800 dark:text-gray-100">
        {product.name}
      </h2>
      <p className="text-gray-500 text-xs">{product.category}</p>

      <p className="text-blue-600 font-semibold mt-1 text-sm">
        R$ {product.price.toLocaleString("pt-BR")}
      </p>

      <span
        className={`mt-1 text-xs font-semibold px-2 py-0.5 rounded w-max ${
          product.status === "available"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {product.status === "available" ? "Disponível" : "Indisponível"}
      </span>
    </div>
  );
}
