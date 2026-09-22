# 🌍 Travel App - Explorador de Destinos Turísticos

Aplicación web moderna para la exploración de destinos turísticos desarrollada con **Next.js 16+**, **App Router** y **Supabase** como backend serverless.

## 🚀 Descripción del Proyecto

Esta plataforma permite a los usuarios descubrir diferentes destinos turísticos organizados por categorías. Implementa renderizado en el servidor (Server Components) para consultar datos de forma eficiente, rutas dinámicas para detalles de productos y categorías, y un diseño responsive estilizado con Tailwind CSS.

### Funcionalidades principales:
- **Landing Page Dinámica:** Muestra el catálogo de destinos consultados en tiempo real desde Supabase.
- **Rutas Dinámicas (`/destinos/[id]`):** Vista detallada de cada lugar con descripción, ubicación y precios.
- **Filtrado Dinámico (`/categorias/[slug]`):** Agrupación de destinos según su tipo (Playa, Montaña, Ciudad, etc.).
- **Serverless Backend:** Persistencia de datos gestionada con PostgreSQL en Supabase y políticas RLS configuradas.

---

## 🛠️ Tecnologías Utilizadas

- **Framework:** Next.js 16+ (App Router)
- **Lenguaje:** TypeScript
- **Base de Datos & Backend:** Supabase (PostgreSQL serverless)
- **Estilos:** Tailwind CSS
- **Despliegue:** Vercel

---

## 🔑 Variables de Entorno

Para ejecutar este proyecto de forma local o desplegarlo en Vercel, es necesario configurar las siguientes variables de entorno. 

Crea un archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_SUPABASE_URL=https://ryhkhimxbqctbfezwieq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5aGtoaW14YnFjdGJmZXp3aWVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAwNTkxOTMsImV4cCI6MjEwNTYzNTE5M30.FKh4Ci8FxFFJSbh4USsjwy-X_fcOuhjPbiSQomXa_zA