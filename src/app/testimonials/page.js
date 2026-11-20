import TestimonialsShowcase from "@/components/TestimonialsShowcase";
import testimonials from "../../data/testimonials";

export const metadata = {
  title: "Testimonials",
  description: "Client testimonials for Bachir Oueida.",
};

export default function TestimonialsPage() {
  return <TestimonialsShowcase testimonials={testimonials} />;
}
