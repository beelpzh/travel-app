import { createClient } from '../../../lib/supabase/server';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function DestinoDetailPage({ params }: Props) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: destino } = await supabase.from('destinos').select('*').eq('id', id).single();

  if (!destino) notFound();

  return (
    <main className="max-w-4xl mx-auto p-6">
      <img src={destino.image_url} alt={destino.title} className="w-full h-80 object-cover rounded-xl mb-6" />
      <h1 className="text-3xl font-bold mb-2">{destino.title}</h1>
      <p className="text-gray-500 mb-4">{destino.location} • ${destino.price_per_night} / noche</p>
      <p className="text-lg leading-relaxed">{destino.description}</p>
    </main>
  );
}
