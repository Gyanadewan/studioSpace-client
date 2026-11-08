
import Link from "next/link";

async function Category({ selectedCategory }) {
  const res = await fetch("http://localhost:8000/categories", {
    cache: "no-store",
  });

  const categorydata = await res.json();

  return (
    <section className="mx-auto max-w-7xl px-5 py-10">
      <h2 className="mb-6 text-2xl font-bold">
        Explore Studios by Category
      </h2>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/studios"
          className={`rounded-full px-6 py-3 text-sm font-medium transition ${
            !selectedCategory
              ? "bg-violet-700 text-white"
              : "border border-gray-200 bg-white text-gray-700 hover:bg-violet-700 hover:text-white"
          }`}
        >
          All Studios
        </Link>

        {categorydata.map((category) => (
          <Link
            key={category}
            href={`/studios?category=${encodeURIComponent(category)}`}
            className={`rounded-full px-6 py-3 text-sm font-medium transition ${
              selectedCategory === category
                ? "bg-violet-700 text-white"
                : "border border-gray-200 bg-white text-gray-700 hover:bg-violet-700 hover:text-white"
            }`}
          >
            {category}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Category;
