"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navigation() {
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/show", label: "Fashion Show" },
    { href: "/exhibition", label: "Exhibition" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">

          {/* Desktop Navigation */}
          <div className="flex items-center justify-evenly gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors hover:text-foreground/90 ${
                  pathname === link.href ? "text-foreground font-medium" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
