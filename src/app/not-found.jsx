import Link from "next/link";


export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-8xl font-bold text-violet-600">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-semibold">
        Page Not Found!
      </h2>

      <p className="mt-2 text-gray-500">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-violet-600 px-6 py-3 text-white"
      >
        Back to Home
      </Link>
    </div>
  );
}