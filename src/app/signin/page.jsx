
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Mail,
  LockKeyhole,
  ArrowRight,
  Sparkles,
  Headphones,
  Mic2,
  Camera,
} from "lucide-react";

export default function SignInPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());

    try {
      const { data, error } = await authClient.signIn.email({
        email: user.email,
        password: user.password,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      if (data) {
        toast.success("Successfully signed in!");
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-12">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">

        {/* Left Content */}
        <div className="hidden space-y-7 lg:block">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 p-3 text-white">
              <Sparkles size={25} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-indigo-700">
              StudioSpace
            </span>
          </Link>

          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
              <Sparkles size={16} />
              Welcome to StudioSpace
            </span>

            <h1 className="max-w-lg text-5xl font-bold leading-tight text-gray-900">
              Your Creative Journey
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Starts Here.
              </span>
            </h1>

            <p className="max-w-md leading-7 text-gray-500">
              Discover amazing creative spaces, book your perfect studio,
              and bring your ideas to life with StudioSpace.
            </p>
          </div>

          <div className="grid max-w-md grid-cols-3 gap-4">
            <div className="rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm">
              <Camera className="mb-3 text-indigo-600" size={27} />
              <p className="text-sm font-semibold text-gray-800">
                Photo Studio
              </p>
            </div>

            <div className="rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm">
              <Mic2 className="mb-3 text-purple-600" size={27} />
              <p className="text-sm font-semibold text-gray-800">
                Recording
              </p>
            </div>

            <div className="rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm">
              <Headphones className="mb-3 text-indigo-600" size={27} />
              <p className="text-sm font-semibold text-gray-800">
                Podcast Room
              </p>
            </div>
          </div>
        </div>

        {/* Right Sign In Form */}
        <div className="mx-auto w-full max-w-md">
          <div className="mb-6 text-center lg:hidden">
            <Link
              href="/"
              className="text-2xl font-bold text-indigo-700"
            >
              StudioSpace
            </Link>
          </div>

          <Card className="border border-indigo-100 bg-white shadow-xl shadow-indigo-100/50">
            <CardHeader className="space-y-3 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-200">
                <LockKeyhole size={26} />
              </div>

              <CardTitle className="text-2xl font-bold text-gray-900">
                Welcome Back!
              </CardTitle>

              <CardDescription className="text-gray-500">
                Sign in to continue your creative journey.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSignIn} className="space-y-5">

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400" size={19} />

                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      className="h-12 border-gray-200 pl-10 focus-visible:ring-indigo-500"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Password
                    </label>

                    <Link
                      href="/forgot-password"
                      className="text-xs font-medium text-indigo-600 hover:text-purple-600"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <div className="relative">
                    <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400" size={19} />

                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      className="h-12 border-gray-200 pl-10 focus-visible:ring-indigo-500"
                      required
                    />
                  </div>
                </div>

                {/* Sign In Button */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="h-12 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-base font-semibold text-white shadow-md shadow-indigo-200 transition-all duration-300 hover:from-indigo-700 hover:to-purple-700"
                >
                  {loading ? "Signing In..." : "Sign In"}
                  {!loading && <ArrowRight className="ml-2" size={19} />}
                </Button>

              </form>

              <div className="my-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-xs text-gray-400">OR</span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>

              <p className="text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="font-semibold text-indigo-600 transition hover:text-purple-600"
                >
                  Create Account
                </Link>
              </p>
            </CardContent>
          </Card>

          <p className="mt-6 text-center text-xs text-gray-400">
            © 2026 StudioSpace. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
