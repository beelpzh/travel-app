import { createClient } from '../../../lib/supabase/server';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function CategoriaPage({ params }: Props) {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: destinos } = await supabase
    .from('destinos')
    .select('*')
    .ilike('category', slug);

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold capitalize mb-6">Categoría: {slug}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {destinos && destinos.length > 0 ? (
          destinos.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <h2 className="font-bold text-lg">{item.title}</h2>
              <Link href={`/destinos/${item.id}`} className="text-blue-500 underline text-sm mt-2 block">
                Ver destino
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-3">No se encontraron destinos en esta categoría.</p>
        )}
      </div>
    </main>
  );
}
