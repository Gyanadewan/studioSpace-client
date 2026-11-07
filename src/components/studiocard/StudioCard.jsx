

import { MapPin, Star, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function StudioCard({studio}) {
   
  const {
     _id,
    title,
    category,
    hourlyRate,
    location,
    imageUrl,
    rating,
    reviewCount,
  } = studio;

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">

      <div className="relative h-56 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-800 shadow">
          {category}
        </span>
      </div>

      <div className="space-y-4 p-5">

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-sm font-semibold text-amber-500">
            <Star size={16} fill="currentColor" />
            {rating || "New"}
          </span>

          <span className="text-xs text-gray-500">
            {reviewCount || 0} Reviews
          </span>
        </div>

        <h3 className="line-clamp-1 text-lg font-bold text-gray-900 dark:text-white">
          {title}
        </h3>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <MapPin size={16} />
          <span>{location}</span>
        </div>

        <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              ${hourlyRate}
              <span className="text-sm font-normal text-gray-500">
                /hour
              </span>
            </p>

            <Link
              href={`/studios/${_id}`}
              className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              View Details
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
