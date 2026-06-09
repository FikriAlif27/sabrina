import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Our Space | Happy Birthday Sabrina",
    short_name: "Our Space",
    description:
      "A digital sanctuary celebrating Sabrina's special day, memories, and beautiful moments together.",
    start_url: "/",
    display: "standalone",
    background_color: "#170E0D",
    theme_color: "#170E0D",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
