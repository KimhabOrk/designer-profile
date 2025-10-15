import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import eventsData from "@/data/events.json"

export default function HomePage() {
  const { festival, events } = eventsData

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance mb-6">
            {festival.name}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Celebrating innovation, creativity, and the future of Cambodian fashion
          </p>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="font-serif text-2xl font-semibold">Event Date</h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Dates */}
            <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 md:p-6 bg-muted">
              <div className="space-y-6">
                  <div className="border-l-2 border-primary/20 pl-6">
                    <h3 className="font-semibold text-lg mb-2">Fashion Show</h3>
                    <p className="text-muted-foreground text-sm mb-1">
                      31st, October, 2025
                    </p>
                    <p className="text-muted-foreground text-sm mb-1">
                      Start: <span className="font-semibold">7:00 PM</span>
                    </p>
                  </div>
              </div>
            </Card>
            <Card className="p-4 md:p-6 bg-muted">
              <div className="space-y-6">
                  <div className="border-l-2 border-primary/20 pl-6">
                    <h3 className="font-semibold text-lg mb-2">Fashion Exhibition</h3>
                    <p className="text-muted-foreground text-sm mb-1">
                      From 31st, October to 2nd, November, 2025
                    </p>
                  </div>
              </div>
            </Card>
            </div>
            {/* Location */}
            <Card className="p-4 md:p-6 bg-muted">
              <h2 className="font-serif text-2xl font-semibold mb-6">Location</h2>
              <Link href="https://maps.app.goo.gl/nn8tRwJVq3tqJG7NA" className="flex justify-start">
                <div className="flex items-center mx-auto justify-center gap-2">
                  <div className="h-5 w-5 md:h-10 md:w-10 rounded-lg">
                    <Image src="/googleMap.png" className="object-cover animate-bounce" />
                  </div>
                  <p className="text-xl font-medium mb-6">{festival.location}</p>
                </div>
              </Link>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                <Image
                  src={festival.mapImage || "/placeholder.svg"}
                  alt="The Factory location map"
                  fill
                  className="object-cover"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Categories Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12">
            {/* Fashion Show */}
            <Link href="/show" className="group">
              <div className="overflow-hidden h-full transition-all hover:shadow-xl">
                <div className="relative aspect-[9/16] bg-muted rounded-xl">
                  <Image
                    src="https://ik.imagekit.io/digiv3rse/assets/student-works/Fashion/bb6b72cc3bb79a94dbd0f6273063078e.jpg"
                    alt="Fashion Show"
                    fill
                    className="object-cover transition-transform group-hover:scale-105 rounded-xl"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto p-4 md:p-6 text-white">
                    <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-4 md:p-6 max-w-md text-center">
                      <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">Fashion Show</h2>
                      <Button variant="default" className="group-hover:gap-3 transition-all">
                        View Designers
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Fashion Exhibition */}
            <Link href="/exhibition" className="group">
              <div className="overflow-hidden h-full transition-all hover:shadow-xl">
                <div className="relative aspect-[9/16] bg-muted rounded-xl">
                  <Image
                    src="https://ik.imagekit.io/digiv3rse/assets/img/exhibition.png"
                    alt="Fashion Exhibition"
                    fill
                    className="object-cover transition-transform group-hover:scale-105 rounded-xl"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto p-4 md:p-6 text-white">
                    <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-4 md:p-6 max-w-md text-center">
                      <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">Fashion Exhibition</h2>
                      <Button variant="default" className="group-hover:gap-3 transition-all">
                        View Exhibition
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer 
      <footer className="py-12 px-4 md:px-6 lg:px-8 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Phnom Penh Design Festival. All rights reserved.</p>
        </div>
      </footer>
      */}
    </div>
  )
}
