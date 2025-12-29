"use client";

import Image from "next/image";
import { useState } from "react";

const slides = [
  {
    id: 0,
    label: "Slide 01",
    title: "Produto em destaque",
    subtitle: "Uma nova silhueta para transformar o seu dia.",
    cta: "Explorar colecao",
  },
  {
    id: 1,
    label: "Slide 02",
    title: "Linha urbana",
    subtitle: "Leveza e ritmo para a rotina em movimento.",
    cta: "Ver detalhes",
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-[#f7f2ea] text-neutral-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#f9cbb8,_transparent_60%)]" />
        <div className="absolute -top-40 -left-24 h-[520px] w-[520px] rounded-full bg-[#ffb98a]/70 blur-3xl animate-float-slow" />
        <div className="absolute -bottom-48 -right-24 h-[520px] w-[520px] rounded-full bg-[#f6a27a]/70 blur-3xl animate-drift" />
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(120deg,rgba(17,17,17,0.08)_0,rgba(17,17,17,0.08)_2px,transparent_2px,transparent_14px)] animate-scan" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl min-h-[520px] flex-col px-6 py-16">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <section
                key={slide.id}
                className="grid min-h-full w-full flex-shrink-0 items-center lg:grid-cols-[1.05fr_1fr]"
              >
                <div className="relative mx-auto flex h-[320px] w-[320px] items-center justify-center sm:h-[380px] sm:w-[380px]">
                  <div className="absolute inset-0 rounded-3xl bg-red-500 shadow-[0_30px_50px_rgba(255,0,0,0.35)]" />
                  <div className="absolute -top-10 left-1/2 z-20 -translate-x-1/2 sm:w-[450px] -rotate-45">
                    <Image
                      src="/flor_01.png"
                      alt="Flor decorativa"
                      width={800}
                      height={800}
                      className="h-auto w-full drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)]"
                      priority={slide.id === 0}
                    />
                  </div>
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-2xl border border-black/10 bg-white/60 backdrop-blur animate-float" />
                  <div className="absolute -left-8 -bottom-10 h-12 w-28 rounded-full border border-black/10 bg-white/70 backdrop-blur animate-drift" />
                  <div className="absolute bottom-8 left-8 h-3 w-3 rounded-full bg-white/90 shadow" />
                  <div className="absolute top-10 right-12 h-2 w-16 rounded-full bg-white/90 shadow" />
                  <div className="absolute inset-6 rounded-2xl border border-white/30" />
                </div>

                <div className="space-y-6 lg:pl-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs uppercase tracking-[0.3em]">
                    {slide.label}
                  </div>
                  <h1 className="font-display text-[40px] leading-[1.05] tracking-tight text-neutral-900 sm:text-[48px]">
                    {slide.title}
                  </h1>
                  <p className="text-[32px] leading-[1.2] text-neutral-700">
                    {slide.subtitle}
                  </p>
                  <button
                    type="button"
                    className="mt-6 inline-flex items-center gap-3 rounded-full bg-neutral-900 px-6 py-3 text-sm uppercase tracking-[0.2em] text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-neutral-800"
                  >
                    {slide.cta} <span className="text-lg">→</span>
                  </button>
                </div>
              </section>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center gap-4 text-sm text-neutral-600">
          {slides.map((slide) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Ir para ${slide.label}`}
              onClick={() => setActiveSlide(slide.id)}
              className={`h-[2px] transition-all ${
                activeSlide === slide.id
                  ? "w-16 bg-neutral-900"
                  : "w-8 bg-neutral-400"
              }`}
            />
          ))}
          <span className="ml-auto text-xs uppercase tracking-[0.2em]">
            Full screen slider
          </span>
        </div>
      </div>
    </main>
  );
}
