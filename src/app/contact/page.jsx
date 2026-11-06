"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-slate-900 px-6 py-20 text-center text-white">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
          Get In Touch
        </p>
        <h1 className="text-4xl font-bold md:text-5xl">
          Contact Us
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-gray-300">
          Have questions or need help? We would love to hear from you.
          Send us a message and our team will get back to you.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="mb-3 text-2xl font-bold text-slate-900">
            Let's Talk
          </h2>
          <p className="mb-8 text-gray-600">
            Feel free to contact us for any questions, support, or
            booking-related information.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
                <MapPin />
              </div>
              <div>
                <h3 className="font-semibold">Our Location</h3>
                <p className="text-sm text-gray-500">
                  Chattogram, Bangladesh
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
                <Mail />
              </div>
              <div>
                <h3 className="font-semibold">Email Address</h3>
                <p className="text-sm text-gray-500">
                  support@studiospace.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
                <Phone />
              </div>
              <div>
                <h3 className="font-semibold">Phone Number</h3>
                <p className="text-sm text-gray-500">
                  +880 1234-567890
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
                <Clock />
              </div>
              <div>
                <h3 className="font-semibold">Working Hours</h3>
                <p className="text-sm text-gray-500">
                  Saturday - Thursday, 9 AM - 6 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Your Name
              </label>
              <Input
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email Address
              </label>
              <Input
                type="email"
                required
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Subject
              </label>
              <Input
                required
                placeholder="Enter subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Message
              </label>
              <Textarea
                required
                rows={5}
                placeholder="Write your message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <Button type="submit" className="w-full">
              Send Message <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}