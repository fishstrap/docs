// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
    redirects: {
        "/patch-notes/v3-1-0": "/release-notes/v3-1-0",
        "/patch-notes/v3-1-1": "/release-notes/v3-1-0",
        "/patch-notes/v3-1-2": "/release-notes/v3-1-2",
    },
    integrations: [
        starlight({
            title: "Fishstrap",
            favicon: "/favicon.png",
            logo: {
                dark: "./src/assets/Fishstrap-Dark.png",
                light: "./src/assets/Fishstrap-Light.png",
                replacesTitle: true,
            },
            defaultLocale: "root",
            head: [
                {
                    tag: "meta",
                    attrs: {
                        property: "og:image",
                        content: "/Thumbnail.png",
                    },
                },
            ],
            social: [
                { icon: "github", label: "GitHub", href: "https://github.com/fishstrap" },
                { icon: "forgejo", label: "Fishjo", href: "https://git.fishstrap.app/fishstrap" },
            ],
            customCss: ["./src/css/custom.css"],
            sidebar: [
                { slug: "faq" },
                {
                    label: "Manual",
                    items: [{ autogenerate: { directory: "manual" } }],
                },
                {
                    label: "Troubleshooting",
                    items: [{ autogenerate: { directory: "troubleshoot" } }],
                },
                {
                    label: "Release Notes",
                    items: [{ autogenerate: { directory: "release-notes" } }],
                },
                {
                    label: "Legal",
                    items: [{ autogenerate: { directory: "legal" } }],
                },
                {
                    label: "For Developers",
                    items: [{ autogenerate: { directory: "developers" } }],
                },
            ],
        }),
    ],
});
