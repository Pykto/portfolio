// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://alanhdez.com.mx',
	integrations: [
		starlight({
			title: 'Alan Hernández Olivero',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/pykto' }],
			sidebar: [
				{
					label: 'About',
					items: [
						{ label: 'About me', slug: 'about' },
					],
				},
				{
					label: 'Projects',
					items: [{ autogenerate: { directory: 'projects' } }],
				},
				{
					label: 'Knowledge Base',
					items: [{ autogenerate: { directory: 'knowledge' } }],
				},
				{
					label: 'Contact',
					items: [
						{ label: 'Contact', slug: 'contact' },
					],
				},
			],
		}),
	],
});
