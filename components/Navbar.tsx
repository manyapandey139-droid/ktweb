import Logo from "@/components/Logo";
import NavActions from "@/components/NavActions";
import { categories } from "@/data/categories";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  ...categories.map((c) => ({ href: `/${c.slug}`, label: c.navLabel })),
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur border-b border-purple-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        <Logo />

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium tracking-wide text-ink/80 hover:text-purple-700 transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <NavActions navLinks={navLinks} />
      </div>
    </header>
  );
}
