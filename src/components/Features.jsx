import { Sparkles, Zap, Shield, LineChart } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'AI writing assistant',
    desc: 'Generate subject lines, body copy, and personalized intros in seconds.'
  },
  {
    icon: Zap,
    title: 'Automations',
    desc: 'Build journeys that react to behavior with clicks, opens, and purchases.'
  },
  {
    icon: Shield,
    title: 'Enterprise-grade security',
    desc: 'Custom domains, DMARC, SSO, and role-based access out of the box.'
  },
  {
    icon: LineChart,
    title: 'Deep analytics',
    desc: 'Real-time performance with cohort breakdowns and revenue attribution.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Everything you need to grow</h2>
          <p className="mt-4 text-gray-600">Powerful tools to design, send, and optimize campaigns at any scale.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-white grid place-items-center">
                <f.icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
