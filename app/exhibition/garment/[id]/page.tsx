import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import eventsData from "@/data/events.json"

export function generateStaticParams() {
  return eventsData.garments.map((garment) => ({
    id: garment.id,
  }))
}

export default function GarmentDetailPage({ params }: { params: { id: string } }) {
  const garment = eventsData.garments.find((g) => g.id === params.id)

  if (!garment) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Back Button */}
          <Link href="/exhibition">
            <Button variant="ghost" className="mb-8 -ml-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
          </Link>

          {/* Garment Details */}
          <div className="grid gap-8 lg:gap-12 mb-12">
                        {/* Info */}
            <div className="flex flex-col justify-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">{garment.name}</h1>

              {/* Designer Info */}
              <div className="mb-8">
                {garment.designerId ? (
                  <Link href={`/show/designer/${garment.designerId}`} className="flex items-center gap-4 group">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden bg-muted">
                      <Image
                        src={garment.designerImage || "/placeholder.svg"}
                        alt={garment.designerName}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Designer</p>
                      <p className="font-semibold group-hover:text-primary transition-colors">{garment.designerName}</p>
                    </div>
                  </Link>
                ) : (
                  <div className="flex items-center gap-4 group">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden bg-muted">
                      <Image
                        src={garment.designerImage || "/placeholder.svg"}
                        alt={garment.designerName}
                        fill
                       className="object-cover"
                     />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Designer</p>
                      <p className="font-semibold group-hover:text-primary transition-colors">{garment.designerName}</p>
                    </div>
                  </div>
                  )}
               </div>

              {/* Description */}
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  About This Piece
                </h2>
                <p className="text-lg leading-relaxed">{garment.description}</p>
              </div>
            </div>
            
            {/* Main Image */}
            <div>
              <Card className="mb-4 overflow-hidden p-0">
                <div className="relative aspect-[3/4] bg-muted">
                  <Image
                    src={garment.images[0] || "/placeholder.svg"}
                    alt={garment.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </Card>

              {/* Additional Images */}
              {garment.images && garment.images.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {garment.images.slice(1).map((image, index) => (
                  <Card key={index} className="overflow-hidden p-0">
                    <div className="relative aspect-[3/4] bg-muted">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${garment.name} detail ${index + 2}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Card>
                ))}
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
