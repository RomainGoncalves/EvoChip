import { Mail, MapPin } from "lucide-react";

export const CompanyInfo = () => (
  <div className="flex flex-col sm:flex-row gap-4">
    <a
      href="mailto:contact@evochip.ai"
      className="flex items-start gap-4 p-4 bg-slate-800/40 border border-slate-700/50 rounded-xl flex-1 hover:border-cyan-500/30 transition-colors group"
    >
      <Mail className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
      <div>
        <p className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-0.5">
          Email
        </p>
        <p className="text-white text-sm font-medium group-hover:text-cyan-400 transition-colors">
          contact@evochip.ai
        </p>
      </div>
    </a>

    <div className="flex items-start gap-4 p-4 bg-slate-800/40 border border-slate-700/50 rounded-xl flex-1">
      <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
      <div>
        <p className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-0.5">
          Headquarters
        </p>
        <p className="text-white text-sm font-medium">
          32932 Pacific Coast Hwy
        </p>
        <p className="text-slate-400 text-xs">Dana Point, CA</p>
      </div>
    </div>
  </div>
);
