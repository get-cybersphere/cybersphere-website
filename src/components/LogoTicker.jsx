const allLogos = Object.values(
  import.meta.glob('../assets/images/*.png', { eager: true, import: 'default' })
)

const third = Math.ceil(allLogos.length / 3)
const ROW_1 = allLogos.slice(0, third)
const ROW_2 = allLogos.slice(third, third * 2)
const ROW_3 = allLogos.slice(third * 2)

function TickerCard({ src }) {
  return (
    <div className="flex-shrink-0">
      <div className="w-[180px] h-[72px] rounded-2xl bg-white flex items-center justify-center px-4">
        <img
          src={src}
          alt=""
          className="max-w-full max-h-[40px] object-contain"
          onError={(e) => { e.currentTarget.parentElement.parentElement.style.display = 'none' }}
        />
      </div>
    </div>
  )
}

function TickerRow({ items, reverse = false }) {
  return (
    <div className="ticker-container overflow-hidden mb-4">
      <div className={`ticker-track ${reverse ? 'ticker-track--reverse' : ''}`}>
        {[0, 1].map(copy => (
          <div key={copy} className="ticker-inner flex gap-4" aria-hidden={copy === 1}>
            {items.map((src, i) => (
              <TickerCard key={`${copy}-${i}`} src={src} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
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
  )
}
