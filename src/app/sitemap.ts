import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

const baseUrl = "https://misteddoubleglazing.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/why-does-double-glazing-mist-or-steam-up`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/window-repairs-near-me`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/site-map`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const locationPages: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [...staticPages, ...servicePages, ...locationPages];
}

