import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="max-w-xl mx-auto p-6 text-center my-20">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Destino o Página No Encontrada</h2>
      <p className="text-gray-600 mb-6">
        El lugar que estás buscando no existe en nuestro catálogo de viajes o la ruta es incorrecta.
      </p>
      <Link href="/" className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition">
        Volver al inicio
      </Link>
    </main>
  );
}
