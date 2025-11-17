export default function CTA() {
  return (
    <section id="cta" className="relative py-20 bg-gradient-to-br from-cyan-50 via-fuchsia-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white/70 backdrop-blur border border-white/60 shadow-inner p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Launch your next campaign today</h3>
          <p className="mt-3 text-gray-600">Join thousands of teams who send smarter emails with FluxMail.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <input type="email" required placeholder="Work email" className="w-full sm:w-80 rounded-md border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400" />
            <button className="rounded-md bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-gray-800 transition-colors">Get early access</button>
          </form>
          <p className="mt-3 text-xs text-gray-500">By signing up, you agree to our Terms and Privacy Policy.</p>
        </div>
      </div>
    </section>
  );
}
