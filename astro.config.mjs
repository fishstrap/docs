// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
        starlight({
            title: 'Fishstrap',
            logo: {
                src: './src/assets/favicon.webp',
                replacesTitle: true,
            },
            defaultLocale: 'root',
            head: [
                {
                    tag: 'meta',
                    attrs: {
                        property: 'og:image',
                        content: '/og.png',
                    },
                },
            ],
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/fishstrap/fishstrap' }],
            customCss: [
              './src/css/custom.css',
            ],
            sidebar: [
                {
					label: 'FAQ',
                    items: [
                        { label: 'Frequently Asked Questions (FAQ)', slug: 'faq/faq'},
                        
					]
				},
                {
					label: 'Manual',
                    items: [
                        { label: 'Introduction to Fishstrap', slug: 'manual/introduction'},
                        { label: 'FastFlags (Client)', slug: 'manual/fast-flags-client'},
					]
				},
				{
					label: 'Troubleshooting',
					items: [
                        { label: 'Preface', slug: 'troubleshoot/preface' },
                        { label: 'Troubleshooting Fishstrap', slug: 'troubleshoot/fishstrap' },
                        { label: 'Troubleshooting Roblox', slug: 'troubleshoot/roblox' },
					],
                },
                {
					label: 'Legal',
					items: [
                        { label: 'License', slug: 'legal/license' },
                        { label: 'Privacy Policy', slug: 'legal/privacy-policy' },
					],
				},
			],
		}),
	],
});
