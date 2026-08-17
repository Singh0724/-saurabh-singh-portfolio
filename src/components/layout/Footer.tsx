import { CONTACT } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted">
            © {new Date().getFullYear()} {CONTACT.name}. Built with purpose.
          </div>
          <div className="text-xs font-mono text-faint">
            Next.js · TypeScript · Tailwind CSS · Framer Motion
          </div>
        </div>
      </div>
    </footer>
  );
}
