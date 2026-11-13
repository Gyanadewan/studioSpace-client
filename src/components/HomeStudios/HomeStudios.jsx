import Category from "../category/Category";

function HomeStudios() {
  return (
    <div>
      <div className="container mx-auto mt-2 px-5 md:px-0">
        <p className="mb-3 text-left text-2xl font-bold uppercase tracking-widest text-purple-600 sm:text-center sm:text-3xl">
          Find Your Perfect Space
        </p>

        <p className="max-w-xl text-left text-sm leading-6 text-gray-800 sm:mx-auto sm:text-center sm:text-base sm:leading-7">
          Discover professional studios for podcasting, photography, recording,
          and more. Choose a category to find the perfect space for your creative needs.
        </p>
      </div>

      <Category />
    </div>
  );
}

export default HomeStudios;