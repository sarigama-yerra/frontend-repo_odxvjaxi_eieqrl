import { Menu, Mail, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 to-fuchsia-500 grid place-items-center text-white">
              <Mail size={18} />
            </div>
            <span className="font-semibold text-gray-900">FluxMail</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-gray-700 hover:text-gray-900 text-sm">Sign in</a>
            <a href="#cta" className="inline-flex items-center gap-1 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-md px-3 py-2 transition-colors">
              <Sparkles size={16} />
              Get started
            </a>
          </div>

          <button className="md:hidden p-2 rounded-md hover:bg-black/5" onClick={() => setOpen(v => !v)} aria-label="Open menu">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in-10">
            <div className="flex flex-col gap-2 text-sm">
              <a href="#features" className="px-2 py-2 rounded hover:bg-black/5">Features</a>
              <a href="#pricing" className="px-2 py-2 rounded hover:bg:black/5">Pricing</a>
              <a href="#faq" className="px-2 py-2 rounded hover:bg-black/5">FAQ</a>
              <a href="#cta" className="mt-2 px-2 py-2 rounded-md bg-gray-900 text-white text-center">Get started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
