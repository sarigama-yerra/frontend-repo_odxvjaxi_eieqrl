import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900"
          >
            Supercharge your email with a 3D-powered inbox
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-6 text-lg sm:text-xl text-gray-600"
          >
            FluxMail helps you create, automate, and personalize campaigns with AI—wrapped in a stunning, interactive experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#cta" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-gray-800 transition-colors">Start free</a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md bg-white/70 backdrop-blur border border-gray-200 text-gray-900 px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors">See features</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-6 text-sm text-gray-500"
          >
            No credit card required • Cancel anytime
          </motion.div>
        </div>
      </div>
    </section>
  )
}
