import Category from "@/components/category/Category";
import StudioCard from "@/components/studiocard/StudioCard";

async function StudiosPage({ searchParams }) {
  const { category } = await searchParams;

  const res = await fetch(
  category
    ? `http://localhost:8000/studios?category=${encodeURIComponent(category)}`
    : "http://localhost:8000/studios",
  {
    cache: "no-store",
   }
   );

const studios = await res.json();
console.log(studios)


  return (
    <div>
      <Category selectedCategory={category} />

      <section className="mx-auto max-w-7xl px-5 py-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {studios.map((studio) => (
            <StudioCard key={studio._id} studio={studio}></StudioCard>
          ))}
        </div>
      </section>
    </div>
  );
}

export default StudiosPage;