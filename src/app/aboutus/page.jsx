
import Link from "next/link";
import {
  Camera,
  Mic2,
  Music2,
  Video,
  Target,
  Heart,
  Users,
  CalendarCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Photography Studios",
    description:
      "Discover professional photography spaces with lighting and equipment for your creative projects.",
  },
  {
    icon: Mic2,
    title: "Podcast Studios",
    description:
      "Find comfortable podcast rooms equipped for recording conversations and interviews.",
  },
  {
    icon: Music2,
    title: "Music Studios",
    description:
      "Book dedicated music spaces for recording, mixing, and producing your next track.",
  },
  {
    icon: Video,
    title: "Video Production",
    description:
      "Explore creative spaces for video shoots, content creation, and professional productions.",
  },
];

const benefits = [
  "Easy and convenient studio booking",
  "Explore different creative spaces",
  "Flexible booking options",
  "Transparent pricing",
  "A simple experience for creators and studio owners",
  "Discover spaces that match your needs",
];

const steps = [
  {
    number: "01",
    title: "Explore Studios",
    description: "Browse different creative studios and find your perfect space.",
  },
  {
    number: "02",
    title: "Choose Your Space",
    description: "Compare studio details, facilities, and pricing.",
  },
  {
    number: "03",
    title: "Book Your Studio",
    description: "Select your preferred date and submit your booking.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-indigo-600 to-purple-700 px-4 py-24 text-white sm:py-32">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
            <Sparkles size={16} />
            About StudioSpace
          </span>

          <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
            Your Space, Your Creativity, Your Story.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-indigo-100 sm:text-lg">
            StudioSpace connects creators with the perfect spaces to bring
            their ideas to life. Discover, explore, and book creative studios
            for your next project.
          </p>

          <Link
            href="/studios"
            className="mt-9 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 font-semibold text-indigo-700 shadow-lg transition hover:bg-indigo-50"
          >
            Explore Studios
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Who We Are */}
      <section className="px-4 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000"
              alt="Creative studio workspace"
              className="h-[350px] w-full rounded-2xl object-cover shadow-xl sm:h-[420px]"
            />

            <div className="absolute -bottom-6 -right-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 p-5 text-white shadow-lg sm:-right-6">
              <Sparkles size={25} />
              <p className="mt-2 text-lg font-bold">Create More</p>
              <p className="text-sm text-indigo-100">Dream Without Limits</p>
            </div>
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-indigo-600">
              Who We Are
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-snug text-gray-900 sm:text-4xl">
              A Better Way to Find Your Creative Space
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              StudioSpace is a creative studio booking platform designed
              to make finding and booking studio spaces simple and convenient.
              Whether you are a photographer, podcaster, musician, or content
              creator, we help you discover spaces that fit your needs.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Our goal is to connect talented creators with studio owners
              and make every creative project easier to start.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 px-4 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-indigo-600">
              What We Offer
            </span>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Spaces for Every Creative Idea
            </h2>

            <p className="mt-4 text-gray-600">
              Explore different types of creative spaces designed to support
              your imagination and projects.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-600">
                    <Icon size={27} />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">

          <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 p-8 text-white sm:p-10">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-white/15">
              <Target size={28} />
            </div>

            <h2 className="text-2xl font-bold">Our Mission</h2>

            <p className="mt-4 leading-8 text-indigo-100">
              Our mission is to make creative spaces accessible to everyone
              by connecting creators with suitable studios through a simple
              and convenient booking experience.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 p-8 text-white sm:p-10">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-white/15">
              <Heart size={28} />
            </div>

            <h2 className="text-2xl font-bold">Our Vision</h2>

            <p className="mt-4 leading-8 text-purple-100">
              We envision a creative community where every creator can
              easily find the right environment, collaborate with others,
              and turn ideas into reality.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 px-4 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-indigo-600">
              Why Choose Us
            </span>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Everything You Need to Create Something Amazing
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              We make discovering and booking creative spaces easier.
              StudioSpace brings studio owners and creators together
              in one convenient platform.
            </p>

            <div className="mt-7 space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-indigo-600"
                  />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1000"
              alt="Modern creative workspace"
              className="h-[350px] w-full rounded-2xl object-cover shadow-lg sm:h-[430px]"
            />
          </div>

        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-indigo-600">
              Simple Process
            </span>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              How StudioSpace Works
            </h2>

            <p className="mt-4 text-gray-500">
              Find and book your perfect creative space in three simple steps.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-sm transition hover:shadow-lg"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 text-xl font-bold text-white">
                  {step.number}
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Host CTA */}
      <section className="px-4 pb-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-purple-700 px-6 py-14 text-center text-white sm:px-12">

          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
            <Users size={28} />
          </div>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Have a Creative Space?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-indigo-100">
            Join StudioSpace and showcase your studio to creators.
            Let more people discover your space and bring their ideas to life.
          </p>

          <Link
            href="/studios"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 font-semibold text-indigo-700 transition hover:bg-indigo-50"
          >
            Explore Studios
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  );
}
