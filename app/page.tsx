export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f2ea] text-neutral-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#f9cbb8,_transparent_60%)]" />
        <div className="absolute -top-40 -left-24 h-[520px] w-[520px] rounded-full bg-[#ffb98a]/70 blur-3xl animate-float-slow" />
        <div className="absolute -bottom-48 -right-24 h-[520px] w-[520px] rounded-full bg-[#f6a27a]/70 blur-3xl animate-drift" />
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(120deg,rgba(17,17,17,0.08)_0,rgba(17,17,17,0.08)_2px,transparent_2px,transparent_14px)] animate-scan" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div className="relative mx-auto flex h-[320px] w-[320px] items-center justify-center sm:h-[380px] sm:w-[380px]">
            <div className="absolute inset-0 rounded-3xl bg-red-500 shadow-[0_30px_120px_rgba(255,0,0,0.35)]" />
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-2xl border border-black/10 bg-white/60 backdrop-blur animate-float" />
            <div className="absolute -left-8 -bottom-10 h-12 w-28 rounded-full border border-black/10 bg-white/70 backdrop-blur animate-drift" />
            <div className="absolute bottom-8 left-8 h-3 w-3 rounded-full bg-white/90 shadow" />
            <div className="absolute top-10 right-12 h-2 w-16 rounded-full bg-white/90 shadow" />
            <div className="absolute inset-6 rounded-2xl border border-white/30" />
          </div>

          <div className="space-y-6 lg:pl-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs uppercase tracking-[0.3em]">
              Slide 01
            </div>
            <h1 className="font-display text-[40px] leading-[1.05] tracking-tight text-neutral-900 sm:text-[48px]">
              Produto em destaque
            </h1>
            <p className="text-[32px] leading-[1.2] text-neutral-700">
              Uma nova silhueta para transformar o seu dia.
            </p>
            <button
              type="button"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-neutral-900 px-6 py-3 text-sm uppercase tracking-[0.2em] text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-neutral-800"
            >
              Explorar colecao <span className="text-lg">→</span>
            </button>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-4 text-sm text-neutral-600">
          <div className="h-[2px] w-16 bg-neutral-900" />
          <div className="h-[2px] w-10 bg-neutral-400" />
          <div className="h-[2px] w-6 bg-neutral-300" />
          <span className="ml-auto text-xs uppercase tracking-[0.2em]">
            Full screen slider
          </span>
        </div>
      </div>
    </main>
  );
}
