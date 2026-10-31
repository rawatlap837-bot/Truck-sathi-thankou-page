import { createRoot } from "react-dom/client";
import ThankYou from "./ThankYou";
import "./index.css";

const homeHref = import.meta.env.VITE_TRUCK_SATHI_URL || "/";
document.title = "Booking Received | Truck Sathi";

createRoot(document.getElementById("root")).render(
    <main className="min-h-screen bg-linear-to-br from-blue-50 via-white to-sky-50 px-4 py-3 sm:px-6 sm:py-8">
        <section className="mx-auto mt-0 max-w-3xl overflow-hidden rounded-4xl border border-white bg-white/90 p-5 shadow-2xl shadow-blue-900/10 sm:mt-2 sm:p-9 md:p-12">
            <div className="mb-8 h-1.5 bg-linear-to-r from-sky-300 via-brand to-blue-700" />
            <ThankYou homeHref={homeHref} />
        </section>
        <p className="mt-6 text-center text-xs text-slate-400">Truck Sathi · Here for every turn of your journey</p>
    </main>
);
