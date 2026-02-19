export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="neo-card text-center flex flex-col items-center">
      <div className="w-12 h-12 rounded-2xl bg-blue-light flex items-center justify-center mb-5">
        <Icon className="w-5 h-5 text-blue" strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-text-body text-[15px] leading-relaxed">{description}</p>
    </div>
  )
}
