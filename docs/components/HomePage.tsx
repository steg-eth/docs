// Custom homepage for docs.steg.eth — mirrors the ensdomains/docs landing shape:
// a hero band (h1 + tagline + buttons) followed by a 1/2/3-column link grid.

const navigation = [
  {
    title: 'Universal Resolver Matrix',
    links: [
      ['Overview', '/patterns/overview'],
      ['DNSSEC Pattern', '/patterns/dnssec-pattern'],
      ['EVM Pattern', '/patterns/evm-pattern'],
      ['Non-EVM Pattern', '/patterns/non-evm-pattern'],
      ['WebAuthn Pattern', '/patterns/webauthn-pattern'],
    ] as const,
  },
  {
    title: 'Technical Specifications',
    links: [
      ['DNSSEC Specification', '/specifications/dnssec-specification'],
      ['EVM Specification', '/specifications/evm-specification'],
      ['Non-EVM Specification', '/specifications/non-evm-specification'],
      ['WebAuthn Specification', '/specifications/webauthn-specification'],
    ] as const,
  },
  {
    title: 'Prototype Specification',
    links: [
      ['Overview', '/spec/'],
      ['Verifier', '/spec/verifier'],
      ['AuthResolverImpl', '/spec/authresolver'],
      ['verifyAction', '/spec/verify-action'],
      ['Record Schemas', '/spec/record-schemas'],
      ['Verification Flow', '/spec/verification-flow'],
      ['Security', '/spec/security'],
      ['Deferred', '/spec/deferred'],
      ['References', '/spec/references'],
    ] as const,
  },
]

export function HomePage() {
  return (
    <>
      <div className="steg-home-hero">
        <div className="steg-home-inner">
          <h1>Documentation</h1>
          <p className="tagline">Verification and revocation for ENS-named agents.</p>
          <p className="description">
            Steg builds the Authority tier of the Managed Agent Identity Platform (MAIP)
            on ENSv2 — a Verifier, a per-name AuthResolver, a TypeScript SDK, and a
            conformance suite. Founded on the Universal Resolver Matrix.
          </p>
          <div className="steg-home-buttons">
            <a className="steg-btn steg-btn-accent" href="/patterns/overview">
              Universal Resolver Matrix
            </a>
            <a className="steg-btn" href="/spec/">
              Prototype Specification
            </a>
            <a className="steg-btn" href="https://github.com/steg-eth">
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="steg-home-grid-wrap">
        <div className="steg-home-grid">
          {navigation.map((col) => (
            <div key={col.title} className="steg-home-grid-col">
              <div className="title">{col.title}</div>
              {col.links.map(([label, href]) => (
                <a key={href} className="vocs_Anchor steg-home-link" href={href}>
                  {label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
