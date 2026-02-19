interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
}: TestimonialCardProps) {
  return (
    <div className="neo-card flex flex-col h-full">
      <p className="text-text-body text-[15px] leading-[1.7] mb-8 flex-1">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="border-t border-border-line pt-5">
        <p className="text-[14px] font-medium text-text-primary">{name}</p>
        <p className="text-text-muted text-[13px]">
          {role}, {company}
        </p>
      </div>
    </div>
  );
}
