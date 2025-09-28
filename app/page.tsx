export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-surface">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand-100/60 via-transparent to-brand-200/40"
        aria-hidden
      />
      <section className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-24 text-right sm:px-10 sm:py-32">
        <div className="flex flex-col gap-6">
          <span className="inline-flex items-center justify-end gap-2 text-[0.9rem] font-semibold text-brand-dark tracking-wide-rtl">
            מאמן כושר דיגיטלי • תכנית מותאמת אישית
          </span>
          <h1 className="text-4xl font-extrabold text-body tracking-tight-rtl leading-snug-rtl sm:text-5xl">
            מצטרפים ל-YuviFit ומגלים אימון מותאם לקצב החיים שלכם
          </h1>
          <p className="max-w-3xl self-end text-lg text-body/80 leading-relaxed-rtl text-balance-rtl sm:text-xl">
            בנו שגרה שמחזיקה לאורך זמן עם מעקב התקדמות חכם, תזכורות המדברות בעברית, ותכנים מקצועיים שמותאמים בדיוק למטרות הבריאות שלכם.
          </p>
        </div>
        <div className="flex flex-col items-stretch justify-end gap-3 sm:flex-row sm:gap-4">
          <button className="rounded-full bg-brand px-10 py-3 text-[1.05rem] font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark">
            להתחיל עכשיו
          </button>
          <button className="rounded-full border border-brand/50 px-10 py-3 text-[1.05rem] font-semibold text-brand-dark transition hover:border-brand-dark hover:bg-brand-100/60">
            לצפות בתכנית לדוגמה
          </button>
        </div>
        <div className="grid gap-6 text-right sm:grid-cols-3">
          <div className="rounded-3xl bg-white/70 p-5 shadow-sm backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-wide-rtl text-brand-dark">ליווי מתמשך</p>
            <p className="mt-2 text-2xl font-bold text-body">מעל 2000 שעות אימון מודרכות</p>
          </div>
          <div className="rounded-3xl bg-white/70 p-5 shadow-sm backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-wide-rtl text-brand-dark">רב-פלטפורמי</p>
            <p className="mt-2 text-2xl font-bold text-body">אפליקציה, מחשב ואפילו ווטסאפ</p>
          </div>
          <div className="rounded-3xl bg-white/70 p-5 shadow-sm backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-wide-rtl text-brand-dark">קהילה תומכת</p>
            <p className="mt-2 text-2xl font-bold text-body">מאות מתאמנים פעילים ומשתפים פעולה</p>
          </div>
        </div>
      </section>
    </main>
  );
}
