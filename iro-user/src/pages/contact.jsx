import { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  CreditCard,
  Building2,
  Heart,
  Send,
  CheckCircle2,
  Copy,
  ChevronRight,
  PawPrint,
  MessageSquare,
  ExternalLink,
} from "lucide-react";

/* ─────────────────────────────────────────────
   LAYOUT COMPONENTS (Matching Home.jsx)
───────────────────────────────────────────── */
function Container({ children, className = "" }) {
  return (
    <div className={`w-full max-w-7xl mx-auto px-6 lg:px-16 ${className}`}>
      {children}
    </div>
  );
}

function Section({ children, className = "", id }) {
  return (
    <section id={id} className={`transition-all duration-1000 ease-out ${className}`}>
      {children}
    </section>
  );
}

/* ─────────────────────────────────────────
   COPY BUTTON (Refined Style)
───────────────────────────────────────── */
function CopyButton({ text, label }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all border ${
        copied 
          ? "bg-emerald-50 border-emerald-200 text-emerald-600" 
          : "bg-blue-50 border-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white"
      }`}
    >
      {copied ? <CheckCircle2 size={12} /> : <Copy size={12} />}
      {copied ? "Copied!" : label || "Copy"}
    </button>
  );
}

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    const mailtoLink = `mailto:ironrescue@gmail.com?subject=${encodeURIComponent(form.subject || "Message from " + form.name)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.open(mailtoLink, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const DONATION_CHANNELS = [
    {
      id: "gcash",
      icon: Phone,
      label: "GCash",
      color: "text-blue-600",
      bg: "bg-blue-50",
      value: "0927 062 1080",
      copyValue: "09270621080",
      detail: "Instant transfer via GCash",
    },
    {
      id: "paypal",
      icon: CreditCard,
      label: "PayPal",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      value: "ironrescue@gmail.com",
      copyValue: "ironrescue@gmail.com",
      detail: "For international donors",
    },
    {
      id: "bank",
      icon: Building2,
      label: "China Bank",
      color: "text-rose-600",
      bg: "bg-rose-50",
      value: "1468 0000 8004",
      copyValue: "146800008004",
      detail: "Annalyn Aizpuru · Checking Account",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 body selection:bg-blue-100 selection:text-blue-700">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
        .display { font-family: 'Playfair Display', serif; }
        .body { font-family: 'DM Sans', sans-serif; }
        .hero-bg { background: radial-gradient(ellipse at 75% 15%, rgba(147,197,253,0.25) 0%, transparent 60%), #f8fafc; }
        .glass { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.5); }
      `}</style>

      {/* ── HERO SECTION ── */}
      <div className="hero-bg pt-32 pb-16">
        <Container className="text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-8 border border-blue-200">
            <MessageSquare className="w-3.5 h-3.5" /> Get in Touch
          </div>
          <h1 className="display text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-[1.1]">
            Help us give cats <br />
            <span className="italic text-blue-600">a second chance.</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Have a question, want to adopt, or donate? Reach us directly—we’d love to hear from you.
          </p>
        </Container>
      </div>

      <Container className="pb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Contact & Donation */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <h2 className="display text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Mail className="text-blue-600 w-6 h-6" /> Direct Contact
              </h2>
              
              {/* Email Card */}
              <div className="glass p-6 rounded-[2rem] flex items-center gap-5 border border-white shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-100">
                  <Mail className="text-white w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Email Us</p>
                  <p className="font-bold text-slate-900 truncate">ironrescue@gmail.com</p>
                </div>
                <CopyButton text="ironrescue@gmail.com" />
              </div>

              {/* TikTok Card */}
              <div className="glass p-6 rounded-[2rem] flex items-center gap-5 border border-white shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🎵</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">TikTok</p>
                  <p className="font-bold text-slate-900">@ocattery22</p>
                </div>
                <a href="https://www.tiktok.com/@ocattery22" target="_blank" rel="noopener" className="p-2 bg-slate-100 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Support Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <Heart className="text-rose-500 w-6 h-6" fill="currentColor" />
                <h2 className="display text-2xl font-bold text-slate-900">Support Our Cats</h2>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Your donation covers food, medicine, and vet fees. Every peso helps a cat heal.
              </p>

              <div className="space-y-4">
                {DONATION_CHANNELS.map((ch) => (
                  <div key={ch.id} className="glass p-6 rounded-[2rem] border border-white shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${ch.bg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <ch.icon className={`${ch.color} w-5 h-5`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{ch.label}</p>
                        <p className="font-bold text-slate-900 text-lg mb-1">{ch.value}</p>
                        <p className="text-xs text-slate-500 mb-4">{ch.detail}</p>
                        <CopyButton text={ch.copyValue} label={`Copy ${ch.label}`} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="lg:col-span-7 lg:sticky lg:top-10">
            <div className="glass p-10 md:p-12 rounded-[3rem] border border-white shadow-xl shadow-blue-100/50">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                  <Send className="text-white w-5 h-5" />
                </div>
                <div>
                  <h3 className="display text-2xl font-bold text-slate-900">Send a Message</h3>
                  <p className="text-slate-400 text-sm">We'll reply via email as soon as possible.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Name *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused("")}
                    placeholder="Juan Dela Cruz"
                    className={`w-full px-6 py-4 rounded-2xl bg-white border-2 transition-all outline-none text-sm ${focused === 'name' ? 'border-blue-600' : 'border-slate-100'}`}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused("")}
                    placeholder="you@example.com"
                    className={`w-full px-6 py-4 rounded-2xl bg-white border-2 transition-all outline-none text-sm ${focused === 'email' ? 'border-blue-600' : 'border-slate-100'}`}
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  onFocus={() => setFocused("subject")}
                  onBlur={() => setFocused("")}
                  placeholder="e.g. Adoption inquiry, Volunteering..."
                  className={`w-full px-6 py-4 rounded-2xl bg-white border-2 transition-all outline-none text-sm ${focused === 'subject' ? 'border-blue-600' : 'border-slate-100'}`}
                />
              </div>

              <div className="space-y-2 mb-10">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Message *</label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused("")}
                  placeholder="How can we help?"
                  className={`w-full px-6 py-4 rounded-2xl bg-white border-2 transition-all outline-none text-sm resize-none ${focused === 'message' ? 'border-blue-600' : 'border-slate-100'}`}
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={!form.name || !form.email || !form.message}
                className={`w-full py-5 rounded-[1.5rem] font-bold text-sm shadow-xl transition-all flex items-center justify-center gap-3 ${
                  submitted 
                    ? "bg-emerald-600 text-white" 
                    : !form.name || !form.email || !form.message
                      ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] shadow-blue-200"
                }`}
              >
                {submitted ? (
                  <><CheckCircle2 className="w-5 h-5" /> Message Sent!</>
                ) : (
                  <><Send className="w-4 h-4" /> Send Message</>
                )}
              </button>

              {/* In-kind note inside the form card for better flow */}
              <div className="mt-10 p-6 bg-blue-50/50 rounded-3xl border border-blue-100">
                <h4 className="text-xs font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <PawPrint className="w-3.5 h-3.5" /> We also accept in-kind donations
                </h4>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {["Cat food", "Medicine", "Hygiene supplies", "Volunteer time"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] font-bold text-blue-600 uppercase tracking-tight">
                      <div className="w-1 h-1 bg-blue-400 rounded-full" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}