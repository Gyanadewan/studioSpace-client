
import Link from "next/link";
import {
  Camera,
  Music2,
  Mic2,
  Video,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import ChooseStudios from "@/components/choosestudios/ChooseStudios";

const services = [
  {
    id: 1,
    title: "Photography Studio",
    description:
      "Capture stunning photos in a professional environment with modern lighting and photography equipment.",
    icon: Camera,
    category: "Photo Studio",
    features: ["Professional Lighting", "Camera Setup", "Creative Backgrounds"],
  },
  {
    id: 2,
    title: "Music Studio",
    description:
      "Create amazing music with professional recording equipment and a comfortable soundproof environment.",
    icon: Music2,
    category: "Music Suite",
    features: ["Soundproof Room", "Audio Recording", "Mixing Equipment"],
  },
  {
    id: 3,
    title: "Podcast Studio",
    description:
      "Record high-quality podcasts with professional microphones and a comfortable recording setup.",
    icon: Mic2,
    category: "Podcast Room",
    features: ["Professional Microphones", "Audio Setup", "Recording Space"],
  },
  {
    id: 4,
    title: "Video Production",
    description:
      "Bring your video ideas to life with professional cameras, lighting, and creative production spaces.",
    icon: Video,
    category: "Video Production Studio",
    features: ["Video Equipment", "Studio Lighting", "Shooting Space"],
  },
];

const steps = [
  "Explore our available studios",
  "Choose your preferred studio",
  "Select your booking date and time",
  "Confirm your booking and start creating",
];

function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-950 via-violet-900 to-purple-800 px-5 py-24 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm">
            Explore What We Offer
          </span>

          <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Creative Spaces for Every Great Idea
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-violet-100 md:text-lg">
            From photography and music production to podcasting and video
            production, find the perfect space to bring your creativity to life.
          </p>

          <Link
            href="/studios"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3 font-semibold text-violet-900 transition hover:bg-violet-100"
          >
            Explore Studios
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-widest text-violet-700">
            Our Services
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            What We Offer
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Discover professional creative spaces designed for your unique
            projects and ideas.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-xl"
              >
                <div className="mb-5 flex size-14 items-center justify-center rounded-xl bg-violet-100 text-violet-700 transition group-hover:bg-violet-700 group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle2
                        size={16}
                        className="shrink-0 text-violet-600"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/studios?category=${encodeURIComponent(service.category)}`}
                  className="mt-7 flex items-center justify-between border-t border-gray-100 pt-5 font-semibold text-violet-700 transition hover:text-violet-900"
                >
                  Explore Studios
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
       <ChooseStudios></ChooseStudios>

      {/* How It Works */}
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-widest text-violet-700">
            Simple Process
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            How It Works
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-xl border border-gray-200 p-6 text-center"
            >
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-violet-700 text-lg font-bold text-white">
                {index + 1}
              </div>

              <p className="mt-5 font-semibold text-gray-800">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-violet-900 px-6 py-16 text-center text-white md:px-12">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to Create Something Amazing?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-violet-100">
            Find your perfect creative space and turn your ideas into reality.
          </p>

          <Link
            href="/studios"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3 font-semibold text-violet-900 transition hover:bg-violet-100"
          >
            Browse All Studios
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;
