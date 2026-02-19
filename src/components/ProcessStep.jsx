export default function ProcessStep({ number, title, description }) {
  return (
    <div className="flex gap-5 items-start">
      <div className="flex-shrink-0 w-9 h-9 rounded-full border border-border-line flex items-center justify-center">
        <span className="font-heading text-[14px] font-normal text-text-muted">{number}</span>
      </div>
      <div>
        <h3 className="text-lg font-medium mb-1.5">{title}</h3>
        <p className="text-text-body text-[15px] leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
