import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import eventsData from "@/data/events.json"

export default function FashionExhibitionPage() {
  const { garments } = eventsData

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
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Fashion Exhibition</h1>
          </div>

          {/* Garments Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8">
            {garments.map((garment) => (
              <Link key={garment.id} href={`/exhibition/garment/${garment.id}`} className="group">
                <div className="transition-all hover:shadow-xl overflow-hidden p-0">
                  <div className="relative aspect-[9/16] bg-muted rounded-xl">
                    <Image
                      src={garment.images[0] || "/placeholder-designer.jpg"}
                      alt={garment.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105 rounded-xl"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-sm md:text-lg text-muted-foreground mb-1">{garment.designerName}</p>
                    <h3 className="text-lg md:text-xl group-hover:text-primary transition-colors">{garment.name}</h3>
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
