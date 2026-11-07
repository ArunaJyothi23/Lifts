import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://visionlifts.in";
  const currentDate = new Date().toISOString();

  const routes: {
    path: string;
    priority: number;
    changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  }[] = [
    { path: "", priority: 1.0, changeFrequency: "daily" },
    { path: "/solutions", priority: 0.9, changeFrequency: "weekly" },
    { path: "/products", priority: 0.9, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/telangana-network", priority: 0.85, changeFrequency: "daily" },
    { path: "/contact", priority: 0.85, changeFrequency: "weekly" },
    { path: "/book-survey", priority: 0.85, changeFrequency: "weekly" },
    { path: "/quote-request", priority: 0.85, changeFrequency: "weekly" },
    { path: "/projects", priority: 0.8, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/safety-tech", priority: 0.75, changeFrequency: "monthly" },
    { path: "/b2b-enquiry", priority: 0.75, changeFrequency: "monthly" },
    { path: "/service-request", priority: 0.75, changeFrequency: "monthly" },
    { path: "/careers", priority: 0.7, changeFrequency: "weekly" },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: currentDate,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}

