"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { z, ZodError } from "zod";

import { sendEmail } from "../actions/sendEmail";
import { footerLinks } from "@/components/Footer/footer";
import { formatZodErr } from "@/utils/common";

const schema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(3, "Minimum length is 3 characters")
    .max(50, "Maximum length is 50 characters")
    .regex(/^[A-Za-z\s]+$/, "Only alphabets are allowed"),
  message: z
    .string({ required_error: "Message is required" })
    .min(10, "Minimum length is 10 characters")
    .max(255, "Maximum length is 255 characters"),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Invalid email format")
    .max(75, "Minimum length is 75 characters"),
});

const defaultVal = { state: "", message: "" };

export default function Contact() {
  const [status, setStatus] = useState(defaultVal);
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const formRef = useRef<HTMLFormElement>(null);

  const handleSumbit = async (formData: FormData) => {
    try {
      console.log(formData.get("name"));
      schema.parse({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      });
      console.log("here", formData);

      const result = await sendEmail(formData);
      if (result.success) {
        setStatus({ message: "Submitted successfully!", state: "success" });
        formRef.current?.reset(); // Reset the form
      } else {
        setStatus({ message: "Failed to submit.", state: "fail" });
      }

      setTimeout(() => {
        setStatus(defaultVal);
      }, 5000);
    } catch (err) {
      if (err instanceof ZodError) {
        setErrors((prev) => ({ ...prev, ...formatZodErr(err) }));
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0"
        >
          <Image
            src="https://drive.usercontent.google.com/download?id=1iwRRPGTdE1mNvehanJ5suioxTR8_YQr7&export=view&authuser=0"
            alt="Contact Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg md:text-xl text-gray-200">
            Let&apos;s create something amazing together
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                      Let&apos;s Connect
                    </span>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    I&apos;m always open to discussing new projects, creative
                    ideas, or opportunities to be part of your visions.
                  </p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-lg font-semibold mb-2">Email Me At</h3>
                  <Link
                    href="mailto:kanishkapinkfairy@gmail.com"
                    className="text-primary hover:text-primary-dark font-medium transition-colors"
                  >
                    kanishkapinkfairy@gmail.com
                  </Link>
                </motion.div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Follow Me</h3>
                  <div className="flex gap-4">
                    {footerLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group transition-colors hover:bg-primary"
                      >
                        <Image
                          src={`/assets/icons/${social.name}.svg`}
                          width={24}
                          height={24}
                          alt={social.name}
                          className="group-hover:brightness-200 transition-all"
                        />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
              >
                <form ref={formRef} className="space-y-6" action={handleSumbit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-transparent focus:border-primary outline-none transition-colors"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <div className="text-sm text-red-800 dark:text-red-500">
                        {errors.name}
                      </div>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-transparent focus:border-primary outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <div className="text-sm text-red-800 dark:text-red-500">
                        {errors.email}
                      </div>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 border-2 border-transparent focus:border-primary outline-none transition-colors resize-none"
                      placeholder="Your message"
                    />
                    {errors.message && (
                      <div className="text-sm text-red-800 dark:text-red-500">
                        {errors.message}
                      </div>
                    )}
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 px-6 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors"
                  >
                    Send Message
                  </motion.button>
                </form>
                {status.message && (
                  <div
                    className={`my-4 p-4 text-center border ${
                      status.state === "success"
                        ? "border-green-800"
                        : "border-red-800"
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
