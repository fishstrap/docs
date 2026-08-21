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
                src: "./src/assets/favicon.png",
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
                { icon: "github", label: "GitHub", href: "https://github.com/fishstrap/fishstrap" },
                { icon: "forgejo", label: "Fishjo", href: "https://git.fishstrap.app/fishstrap/fishstrap" },
            ],
            customCss: ["./src/css/custom.css"],
            sidebar: [
                { slug: "faq" },
                {
                    label: "Manual",
                    items: [
                        { slug: "manual/introduction" },
                        { slug: "manual/fast-flags-client" },
                        { slug: "manual/fast-flags-studio" },
                        { slug: "manual/appearance" },
                        { slug: "manual/integrations" },
                        { slug: "manual/bootstrapper" },
                    ],
                },
                {
                    label: "Troubleshooting",
                    items: [
                        { slug: "troubleshoot/preface" },
                        { slug: "troubleshoot/fishstrap" },
                        { slug: "troubleshoot/roblox" },
                    ],
                },
                {
                    label: "Release Notes",
                    items: [
                        { slug: "release-notes/v3-1-2", badge: { text: "LATEST", variant: "success" } },
                        { slug: "release-notes/v3-1-0" },
                    ],
                },
                {
                    label: "Legal",
                    items: [
                        { slug: "legal/license" },
                        // { slug: "legal/privacy-policy" },
                    ],
                },
                {
                    label: "For Developers",
                    items: [
                        { slug: "developers/contributor-guidelines" },
                        { slug: "developers/downloading-and-building" },
                    ],
                },
            ],
        }),
    ],
});
