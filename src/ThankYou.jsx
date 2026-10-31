import { ArrowRight, CheckCheck, Clock3, Headset } from "lucide-react";

export default function ThankYou() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "917698985800";
  const whatsappMessage = "Hi, I submitted a booking request for a GPS vehicle tracker. Please help me with the next steps.";
  const whatsapp = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 ring-8 ring-emerald-50">
        <CheckCheck size={38} strokeWidth={1.8} />
      </div>
      <p className="mt-8 text-xs font-bold uppercase tracking-[.22em] text-emerald-700">Booking confirmed</p>
      <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-navy sm:text-5xl">Thank you for choosing Truck Sathi.</h1>
      <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">Your GPS tracker request has been received. Our team will contact you soon to confirm the details.</p>

      <div className="mt-9 rounded-2xl border border-blue-100 bg-blue-50/70 p-5 text-left sm:p-6">
        <div className="flex gap-4">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand shadow-sm"><Clock3 size={21} /></span>
          <div>
            <h2 className="font-bold text-navy">What happens next?</h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">A Truck Sathi team member will call you using the number you provided and help with the next steps.</p>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="flex min-h-44 flex-col items-start rounded-2xl border border-blue-100 bg-blue-50/60 p-5 text-left">
          <span className="flex size-11 items-center justify-center rounded-xl bg-white text-brand shadow-sm"><Headset size={21} /></span>
          <span className="mt-4 font-bold text-navy">Our team will contact you</span>
          <span className="mt-1 text-sm leading-5 text-slate-600">We’ll call using the number you provided to confirm your request and guide you through the next steps.</span>
        </div>
        <a href={whatsapp} target="_blank" rel="noreferrer" className="group flex min-h-44 flex-col items-start rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 text-left transition hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50 hover:shadow-lg hover:shadow-emerald-900/5">
          <span className="flex size-11 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm"><WhatsAppIcon /></span>
          <span className="mt-4 font-bold text-navy">Need help now?</span>
          <span className="mt-1 text-sm leading-5 text-slate-600">Message our team on WhatsApp.</span>
          <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-bold text-emerald-700">Chat with us <ArrowRight size={15} /></span>
        </a>
      </div>
      <p className="mt-7 inline-flex items-center gap-2 text-xs font-medium text-slate-500"><Headset size={15} /> We’re here to help you get on the road.</p>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .15 5.34.15 11.92c0 2.1.55 4.15 1.6 5.96L.05 24l6.27-1.64a11.9 11.9 0 0 0 5.76 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.19-1.24-6.19-3.49-8.43ZM12.09 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.98.99-3.63-.24-.37a9.84 9.84 0 0 1-1.51-5.27c0-5.46 4.45-9.9 9.91-9.9a9.83 9.83 0 0 1 7.01 2.9 9.83 9.83 0 0 1 2.9 7.01c0 5.46-4.45 9.9-9.93 9.9Zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}
