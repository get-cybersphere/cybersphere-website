export default function StatCard({ value, label }) {
  return (
    <div className="neo-card text-center">
      <div className="font-heading text-4xl md:text-5xl font-light text-text-primary mb-2">{value}</div>
      <div className="text-text-muted text-[14px]">{label}</div>
    </div>
  )
}
