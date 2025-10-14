import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import eventsData from "@/data/events.json"

export function generateStaticParams() {
  return eventsData.designers.map((designer) => ({
    id: designer.id,
  }))
}

export default function DesignerDetailPage({ params }: { params: { id: string } }) {
  const designer = eventsData.designers.find((d) => d.id === params.id)

  if (!designer) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          {/* Back Button */}
          <Link href="/show">
            <Button variant="ghost" className="mb-8 -ml-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
          </Link>

          {/* Designer Profile */}
          <div className="grid grid-cols-2 gap-4 md:8 mb-12">
            {/* Image */}
            <div className="">
              <Card className="overflow-hidden p-0">
                <div className="relative aspect-[3/4] bg-muted">
                  <Image src={designer.image || "/placeholder-designer.jpg"} alt={designer.name} fill className="object-cover" />
                </div>
              </Card>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-top mx-auto">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">{designer.name}</h1>

              <div className="space-y-6">
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Biography
                  </h2>
                  <p className="text-lg leading-relaxed">{designer.bio}</p>
                </div>
              </div> 
            </div>
          </div>
          <div className="px-6 md:px-8 py-10">
            <h2 className="text-md font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Collection Concept
            </h2>
            <p className="text-lg leading-relaxed">{designer.collectionConcept}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
