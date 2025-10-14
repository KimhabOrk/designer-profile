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
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-lg font-serif font-semibold tracking-tight">
            PPDF
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors hover:text-foreground/80 ${
                  pathname === link.href ? "text-foreground font-medium" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-lg tracking-wide transition-colors ${
                        pathname === link.href ? "text-foreground font-medium" : "text-muted-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
