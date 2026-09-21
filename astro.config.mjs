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
            title: "Fishstrap Wiki",
            titleDelimiter: "·", // \u00b7
            description:
                "Visit the official Wiki for Fishstrap — an alternative Roblox bootstrapper based on Bloxstrap.",
            favicon: "/favicon.png",
            logo: {
                alt: "Fishstrap logo",
                dark: "./src/assets/fishstrap-logo-dark.png",
                light: "./src/assets/fishstrap-logo-light.png",
                replacesTitle: true,
            },
            defaultLocale: "root",
            head: [
                {
                    tag: "meta",
                    attrs: {
                        property: "og:image",
                        content: "/thumbnail.png",
                    },
                },
            ],
            social: [
                { icon: "github", label: "GitHub", href: "https://github.com/fishstrap" },
                { icon: "forgejo", label: "Fishjo", href: "https://git.fishstrap.app/fishstrap" },
                { icon: "discord", label: "Discord", href: "https://discord.gg/dZJSbgHx8y" },
            ],
            customCss: ["./src/css/custom.css"],
            editLink: { baseUrl: "https://github.com/fishstrap/docs/edit/main/" },
            lastUpdated: true,
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
                    label: "For Developers",
                    items: [{ autogenerate: { directory: "developers" } }],
                },
                {
                    label: "Legal",
                    items: [{ autogenerate: { directory: "legal" } }],
                },
            ],
        }),
    ],
});
