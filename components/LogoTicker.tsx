"use client";

import { SyntheticEvent } from "react";

const ALL_LOGOS: string[] = [
  "/images/logos/Alive_Studios_transparent.png",
  "/images/logos/Bevri.png",
  "/images/logos/Diamond_Braces_transparent.png",
  "/images/logos/Exploro_transparent-1.png",
  "/images/logos/F-Redhair-orange-face-MASTER-v2-6a2bcfde-5f8d-44b2-9f90-c75b4beb2deb-1.png",
  "/images/logos/Faceco_transparent.png",
  "/images/logos/Fuse.png",
  "/images/logos/GoldenState_blue_transparent.png",
  "/images/logos/ImageOrthodontics_transparent.png",
  "/images/logos/Impress_transparent.png",
  "/images/logos/Kids_Choice.-DE.US_.png",
  "/images/logos/MattoNouto_.png",
  "/images/logos/Maxikash.-SA.MX_.png",
  "/images/logos/Menlo_Tavern.png",
  "/images/logos/Novikov_Beverly_Hills.-RE.US_.png",
  "/images/logos/Pasternak__restaurant.png",
  "/images/logos/ProMen_Construction_transparent.png",
  "/images/logos/Sacramento.png",
  "/images/logos/Smiley-Dental-Orthodontics.png",
  "/images/logos/WestCoastDental.png",
  "/images/logos/admire-dental.png",
  "/images/logos/afc.png",
  "/images/logos/la_maison_ani.png",
  "/images/logos/newo-sign-blue-logo-FINAL-1.png",
  "/images/logos/smartGlass.png",
  "/images/logos/smile.png",
  "/images/logos/snowline.png",
  "/images/logos/swiftNet.png",
  "/images/logos/tamba.png",
  "/images/logos/topSpirulina.png",
  "/images/logos/z3.png",
];

const third = Math.ceil(ALL_LOGOS.length / 3);
const ROW_1 = ALL_LOGOS.slice(0, third);
const ROW_2 = ALL_LOGOS.slice(third, third * 2);
const ROW_3 = ALL_LOGOS.slice(third * 2);

function TickerCard({ src }: { src: string }) {
  return (
    <div className="flex-shrink-0">
      <div className="w-[180px] h-[72px] rounded-2xl bg-white flex items-center justify-center px-4">
        <img
          src={src}
          alt=""
          className="max-w-full max-h-[40px] object-contain"
          onError={(e: SyntheticEvent<HTMLImageElement>) => {
            const parent = e.currentTarget.parentElement?.parentElement;
            if (parent) parent.style.display = "none";
          }}
        />
      </div>
    </div>
  );
}

function TickerRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  return (
    <div className="ticker-container overflow-hidden mb-4">
      <div
        className={`ticker-track ${reverse ? "ticker-track--reverse" : ""}`}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="ticker-inner flex gap-4"
            aria-hidden={copy === 1}
          >
            {items.map((src, i) => (
              <TickerCard key={`${copy}-${i}`} src={src} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LogoTicker() {
  return (
    <div className="bg-white rounded-[20px] py-12 md:py-16 overflow-hidden">
      <div className="max-w-[1376px] mx-auto px-4 md:px-8 mb-10">
        <h2 className="text-center">Trusted by Businesses Nationwide</h2>
      </div>
      <div>
        <TickerRow items={ROW_1} />
        <TickerRow items={ROW_2} reverse />
        <TickerRow items={ROW_3} />
      </div>
    </div>
  );
}
