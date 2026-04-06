import type { Config } from "tailwindcss";

/**
 * Tailwind Config for Cafe sa Bukid Website
 *
 * This file defines the **design system tokens** used across the app.
 * Everything from colors, spacing, typography, shadows, layout grids,
 * to animations is centralized here.
 *
 * How to use this effectively:
 * 1. Avoid hardcoding values (like `p-6` or `text-[#4A9C3E]`).
 *    Use the design tokens instead: `p-stack-md`, `text-primary`.
 * 2. Create reusable components (Button, Card, Section, Header) that
 *    reference these tokens for consistency.
 * 3. When updating brand styles, change here first; all classes
 *    will automatically update.
 */
const config: Config = {
  theme: {
    extend: {
      /**
       * ---------------------------
       * Colors
       * ---------------------------
       * Usage examples:
       *   - bg-primary / text-primary / border-primary
       *   - bg-accent-light / hover:bg-accent-dark
       * Tips:
       *   - Stick to these colors in components for consistency.
       *   - Avoid hex codes in JSX directly.
       */
      colors: {
        primary: {
          DEFAULT: "#4A9C3E",
          light: "#5CB950",
          dark: "#3A7C30",
        },
        secondary: {
          DEFAULT: "#6B4E3D",
          light: "#8A6B58",
          dark: "#4F3A2D",
        },
        accent: {
          DEFAULT: "#FFCC33",
          light: "#FFD966",
          dark: "#E6B800",
        },
        background: "#FFFFFF", // Page background
        surface: "#F9FAFB", // Card/section surfaces
        muted: "#6B7280", // Subtle text, labels, or disabled
      },

      /**
       * ---------------------------
       * Spacing scale
       * ---------------------------
       * Usage examples:
       *   - px-container / py-section-md
       *   - gap-stack-lg
       * Tips:
       *   - Use stack spacing for consistent vertical gaps between elements.
       *   - Use section spacing for page sections.
       */
      spacing: {
        "section-sm": "2.5rem",
        "section-md": "4rem",
        "section-lg": "6rem",
        "section-xl": "8rem",

        "container-sm": "1rem",
        "container-md": "1.5rem",
        "container-lg": "2rem",

        "card-padding": "1.5rem",
        "stack-sm": "0.5rem",
        "stack-md": "1rem",
        "stack-lg": "1.5rem",
      },

      /**
       * ---------------------------
       * Max widths
       * ---------------------------
       * Usage examples:
       *   - max-w-content-lg for main content wrapper
       *   - max-w-prose for text paragraphs
       * Tips:
       *   - Helps maintain readable line lengths and centered content.
       */
      maxWidth: {
        "content-sm": "640px",
        "content-md": "768px",
        "content-lg": "1024px",
        "content-xl": "1200px",
        "content-2xl": "1400px",
        prose: "65ch",
      },

      /**
       * ---------------------------
       * Screens (breakpoints)
       * ---------------------------
       * Usage: sm:, md:, lg:, etc.
       * Example:
       *   <div className="text-sm md:text-base lg:text-lg">
       */
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },

      /**
       * ---------------------------
       * Typography (fluid)
       * ---------------------------
       * Usage:
       *   - text-fluid-xl for responsive headings
       * Tips:
       *   - Always prefer fluid typography over hard sizes for headings
       *   - text-fluid-base for body text
       */
      fontSize: {
        "fluid-sm": "clamp(0.875rem, 0.8rem + 0.25vw, 1rem)",
        "fluid-base": "clamp(1rem, 0.9rem + 0.35vw, 1.125rem)",
        "fluid-lg": "clamp(1.125rem, 1rem + 0.5vw, 1.5rem)",
        "fluid-xl": "clamp(1.5rem, 1.2rem + 1vw, 2.25rem)",
        "fluid-2xl": "clamp(2rem, 1.5rem + 1.5vw, 3rem)",
        "fluid-3xl": "clamp(2.5rem, 2rem + 2vw, 4rem)",
      },

      /**
       * ---------------------------
       * Shadows
       * ---------------------------
       * Usage:
       *   - shadow-card / shadow-card-hover / shadow-elevated
       * Tips:
       *   - Use subtle shadows for cards, elevated for modals or hero sections
       */

      /**
       * ---------------------------
       * Grid templates
       * ---------------------------
       * Usage:
       *   - grid-cols-sidebar-content
       *   - grid-cols-auto-fill-md
       * Tips:
       *   - Use for layouts like sidebar + main, or responsive card grids
       */
      gridTemplateColumns: {
        "auto-fill-sm": "repeat(auto-fill, minmax(200px, 1fr))",
        "auto-fill-md": "repeat(auto-fill, minmax(280px, 1fr))",
        "auto-fill-lg": "repeat(auto-fill, minmax(320px, 1fr))",
        "sidebar-content": "280px 1fr",
        "content-sidebar": "1fr 280px",
      },

      /**
       * ---------------------------
       * Animations
       * ---------------------------
       * Usage:
       *   - animate-fadeIn / animate-fadeInUp / animate-slideInLeft
       * Tips:
       *   - Always combine with opacity or transform for subtle motion
       *   - Good for hero text, cards on scroll, buttons
       */
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeInUp: "fadeInUp 0.6s ease-out",
        slideInLeft: "slideInLeft 0.4s ease-out",
      },

      /**
       * ---------------------------
       * Aspect ratios
       * ---------------------------
       * Usage:
       *   - aspect-hero / aspect-card / aspect-square
       * Tips:
       *   - Use to maintain image/video ratios consistently across pages
       */
      aspectRatio: {
        card: "4 / 3",
        hero: "16 / 9",
        square: "1 / 1",
        portrait: "3 / 4",
      },
    },
  },
};

export default config;
