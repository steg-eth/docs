import { defineConfig } from 'vocs'
import rehypeMermaid from 'rehype-mermaid'

export default defineConfig({
  title: 'Steg',
  description:
    'Applied research and operations in proof verification, modular verifier design, and Ethereum-anchored trust models',
  baseUrl: 'https://docs.steg.eth.link',
  rootDir: 'docs',
  logoUrl: {
    light: '/steg.svg?v=2',        // black mark on light/cream bg
    dark: '/steg-white.svg?v=2',   // white mark on dark bg
  },
  iconUrl: '/steg.svg?v=2',
  socials: [{ icon: 'github', link: 'https://github.com/steg-eth' }],

  // Match the landing page (eureka.etcetera): IBM Plex Sans + warm light bg.
  theme: {
    variables: {
      color: {
        // Flatten all primary + secondary surfaces (sidebar, topbar, right panel,
        // code-block bg) to the same warm cream / near-black as the landing.
        background: { light: 'oklch(0.92 0.01 85)', dark: 'oklch(0.145 0 0)' },
        background2: { light: 'oklch(0.92 0.01 85)', dark: 'oklch(0.145 0 0)' },
        background3: { light: 'oklch(0.92 0.01 85)', dark: 'oklch(0.145 0 0)' },
        background4: { light: 'oklch(0.92 0.01 85)', dark: 'oklch(0.145 0 0)' },
        background5: { light: 'oklch(0.92 0.01 85)', dark: 'oklch(0.145 0 0)' },
        // backgroundDark/Tint paint the sidebar logoWrapper + footer + mobile topnav curtain — must match too.
        backgroundDark: { light: 'oklch(0.92 0.01 85)', dark: 'oklch(0.145 0 0)' },
        backgroundDarkTint: { light: 'oklch(0.92 0.01 85)', dark: 'oklch(0.145 0 0)' },
        text: { light: 'oklch(0.145 0 0)', dark: 'oklch(0.985 0 0)' },
      },
      fontFamily: {
        default: '"IBM Plex Sans", "IBM Plex Sans Fallback", system-ui, sans-serif',
        mono: '"IBM Plex Mono", ui-monospace, "SF Mono", Menlo, monospace',
      },
    },
  },

  // Render ```mermaid blocks to inline SVG at build time (static, IPFS-friendly).
  markdown: {
    rehypePlugins: [[rehypeMermaid, { strategy: 'inline-svg' }]],
  },

  sidebar: [
    { text: 'Introduction', link: '/' },
    {
      text: 'Universal Resolver Matrix',
      items: [
        { text: 'Overview', link: '/patterns/overview' },
        {
          text: 'Resolution Patterns',
          items: [
            { text: 'DNSSEC Pattern', link: '/patterns/dnssec-pattern' },
            { text: 'EVM Pattern', link: '/patterns/evm-pattern' },
            { text: 'Non-EVM Pattern', link: '/patterns/non-evm-pattern' },
            { text: 'WebAuthn Pattern', link: '/patterns/webauthn-pattern' },
          ],
        },
        {
          text: 'Technical Specifications',
          items: [
            { text: 'DNSSEC Specification', link: '/specifications/dnssec-specification' },
            { text: 'EVM Specification', link: '/specifications/evm-specification' },
            { text: 'Non-EVM Specification', link: '/specifications/non-evm-specification' },
            { text: 'WebAuthn Specification', link: '/specifications/webauthn-specification' },
          ],
        },
      ],
    },
    {
      text: 'Prototype Specification',
      items: [
        { text: 'Overview', link: '/spec/' },
        { text: 'Verifier', link: '/spec/verifier' },
        { text: 'AuthResolverImpl', link: '/spec/authresolver' },
        { text: 'verifyAction', link: '/spec/verify-action' },
        { text: 'Record Schemas', link: '/spec/record-schemas' },
        { text: 'Verification Flow', link: '/spec/verification-flow' },
        { text: 'Security', link: '/spec/security' },
        { text: 'Deferred', link: '/spec/deferred' },
        { text: 'References', link: '/spec/references' },
      ],
    },
  ],
})
