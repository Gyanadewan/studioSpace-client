
import Category from "../category/Category";

function HomeStudios() {
  return (
    <section className="bg-[#efeff2] py-14 md:py-20">
      <div className="container mx-auto px-5 md:px-8">

        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Find Your Perfect Space
          </h2>

          <p className="mx-auto max-w-2xl text-center text-sm leading-7 text-gray-600 md:text-base">
            Discover professional studios for podcasting, photography,
            recording, and more. Choose a category to find the perfect
            space for your creative needs.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          <Category />
        </div>

      </div>
    </section>
  );
}

export default HomeStudios;
