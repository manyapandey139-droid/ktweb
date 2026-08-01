import WhatsAppIcon from "@/components/WhatsAppIcon";

type Variant = "primary" | "outline" | "whatsapp";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-purple-700 text-white hover:bg-purple-800 border border-purple-700",
  outline:
    "bg-transparent text-purple-700 border border-purple-700 hover:bg-purple-50",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1fb959] border border-[#25D366]",
};

export default function WhatsAppButton({
  href,
  children,
  variant = "primary",
  showIcon = true,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  showIcon?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-medium tracking-widest uppercase transition-colors duration-200 ${variantClasses[variant]} ${className}`}
    >
      {showIcon && <WhatsAppIcon className="w-4 h-4" />}
      {children}
    </a>
  );
}
