
"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel, FieldSeparator, FieldDescription } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { UserRound, Mail, LockKeyhole, Image, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function SignUpPage() {
  const router = useRouter();

     const handleGithubSignUp = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
             callbackURL: "/", 
  
        })
    }

  const handleEmailSignUp = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
      ...(user.image ? { image: user.image } : {}),
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    if (data) {
      toast.success("Successfully signed up!");
      router.push("/");
      router.refresh();
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 py-12">

      <div className="mx-auto max-w-md">

        {/* Brand */}
        <div className="mb-7 text-center">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 p-2.5 text-white shadow-md">
              <Sparkles size={24} />
            </span>

            <span className="text-2xl font-bold text-indigo-700">
              StudioSpace
            </span>
          </Link>

          <p className="mt-4 text-sm text-gray-500">
            Create your account and start your creative journey.
          </p>
        </div>

        <Card className="border border-indigo-100 bg-white shadow-xl shadow-indigo-100/50">

          <CardHeader className="space-y-3 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-200">
              <UserRound size={27} />
            </div>

            <CardTitle className="text-2xl font-bold text-gray-900">
              Create Account
            </CardTitle>

            <CardDescription className="text-gray-500">
              Sign up to explore and book amazing creative studios.
            </CardDescription>
          </CardHeader>

          <CardContent>

            <form onSubmit={handleEmailSignUp}>
              <FieldGroup className="gap-5">

                {/* Name */}
                <Field>
                  <FieldLabel htmlFor="name" className="font-semibold text-gray-700">
                    Full Name
                  </FieldLabel>

                  <div className="relative">
                    <UserRound className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400" size={19} />

                    <Input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="h-12 border-gray-200 pl-10 focus-visible:ring-indigo-500"
                      required
                    />
                  </div>
                </Field>

                {/* Image */}
                <Field>
                  <FieldLabel htmlFor="image" className="font-semibold text-gray-700">
                    Profile Image URL
                  </FieldLabel>

                  <div className="relative">
                    <Image className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400" size={19} />

                    <Input
                      id="image"
                      type="url"
                      name="image"
                      placeholder="https://example.com/image.jpg"
                      className="h-12 border-gray-200 pl-10 focus-visible:ring-indigo-500"
                    />
                  </div>
                </Field>

                {/* Email */}
                <Field>
                  <FieldLabel htmlFor="email" className="font-semibold text-gray-700">
                    Email Address
                  </FieldLabel>

                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400" size={19} />

                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      className="h-12 border-gray-200 pl-10 focus-visible:ring-indigo-500"
                      required
                    />
                  </div>
                </Field>

                {/* Password */}
                <Field>
                  <FieldLabel htmlFor="password" className="font-semibold text-gray-700">
                    Password
                  </FieldLabel>

                  <div className="relative">
                    <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-indigo-400" size={19} />

                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Create a password"
                      className="h-12 border-gray-200 pl-10 focus-visible:ring-indigo-500"
                      required
                    />
                  </div>
                </Field>

                {/* Signup Button */}
                <Button
                  type="submit"
                  className="h-12 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-base font-semibold text-white shadow-md shadow-indigo-200 transition-all duration-300 hover:from-indigo-700 hover:to-purple-700"
                >
                  Create Account
                </Button>
                    
                    <div>
                       <Button
                          type="button"
                           onClick={handleGithubSignUp}
                            variant="outline"
                             className="h-12 w-full gap-2 border-gray-300"
                             >
                           <FaGithub size={20} />
                             Continue with GitHub
                            </Button>
                    </div>

                <FieldDescription className="text-center text-gray-500">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-semibold text-indigo-600 transition hover:text-purple-600"
                  >
                    Sign In
                  </Link>
                </FieldDescription>

              </FieldGroup>
            </form>

          </CardContent>
        </Card>

        <p className="mt-6 text-center text-xs text-gray-400">
          By creating an account, you agree to our{" "}
          <Link href="/terms" className="text-indigo-600 hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-indigo-600 hover:underline">
            Privacy Policy
          </Link>.
        </p>

      </div>
    </main>
  );
}
