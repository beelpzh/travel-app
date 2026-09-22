import { createClient } from '../lib/supabase/server';
import Link from 'next/link';
export const revalidate = 0;

export default async function HomePage() {
  const supabase = await createClient();
  const { data: destinos, error } = await supabase.from('destinos').select('*');

  if (error) return <p className="text-red-500">Error al cargar destinos.</p>;

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Explora el Mundo</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {destinos?.map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden shadow">
            <img src={item.image_url} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="text-gray-600">{item.location}</p>
              <div className="mt-4 flex justify-between items-center">
                <Link href={`/destinos/${item.id}`} className="text-blue-600 underline">
                  Ver detalle
                </Link>
                <Link href={`/categorias/${item.category.toLowerCase()}`} className="text-xs bg-gray-200 px-2 py-1 rounded">
                  {item.category}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
