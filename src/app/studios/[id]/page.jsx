
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  HiOutlineMapPin,
  HiOutlineUsers,
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineCheckCircle,
  HiOutlineArrowLeft,
  HiOutlineCalendarDays,
  HiOutlineEnvelope,
  HiOutlineCamera,
} from "react-icons/hi2";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

async function getStudio(id) {
  const res = await fetch(`http://localhost:8000/studios/${id}`, {
    cache: "no-store",
  });

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error("Failed to fetch studio");
  }

  return res.json();
}

export default async function StudioDetailsPage({ params }) {
  const { id } = await params;
  const studio = await getStudio(id);

  if (!studio) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-5 py-10">

       <Link
      href="/studios"
       className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-gray-100"
         >
       <HiOutlineArrowLeft className="mr-2 size-4" />
     Back to Studios
    </Link>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Main Content */}
          <div className="space-y-8 lg:col-span-2">

            {/* Studio Image */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src={studio.imageUrl}
                alt={studio.title}
                className="h-[300px] w-full object-cover md:h-[480px]"
              />
            </div>

            {/* Studio Heading */}
            <section>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-violet-100 text-violet-700 hover:bg-violet-100">
                  {studio.category}
                </Badge>

                <Badge
                  variant={studio.isAvailable ? "default" : "destructive"}
                >
                  {studio.isAvailable ? "Available" : "Unavailable"}
                </Badge>
              </div>

              <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                {studio.title}
              </h1>

              <p className="mt-3 flex items-center gap-2 text-muted-foreground">
                <HiOutlineMapPin className="size-5 text-violet-700" />
                {studio.location}
              </p>
            </section>

            <Separator />

            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold">
                About This Studio
              </h2>

              <p className="mt-4 leading-8 text-muted-foreground">
                {studio.overview}
              </p>
            </section>

            <Separator />

            {/* Studio Information */}
            <section>
              <h2 className="text-2xl font-bold">
                Studio Information
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">

                <Card>
                  <CardContent className="p-5">
                    <HiOutlineUsers className="size-7 text-violet-700" />

                    <p className="mt-3 text-sm text-muted-foreground">
                      Maximum Capacity
                    </p>

                    <h3 className="mt-1 text-lg font-bold">
                      {studio.maxCapacity} People
                    </h3>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-5">
                    <HiOutlineClock className="size-7 text-violet-700" />

                    <p className="mt-3 text-sm text-muted-foreground">
                      Booking Type
                    </p>

                    <h3 className="mt-1 text-lg font-bold">
                      Hourly
                    </h3>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-5">
                    <HiOutlineCamera className="size-7 text-violet-700" />

                    <p className="mt-3 text-sm text-muted-foreground">
                      Studio Category
                    </p>

                    <h3 className="mt-1 text-lg font-bold">
                      {studio.category}
                    </h3>
                  </CardContent>
                </Card>

              </div>
            </section>

            <Separator />

            {/* Amenities */}
            <section>
              <h2 className="text-2xl font-bold">
                Amenities & Facilities
              </h2>

              <p className="mt-2 text-sm text-muted-foreground">
                Everything available in this studio.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {studio.amenities?.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <HiOutlineCheckCircle className="size-5 shrink-0 text-violet-700" />

                    <span className="text-sm font-medium">
                      {amenity}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <Separator />

            {/* Host Information */}
            <section>
              <h2 className="text-2xl font-bold">
                Meet Your Host
              </h2>

              <Card className="mt-5">
                <CardContent className="flex items-center gap-4 p-5">
                  <Avatar className="size-14">
                    <AvatarFallback className="bg-violet-100 text-lg text-violet-700">
                      {studio.hostName?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <h3 className="font-bold">
                      {studio.hostName}
                    </h3>

                    <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                      <HiOutlineEnvelope className="size-4" />
                      {studio.hostEmail}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

          </div>

          {/* Booking Sidebar */}
          <aside>
            <Card className="sticky top-28 shadow-sm">
              <CardHeader>
                <p className="text-sm text-muted-foreground">
                  Studio Rental Price
                </p>

                <CardTitle className="text-4xl font-bold text-violet-700">
                  ${studio.hourlyRate}

                  <span className="ml-1 text-base font-normal text-muted-foreground">
                    / hour
                  </span>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <Separator className="mb-6" />

                {/* Price Details */}
                <div className="space-y-5">

                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Hourly Rate
                    </span>

                    <span className="font-semibold">
                      ${studio.hourlyRate}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Security Deposit
                    </span>

                    <span className="font-semibold">
                      ${studio.securityDeposit}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Maximum Guests
                    </span>

                    <span className="font-semibold">
                      {studio.maxCapacity}
                    </span>
                  </div>

                </div>

                {/* Security Notice */}
                <div className="my-6 flex gap-3 rounded-lg bg-violet-50 p-4">
                  <HiOutlineShieldCheck className="size-6 shrink-0 text-violet-700" />

                  <p className="text-xs leading-5 text-gray-600">
                    Security deposit is collected separately according to the booking policy.
                  </p>
                </div>

     {studio.isAvailable && (
       <Link
       href={`/booking?studioId=${studio._id}`}
        className="flex w-full items-center justify-center gap-2 rounded-md bg-violet-700 px-4 py-3 text-white hover:bg-violet-800"
     >
     <HiOutlineCalendarDays className="size-5" />
     Book This Studio
       </Link>
         )}

        {!studio.isAvailable && (
        <p className="rounded-md bg-gray-100 py-3 text-center text-sm text-gray-500">
         Currently Unavailable
        </p>
        )}

                <p className="mt-4 text-center text-xs text-muted-foreground">
                  Check availability before confirming your booking.
                </p>
              </CardContent>
            </Card>
          </aside>

        </div>
      </div>
    </main>
  );
}
