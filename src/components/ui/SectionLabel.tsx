import { cn } from "@/lib/utils";

interface SectionLabelProps {
  number: string;
  label: string;
  className?: string;
}

export function SectionLabel({ number, label, className }: SectionLabelProps) {
  return (
    <div className={cn("section-label flex items-center gap-3 mb-4", className)}>
      <span className="text-accent opacity-60">{number}</span>
      <span className="w-8 h-px bg-accent/30" />
      <span>{label}</span>
    </div>
  );
}
