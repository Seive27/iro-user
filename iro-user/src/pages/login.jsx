import { useState } from "react";
import { 
  Mail, 
  Lock, 
  ArrowRight, 
  PawPrint, 
  ShieldCheck, 
  ChevronLeft 
} from "lucide-react";

export default function Login() {
  const [focused, setFocused] = useState("");
  const [form, setForm] = useState({ email: "", password: "" });

  return (
    <div className="w-full min-h-screen bg-slate-50 body selection:bg-blue-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;700&display=swap');
        .display { font-family: 'Playfair Display', serif; }
        .body { font-family: 'DM Sans', sans-serif; }
        .glass { background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(14px); border: 1px solid rgba(255, 255, 255, 0.5); }
        .auth-bg { background: radial-gradient(circle at 0% 0%, rgba(59,130,246,0.1) 0%, transparent 40%), radial-gradient(circle at 100% 100%, rgba(14,165,233,0.1) 0%, transparent 40%); }
      `}</style>

      <div className="auth-bg min-h-screen flex flex-col items-center justify-center p-6">
        {/* Back to Home Link */}
        <a href="/" className="mb-8 flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors text-sm font-bold uppercase tracking-widest">
          <ChevronLeft size={16} /> Back to Home
        </a>

        <div className="w-full max-w-[480px]">
          <div className="glass p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-blue-100/50 border border-white relative overflow-hidden">
            
            {/* Branding */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-3xl shadow-lg shadow-blue-200 mb-6 transform -rotate-6">
                <PawPrint className="text-white w-8 h-8" />
              </div>
              <h1 className="display text-4xl font-bold text-slate-900 mb-2">Welcome Back</h1>
              <p className="text-slate-500 text-sm">Please enter your details to continue your adoption journey.</p>
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                <div className="relative">
                  <Mail className={`absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${focused === 'email' ? 'text-blue-600' : 'text-slate-300'}`} />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused("")}
                    className={`w-full pl-14 pr-6 py-4 rounded-2xl bg-white border-2 transition-all outline-none text-sm ${focused === 'email' ? 'border-blue-600 ring-4 ring-blue-50' : 'border-slate-100'}`}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Password</label>
                  <button type="button" className="text-[10px] font-bold text-blue-600 uppercase tracking-tighter hover:underline">Forgot Password?</button>
                </div>
                <div className="relative">
                  <Lock className={`absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${focused === 'pass' ? 'text-blue-600' : 'text-slate-300'}`} />
                  <input
                    type="password"
                    placeholder="••••••••"
                    onFocus={() => setFocused("pass")}
                    onBlur={() => setFocused("")}
                    className={`w-full pl-14 pr-6 py-4 rounded-2xl bg-white border-2 transition-all outline-none text-sm ${focused === 'pass' ? 'border-blue-600 ring-4 ring-blue-50' : 'border-slate-100'}`}
                  />
                </div>
              </div>

              <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-sm shadow-xl hover:bg-blue-600 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 mt-4">
                Sign In <ArrowRight size={16} />
              </button>
            </form>

            <div className="mt-10 pt-8 border-t border-slate-100 text-center">
              <p className="text-slate-500 text-sm">
                Don't have an account?{" "}
                <a href="/signup" className="text-blue-600 font-bold hover:underline">Create an account</a>
              </p>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-8 flex items-center justify-center gap-2 text-slate-400">
            <ShieldCheck size={14} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Secure Adoption Portal</span>
          </div>
        </div>
      </div>
    </div>
  );
}