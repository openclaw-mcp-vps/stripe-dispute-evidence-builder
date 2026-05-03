export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Stripe Dispute Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Win Chargebacks on{" "}
          <span className="text-[#58a6ff]">Autopilot</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your Stripe account, select a dispute, and get a professionally formatted evidence package — complete with timelines, transaction history, and AI-crafted rebuttal letters — ready to submit in minutes.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Winning Disputes — $19/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">No credit card required to connect. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        {[
          { icon: "⚡", title: "Instant Analysis", desc: "Pulls all relevant Stripe data automatically" },
          { icon: "📄", title: "PDF Evidence Bundle", desc: "Download a court-ready package in one click" },
          { icon: "🤖", title: "AI Rebuttal Letter", desc: "Compelling narrative tailored to dispute reason" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-sm text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-xs font-bold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$19</div>
          <div className="text-sm text-[#8b949e] mb-6">per month · unlimited disputes</div>
          <ul className="text-left space-y-2 mb-8 text-sm">
            {[
              "Stripe OAuth integration",
              "Unlimited dispute evidence packages",
              "AI-generated rebuttal letters",
              "PDF + ZIP download",
              "Transaction timeline builder",
              "Email delivery to Stripe"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it connect to Stripe?",
              a: "You authorize via Stripe OAuth. We read dispute and charge data to build your evidence package — we never store your secret keys."
            },
            {
              q: "What types of disputes does it support?",
              a: "All Stripe dispute reason codes: fraudulent, unrecognized, duplicate, product not received, product unacceptable, subscription canceled, and more."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel from your billing portal with one click. No questions asked, no lock-in."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#484f58]">
        © {new Date().getFullYear()} Dispute Evidence Builder. Not affiliated with Stripe, Inc.
      </footer>
    </main>
  )
}
