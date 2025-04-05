"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar, MapPin } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-red-900/70 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Japanese racing events from the 80s"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">ICONIC EVENTS</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            The races, shows, and competitions that defined Japanese automotive culture in the 1980s
          </p>
        </div>
      </section>

      {/* Major Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Major Racing Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard
              name="Japanese Touring Car Championship"
              type="Circuit Racing"
              image="/placeholder.svg?height=400&width=600"
              years="1980-1989"
              location="Various circuits across Japan"
              description="The premier touring car championship in Japan showcased production-based race cars from Japanese manufacturers. The series evolved with Group A regulations in 1985, setting the stage for legendary battles between Nissan, Toyota, and Mazda."
            />

            <EventCard
              name="Fuji Grand Champion Series"
              type="Formula Racing"
              image="/placeholder.svg?height=400&width=600"
              years="1979-1989"
              location="Fuji Speedway, Japan"
              description="Japan's premier formula racing series featured powerful single-seaters and served as a proving ground for Japanese drivers with Formula 1 aspirations. The series helped establish Japan's reputation for developing world-class racing talent."
            />

            <EventCard
              name="All Japan Rally Championship"
              type="Rally"
              image="/placeholder.svg?height=400&width=600"
              years="1980-1989"
              location="Various locations across Japan"
              description="This challenging rally series saw the development of legendary cars like the Toyota Celica GT-Four. The technical courses through Japan's mountainous terrain pushed cars and drivers to their limits and helped develop AWD technology."
            />

            <EventCard
              name="Tsukuba Circuit Time Attack"
              type="Time Attack"
              image="/placeholder.svg?height=400&width=600"
              years="1983-1989"
              location="Tsukuba Circuit, Japan"
              description="The birthplace of time attack racing, where tuners and drivers competed to set the fastest single lap time. This format became the perfect showcase for Japan's growing tuning culture and aftermarket industry."
            />

            <EventCard
              name="Suzuka 1000km"
              type="Endurance Racing"
              image="/placeholder.svg?height=400&width=600"
              years="1980-1989"
              location="Suzuka Circuit, Japan"
              description="Japan's most prestigious endurance race challenged both man and machine. The event saw fierce competition between Japanese manufacturers and helped develop technologies that would later be applied to production cars."
            />

            <EventCard
              name="Tokyo Auto Salon"
              type="Auto Show"
              image="/placeholder.svg?height=400&width=600"
              years="1983-1989"
              location="Makuhari Messe, Chiba, Japan"
              description="Originally called the 'Tokyo Exciting Car Show,' this event became the showcase for Japan's growing aftermarket and tuning culture. The show helped establish trends that would influence automotive styling worldwide."
            />
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-16 bg-gradient-to-r from-orange-900 to-red-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Event: Group A Touring Car Racing</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Group A Racing"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">The Golden Era of Touring Cars</h3>
              <p className="mb-6 text-gray-200">
                When the FIA introduced Group A regulations in 1983, it created the perfect platform for Japanese
                manufacturers to showcase their engineering prowess. The category, which required cars to be based on
                production models with at least 5,000 units produced, aligned perfectly with Japan efficient,
                high-revving engines and lightweight designs.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Nissan Skyline</h4>
                  <p className="text-sm text-gray-300">
                    The Skyline GT-R dominated Group A racing, earning the nickname Godzilla for its unstoppable
                    performance.
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Toyota Supra</h4>
                  <p className="text-sm text-gray-300">
                    Toyota flagship sports car proved its worth on the track with multiple victories in the late 80s.
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Mazda RX-7</h4>
                  <p className="text-sm text-gray-300">
                    The rotary-powered RX-7 showcased Mazda unique engineering approach with competitive performances.
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Global Impact</h4>
                  <p className="text-sm text-gray-300">
                    Japanese success in Group A racing changed perceptions of Japanese cars worldwide.
                  </p>
                </div>
              </div>

              <Button className="bg-orange-600 hover:bg-orange-700">
                Group A Racing History
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Moments Timeline</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500 to-red-500"></div>

            <div className="grid grid-cols-1 gap-12">
              <TimelineEvent
                year="1982"
                title="First Japanese Formula 1 Grand Prix"
                description="The Formula 1 World Championship held its first race in Japan at Fuji Speedway, marking Japan's arrival on the global motorsport stage."
                image="/placeholder.svg?height=300&width=500"
                align="right"
              />

              <TimelineEvent
                year="1983"
                title="Introduction of Group A Regulations"
                description="The FIA's new Group A regulations created the perfect category for Japanese manufacturers to showcase their production-based race cars."
                image="/placeholder.svg?height=300&width=500"
                align="left"
              />

              <TimelineEvent
                year="1985"
                title="Birth of D1 Drifting"
                description="Informal drifting competitions began to be organized, laying the groundwork for what would eventually become the D1 Grand Prix series."
                image="/placeholder.svg?height=300&width=500"
                align="right"
              />

              <TimelineEvent
                year="1987"
                title="Drift Pluspy Video Release"
                description="Keiichi Tsuchiya's legendary 'Drift Pluspy' video was released, bringing drifting to mainstream attention and inspiring a generation."
                image="/placeholder.svg?height=300&width=500"
                align="left"
              />

              <TimelineEvent
                year="1989"
                title="Skyline GT-R Dominance Begins"
                description="The R32 Skyline GT-R began its legendary racing career, setting the stage for complete dominance of touring car racing in the early 1990s."
                image="/placeholder.svg?height=300&width=500"
                align="right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Auto Shows */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Influential Auto Shows</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/50 p-6 rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Tokyo Motor Show"
                width={600}
                height={400}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Tokyo Motor Show</h3>
              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <Calendar className="h-4 w-4" />
                <span>Biennial event throughout the 1980s</span>
              </div>
              <p className="text-gray-300 mb-4">
                The Tokyo Motor Show was where Japanese manufacturers unveiled their most ambitious concept cars and
                production models. The 1980s shows featured futuristic designs and technologies that would define the
                decade, including early digital dashboards, four-wheel steering, and turbocharged engines.
              </p>
              <p className="text-gray-300 mb-4">
                Notable unveilings included the Mazda RX-7 FC (1985), the Honda Prelude with 4WS (1987), and numerous
                concept cars that pushed the boundaries of automotive design.
              </p>
              <Button variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500/10">
                Tokyo Motor Show History
              </Button>
            </div>

            <div className="bg-black/50 p-6 rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Tokyo Auto Salon"
                width={600}
                height={400}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Tokyo Auto Salon</h3>
              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <Calendar className="h-4 w-4" />
                <span>Annual event starting in 1983</span>
              </div>
              <p className="text-gray-300 mb-4">
                Originally called the Tokyo Exciting Car Show, this event became the showcase for Japan growing
                aftermarket and tuning culture. Unlike the more corporate Tokyo Motor Show, the Auto Salon featured
                modified cars, aftermarket parts, and custom builds that represented the cutting edge of street
                performance.
              </p>
              <p className="text-gray-300 mb-4">
                The show helped establish trends that would influence automotive styling worldwide and provided a
                platform for tuning companies like HKS, Trust (GReddy), and Blitz to showcase their latest products.
              </p>
              <Button variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500/10">
                Auto Salon Evolution
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-900 to-red-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Explore More Events</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Discover our comprehensive archives of races, shows, and competitions that shaped Japanese automotive
            culture in the 1980s.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-900 hover:bg-gray-200">
              Browse Event Archives
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View Event Calendar
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

interface EventCardProps {
  name: string
  type: string
  image: string
  years: string
  location: string
  description: string
}

function EventCard({ name, type, image, years, location, description }: EventCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden group hover:shadow-lg hover:shadow-orange-500/20 transition-all">
      <div className="h-48 relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs px-2 py-1 rounded">{type}</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{name}</h3>
        <div className="flex items-center gap-2 text-gray-400 mb-2">
          <Calendar className="h-4 w-4" />
          <span>{years}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400 mb-4">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <Link
          href={`/events/${name.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-orange-400 hover:text-orange-300 inline-flex items-center text-sm"
        >
          View details <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

interface TimelineEventProps {
  year: string
  title: string
  description: string
  image: string
  align: "left" | "right"
}

function TimelineEvent({ year, title, description, image, align }: TimelineEventProps) {
  return (
    <div className="relative">
      <div className="flex items-center justify-center">
        <div className="bg-orange-500 text-white font-bold py-2 px-6 rounded-full z-10 mb-6">{year}</div>
      </div>
      <div
        className={`bg-white/5 p-6 rounded-lg text-white ${
          align === "left" ? "mr-0 md:mr-[50%] md:w-[45%] md:ml-[5%]" : "ml-0 md:ml-[50%] md:w-[45%]"
        } relative`}
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/3">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={500}
              height={300}
              className="rounded-lg w-full h-32 object-cover"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-300 text-sm">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

