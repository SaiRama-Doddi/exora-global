import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Our Products" },
  { href: "/services", label: "Services" },
  { href: "/global-reach", label: "Global Reach" },
  { href: "/contact", label: "Contact Us" },
];

const productLinks = [
  { href: "/products/makhana", label: "Makhana" },
  { href: "/products/soapnuts", label: "Soapnuts" },
  { href: "/products/organic-turmeric-powder", label: "Organic Turmeric" },
  { href: "/products/organic-chilli-powder", label: "Organic Chilli" },
  { href: "/products/organic-coconut-oil", label: "Coconut Oil" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Contact Bar */}
      <div className="border-b border-primary-foreground/20 bg-primary/90">
        <div className="container mx-auto px-4 py-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <h3 className="text-xl font-semibold">Get in Touch with Us</h3>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="mailto:info@exoraexports.com" className="flex items-center gap-2 text-sm hover:text-secondary">
                <Mail className="h-4 w-4" />
                info@exoraexports.com
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-2 text-sm hover:text-secondary">
                <Phone className="h-4 w-4" />
                +91 123 456 7890
              </a>
              <span className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4" />
                Export Lane, Mumbai, India
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Image
                src="/images/exora-logo.png"
                alt="EXORA Global"
                width={90}
                height={90}
                className="rounded-md"
              />
              <div>
                <span className="text-xl font-bold">EXORA GLOBAL</span>
{/*                 <span className="block text-xs text-primary-foreground/80">GLOBAL</span> */}
              </div>
            </Link>
            <p className="mb-4 text-sm text-primary-foreground/80">
              Your trusted partner in global trade. We connect businesses worldwide with premium
              quality products and reliable export services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/80 hover:text-secondary" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Our Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-secondary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Stay Updated</h4>
            <p className="mb-4 text-sm text-primary-foreground/80">
              Subscribe to our newsletter for the latest updates on products and services.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-md bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button
                type="submit"
                className="rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-4 lg:px-8">
          <p className="text-center text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} EXORA Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
