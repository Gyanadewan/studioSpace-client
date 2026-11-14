import { CheckCircle2, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import React from 'react'

function ChooseStudios() {
    const benefits = [
      {
        icon: CheckCircle2,
        title: "Professional Equipment",
        description: "Modern equipment for high-quality creative work.",
      },
      {
        icon: Clock,
        title: "Flexible Booking",
        description: "Choose a convenient time for your creative projects.",
      },
      {
        icon: ShieldCheck,
        title: "Safe Environment",
        description: "Comfortable and reliable spaces for your work.",
      },
      {
        icon: Sparkles,
        title: "Creative Spaces",
        description: "Beautiful studios designed to inspire creativity.",
      },
    ];
  return (
        <section className="bg-gray-50 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-widest text-violet-700">
              Why StudioSpace
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
              Why Choose Our Studios?
            </h2>

            <p className="mt-4 text-gray-600">
              Everything you need to make your creative experience better.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-xl bg-white p-7 text-center shadow-sm transition hover:shadow-lg"
                >
                  <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-5 font-bold text-gray-900">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  )
}

export default ChooseStudios
