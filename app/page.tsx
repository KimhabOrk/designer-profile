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
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Dates */}
            <Card className="p-8 lg:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-serif text-2xl font-semibold">Upcoming Events</h2>
              </div>
              <div className="space-y-6">
                {events.map((event) => (
                  <div key={event.id} className="border-l-2 border-primary/20 pl-6">
                    <h3 className="font-semibold text-lg mb-2">{event.name}</h3>
                    <p className="text-muted-foreground text-sm mb-1">
                      {event.dateRange || `${event.date}, ${event.time}`}
                    </p>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Location */}
            <Card className="p-8 lg:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-serif text-2xl font-semibold">Location</h2>
              </div>
              <p className="text-lg font-medium mb-6">{festival.location}</p>
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
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Fashion Show */}
            <Link href="/show" className="group">
              <div className="overflow-hidden h-full transition-all hover:shadow-xl">
                <div className="relative aspect-[4/5] bg-muted rounded-xl">
                  <Image
                    src="https://ik.imagekit.io/digiv3rse/assets/student-works/Fashion/bb6b72cc3bb79a94dbd0f6273063078e.jpg"
                    alt="Fashion Show"
                    fill
                    className="object-cover transition-transform group-hover:scale-105 rounded-xl"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto p-8 text-white" />
                  <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 max-w-md text-center">
                    <h2 className="font-serif text-4xl font-bold mb-3">Fashion Show</h2>
                    <Button variant="default" className="group-hover:gap-3 transition-all">
                      View Designers
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Link>

            {/* Fashion Exhibition */}
            <Link href="/exhibition" className="group">
              <div className="overflow-hidden h-full transition-all hover:shadow-xl">
                <div className="relative aspect-[4/5] bg-muted rounded-xl">
                  <Image
                    src="https://ik.imagekit.io/digiv3rse/assets/img/exhibition.png"
                    alt="Fashion Exhibition"
                    fill
                    className="object-cover transition-transform group-hover:scale-105 rounded-xl"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto p-8 text-white" />
                  <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 max-w-md text-center">
                    <h2 className="font-serif text-4xl font-bold mb-3">Fashion Exhibition</h2>
                    <Button variant="default" className="group-hover:gap-3 transition-all">
                      View Exhibition
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
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
