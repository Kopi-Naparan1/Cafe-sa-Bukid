"use client";

import { useState } from "react";
import Section from "../../../components/ui/Section";

const inquiryHighlights = [
  {
    id: 1,
    title: "General Questions",
    description:
      "Ask about the cafe, menu availability, group visits, or what to expect before you come by.",
  },
  {
    id: 2,
    title: "Event and Group Inquiries",
    description:
      "Use this form for small events, content shoots, or larger group plans that need a reply in advance.",
  },
  {
    id: 3,
    title: "Response Window",
    description:
      "Email works best for detailed requests. Expect replies during regular business hours.",
  },
];

export default function EmailInquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to send email inquiry.");
      }

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to send email inquiry.",
      );
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <Section
      className="
        min-h-[85vh]
        w-full
        rounded-2xl
        overflow-hidden
        bg-secondary-light/30
        px-4
        py-8
        
        md:grid
        md:grid-cols-5
        md:items-center
        md:px-8
        md:py-10
      "
    >
      <div className="md:col-span-2   flex flex-col gap-4 md:gap-5 md:pr-6">
        <span className="text-xs font-medium text-center md:text-left uppercase tracking-[.16em] text-primary/60">
          Email Us
        </span>

        <h2 className="font-heading font-extrabold text-center md:text-left tracking-tight  text-[clamp(1.6rem,4vw,3rem)] leading-[1.1]">
          Send your questions before the trip
        </h2>

        <p className="max-w-md hidden md:block text-center md:text-left leading-relaxed text-[clamp(.95rem,1.5vw,1rem)] text-dark/65">
          If you need details beyond location and opening hours, send an email
          inquiry and share everything in one message.
        </p>

        <div className="md:flex   mt-4 hidden flex-col gap-4">
          {inquiryHighlights.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-secondary-dark/50 px-4 py-4"
            >
              <h3 className="font-heading text-lg font-bold text-background/75">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-background/55">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 md:col-span-3 md:mt-0 ">
        <div className="rounded-2xl bg-secondary-dark/55 p-4 shadow-[0_18px_45px_-25px_rgba(0,0,0,0.45)] sm:p-5 md:p-7">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex min-w-0 flex-col gap-1.5 text-[.82rem] font-medium text-background/75 sm:gap-2 sm:text-sm">
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  className="
                    w-full max-w-full min-w-0 box-border
                    rounded-xl border border-background/10 bg-background/95
                    px-3 py-2.5 text-sm text-dark outline-none transition-colors duration-150
                    placeholder:text-sm placeholder:text-dark/35 focus:border-accent
                    sm:rounded-2xl sm:px-4 sm:py-3
                  "
                />
              </label>

              <label className="flex min-w-0 flex-col gap-1.5 text-[.82rem] font-medium text-background/75 sm:gap-2 sm:text-sm">
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="
                    w-full max-w-full min-w-0 box-border
                    rounded-xl border border-background/10 bg-background/95
                    px-3 py-2.5 text-sm text-dark outline-none transition-colors duration-150
                    placeholder:text-sm placeholder:text-dark/35 focus:border-accent
                    sm:rounded-2xl sm:px-4 sm:py-3
                  "
                />
              </label>
            </div>

            <label className="flex min-w-0 flex-col gap-1.5 text-[.82rem] font-medium text-background/75 sm:gap-2 sm:text-sm">
              Subject
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What do you need help with?"
                className="
                  w-full max-w-full min-w-0 box-border
                  rounded-xl border border-background/10 bg-background/95
                  px-3 py-2.5 text-sm text-dark outline-none transition-colors duration-150
                  placeholder:text-sm placeholder:text-dark/35 focus:border-accent
                  sm:rounded-2xl sm:px-4 sm:py-3
                "
              />
            </label>

            <label className="flex min-w-0 flex-col gap-1.5 text-[.82rem] font-medium text-background/75 sm:gap-2 sm:text-sm">
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Share your question, preferred date, group size, or any details we should know."
                className="
                  w-full max-w-full min-w-0 box-border
                  resize-none rounded-xl border border-background/10 bg-background/95
                  px-3 py-2.5 text-sm text-dark outline-none transition-colors duration-150
                  placeholder:text-sm placeholder:text-dark/35 focus:border-accent
                  sm:rounded-2xl sm:px-4 sm:py-3
                "
              />
            </label>

            <div className="flex flex-col gap-3 pt-2 md:flex-row md:items-center md:justify-between">
              <p className="max-w-md text-sm leading-relaxed text-background/50">
                For urgent concerns, social messaging may still be faster. This
                email form works best for detailed requests.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="
                  rounded-full bg-accent px-6 py-3 text-sm font-medium text-background
                  transition-all duration-150 hover:bg-accent/80 hover:-translate-y-px
                  disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:bg-accent
                  md:px-10 md:text-base md:hover:translate-y-0 md:hover:-translate-x-px
                  md:rounded-l-4xl md:rounded-r-sm
                  shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)]
                "
              >
                {loading ? "Sending..." : "Send Email Inquiry"}
              </button>
            </div>

            {error ? (
              <p className="rounded-2xl border border-red-300/30 bg-red-950/20 px-4 py-3 text-sm text-red-100">
                {error}
              </p>
            ) : null}

            {success ? (
              <p className="rounded-2xl border border-emerald-300/30 bg-emerald-950/20 px-4 py-3 text-sm text-emerald-100">
                Your inquiry was sent successfully. We&apos;ll get back to you
                soon.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </Section>
  );
}
