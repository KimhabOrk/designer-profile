import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import eventsData from "@/data/events.json"

export default function FashionShowPage() {
  const { designers } = eventsData

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link href="/">
              <Button variant="ghost" className="mb-6 -ml-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Go Back
              </Button>
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl md:text-6xl font-bold mb-4">Fashion Show Designers</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Meet the visionary designers showcasing their collections on October 31st
            </p>
          </div>

          {/* Designers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {designers.map((designer) => (
              <Link key={designer.id} href={`/show/designer/${designer.id}`} className="group">
                <div className="transition-all hover:shadow-xl overflow-hidden p-0">
                  <div className="relative aspect-[3/4] bg-muted">
                    <Image
                      src={designer.image || "/placeholder.svg"}
                      alt={designer.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-serif text-xl font-semibold group-hover:text-primary transition-colors">
                      {designer.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
