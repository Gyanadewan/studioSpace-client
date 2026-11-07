import React from 'react'
import StudioCard from '../studiocard/StudioCard';


 async function Featured() {
   const res = await fetch("http://localhost:8000/featured-studios")
  const featuredStudioData =  await res.json();

  return (
 <section className="bg-gray-50 px-5 py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Discover Our Top-Rated Studios
          </h2>

          <p className="mt-3 text-gray-500">
            Explore our best creative spaces for your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featuredStudioData.map((studio) => (
            <StudioCard
              key={studio._id}
              studio={studio}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Featured
