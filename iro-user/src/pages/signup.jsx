import { useState } from "react";
import { 
  User, 
  Mail, 
  Lock, 
  ArrowRight, 
  Heart, 
  ShieldCheck, 
  ChevronLeft 
} from "lucide-react";

export default function Signup() {
  const [focused, setFocused] = useState("");

  return (
    <div className="w-full min-h-screen bg-slate-50 body selection:bg-blue-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@400;500;700&display=swap');
        .display { font-family: 'Playfair Display', serif; }
        .body { font-family: 'DM Sans', sans-serif; }
        .glass { background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(14px); border: 1px solid rgba(255, 255, 255, 0.5); }
        .auth-bg { background: radial-gradient(circle at 100% 0%, rgba(244,63,94,0.05) 0%, transparent 40%), radial-gradient(circle at 0% 100%, rgba(59,130,246,0.1) 0%, transparent 40%); }
      `}</style>

      <div className="auth-bg min-h-screen flex flex-col items-center justify-center p-6 py-12">
        <a href="/" className="mb-8 flex items-center gap-2 text-slate-400 hover:text-rose-500 transition-colors text-sm font-bold uppercase tracking-widest">
          <ChevronLeft size={16} /> Back to Home
        </a>

        <div className="w-full max-w-[520px]">
          <div className="glass p-8 md:p-12 rounded-[3.5rem] shadow-2xl shadow-rose-100/30 border border-white">
            
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-500 rounded-3xl shadow-lg shadow-rose-200 mb-6 transform rotate-6">
                <Heart className="text-white w-8 h-8" fill="currentColor" />
              </div>
              <h1 className="display text-4xl font-bold text-slate-900 mb-2">Join the Family</h1>
              <p className="text-slate-500 text-sm">Create an account to start your adoption application.</p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                <div className="relative">
                  <User className={`absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${focused === 'name' ? 'text-rose-500' : 'text-slate-300'}`} />
                  <input
                    type="text"
                    placeholder="Juan Dela Cruz"
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused("")}
                    className={`w-full pl-14 pr-6 py-4 rounded-2xl bg-white border-2 transition-all outline-none text-sm ${focused === 'name' ? 'border-rose-500 ring-4 ring-rose-50' : 'border-slate-100'}`}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                <div className="relative">
                  <Mail className={`absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${focused === 'email' ? 'text-rose-500' : 'text-slate-300'}`} />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused("")}
                    className={`w-full pl-14 pr-6 py-4 rounded-2xl bg-white border-2 transition-all outline-none text-sm ${focused === 'email' ? 'border-rose-500 ring-4 ring-rose-50' : 'border-slate-100'}`}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Create Password</label>
                <div className="relative">
                  <Lock className={`absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${focused === 'pass' ? 'text-rose-500' : 'text-slate-300'}`} />
                  <input
                    type="password"
                    placeholder="At least 8 characters"
                    onFocus={() => setFocused("pass")}
                    onBlur={() => setFocused("")}
                    className={`w-full pl-14 pr-6 py-4 rounded-2xl bg-white border-2 transition-all outline-none text-sm ${focused === 'pass' ? 'border-rose-500 ring-4 ring-rose-50' : 'border-slate-100'}`}
                  />
                </div>
              </div>

              <div className="bg-rose-50/50 p-4 rounded-2xl border border-rose-100/50 mb-2">
                <p className="text-[11px] text-rose-600 leading-relaxed font-medium">
                  By joining, you agree to our terms regarding animal welfare and responsible pet ownership.
                </p>
              </div>

              <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-sm shadow-xl hover:bg-rose-500 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                Create Account <ArrowRight size={16} />
              </button>
            </form>

            <div className="mt-10 pt-8 border-t border-slate-100 text-center">
              <p className="text-slate-500 text-sm">
                Already have an account?{" "}
                <a href="/login" className="text-rose-500 font-bold hover:underline">Sign In here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}