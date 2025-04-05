"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Trophy } from "lucide-react"

export default function RacersPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-pink-900/70 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Japanese racing drivers from the 80s"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">RACING LEGENDS</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            The drivers who pushed Japanese cars to their limits and defined an era of motorsport
          </p>
        </div>
      </section>

      {/* Featured Racers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Legendary Drivers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RacerCard
              name="Keiichi Tsuchiya"
              nickname="Drift King"
              image="/placeholder.svg?height=400&width=400"
              achievements={[
                "Pioneer of drifting techniques",
                "Japanese Touring Car Championship driver",
                "Le Mans 24 Hours participant",
                "Host of Best Motoring",
              ]}
              description="Known as the 'Drift King,' Tsuchiya pioneered drifting techniques that revolutionized motorsport and influenced car culture worldwide. His mastery of the Toyota AE86 made both car and driver legendary."
            />

            <RacerCard
              name="Kunimitsu Takahashi"
              nickname="Father of Drifting"
              image="/placeholder.svg?height=400&width=400"
              achievements={[
                "Multiple All Japan Touring Car Championship titles",
                "Former motorcycle Grand Prix racer",
                "Influenced Keiichi Tsuchiya's driving style",
                "Le Mans 24 Hours participant",
              ]}
              description="A pioneer who transitioned from motorcycle racing to cars, Takahashi's driving style laid the groundwork for modern drifting techniques. His cornering style, deliberately breaking traction, inspired a generation of drivers."
            />

            <RacerCard
              name="Satoru Nakajima"
              nickname="Japan's F1 Pioneer"
              image="/placeholder.svg?height=400&width=400"
              achievements={[
                "First full-time Japanese Formula 1 driver",
                "Five-time Japanese F2 Champion",
                "Scored points in Formula 1 with Lotus",
                "Mentored future F1 drivers",
              ]}
              description="Japan's first full-time Formula 1 driver who paved the way for future generations of Japanese racers on the international stage. His success with Lotus and Tyrrell proved Japanese drivers could compete at the highest level."
            />

            <RacerCard
              name="Kazuyoshi Hoshino"
              nickname="Fastest Man in Japan"
              image="/placeholder.svg?height=400&width=400"
              achievements={[
                "Multiple Japan Formula 2000 championships",
                "Formula 1 driver for Heros Racing",
                "Founded Impul racing team",
                "Developed Nissan race cars",
              ]}
              description="Known as the 'Fastest Man in Japan,' Hoshino was renowned for his aggressive driving style and rain racing skills. His Impul racing team became one of the most successful in Japanese motorsport history."
            />

            <RacerCard
              name="Masahiro Hasemi"
              nickname="The Unsung Hero"
              image="/placeholder.svg?height=400&width=400"
              achievements={[
                "Fastest lap at 1976 Japanese Grand Prix",
                "Multiple touring car championships",
                "Developed Nissan's racing program",
                "Fuji Grand Champion Series winner",
              ]}
              description="A versatile driver who excelled in touring cars and briefly in Formula 1. Hasemi's development work with Nissan helped create some of the most dominant race cars of the 1980s, including the Skyline."
            />

            <RacerCard
              name="Yoshimi Katayama"
              nickname="Rotary Master"
              image="/placeholder.svg?height=400&width=400"
              achievements={[
                "Mazda factory driver",
                "Pioneered rotary engine racing",
                "Multiple class wins in endurance racing",
                "Developed the Mazda RX-7 race car",
              ]}
              description="Katayama was instrumental in developing Mazda's rotary-powered race cars throughout the 1980s. His technical feedback and driving skill helped perfect the unique engine technology that would eventually win Le Mans."
            />
          </div>
        </div>
      </section>

      {/* Racing Teams */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Iconic Racing Teams</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black/30 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-red-600 h-12 w-12 flex items-center justify-center rounded-full">
                  <Trophy className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Nissan Motorsports (NISMO)</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Nissan"s factory racing division dominated touring car championships throughout the 1980s. Their
                development of the Skyline GT-R racing program culminated in the R32 "Godzilla" that would go on to win
                every single race in the 1990 Japanese Touring Car Championship.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-white/10 px-3 py-1 rounded text-sm">Group A</span>
                <span className="bg-white/10 px-3 py-1 rounded text-sm">JTCC</span>
                <span className="bg-white/10 px-3 py-1 rounded text-sm">Skyline</span>
                <span className="bg-white/10 px-3 py-1 rounded text-sm">Silvia</span>
              </div>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Team History
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="bg-black/30 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-600 h-12 w-12 flex items-center justify-center rounded-full">
                  <Trophy className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Toyota Team Tom's</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Tachi Oiwa Motor Sport (TOM'S) became Toyota's premier racing team in the 1980s. They were instrumental
                in developing Toyota's sports cars and racing technologies, including the Supra and Celica GT-Four rally
                car.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-white/10 px-3 py-1 rounded text-sm">JTCC</span>
                <span className="bg-white/10 px-3 py-1 rounded text-sm">Group A</span>
                <span className="bg-white/10 px-3 py-1 rounded text-sm">Supra</span>
                <span className="bg-white/10 px-3 py-1 rounded text-sm">Celica</span>
              </div>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Team History
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="bg-black/30 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 h-12 w-12 flex items-center justify-center rounded-full">
                  <Trophy className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Mazda Mazdaspeed</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Mazda's racing division focused on developing their unique rotary engine technology throughout the
                1980s. Their persistence with the unconventional engine would eventually lead to the only Japanese
                victory at Le Mans in 1991 with the 787B.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-white/10 px-3 py-1 rounded text-sm">Rotary</span>
                <span className="bg-white/10 px-3 py-1 rounded text-sm">Endurance</span>
                <span className="bg-white/10 px-3 py-1 rounded text-sm">RX-7</span>
                <span className="bg-white/10 px-3 py-1 rounded text-sm">IMSA</span>
              </div>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Team History
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="bg-black/30 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-yellow-600 h-12 w-12 flex items-center justify-center rounded-full">
                  <Trophy className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Honda Racing Corporation (HRC)</h3>
              </div>
              <p className="text-gray-300 mb-4">
                While primarily focused on motorcycle racing in the 1980s, Honda's racing division began developing
                their Formula 1 program during this decade. Their engineering excellence would lead to multiple F1
                championships in the following years.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-white/10 px-3 py-1 rounded text-sm">Formula 1</span>
                <span className="bg-white/10 px-3 py-1 rounded text-sm">VTEC</span>
                <span className="bg-white/10 px-3 py-1 rounded text-sm">NSX Development</span>
                <span className="bg-white/10 px-3 py-1 rounded text-sm">Engineering</span>
              </div>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Team History
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Racing Moments */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Defining Moments</h2>

          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">1983: The Birth of Group A Racing</h3>
                <p className="text-gray-300 mb-6">
                  When the FIA introduced Group A regulations in 1983, Japanese manufacturers saw an opportunity to
                  showcase their engineering prowess. This new category, which required cars to be based on production
                  models, perfectly suited Japanese companies with their efficient, high-revving engines and lightweight
                  designs.
                </p>
                <p className="text-gray-300">
                  Nissan, Toyota, and Mazda quickly developed competitive Group A cars, setting the stage for Japanese
                  dominance in touring car racing throughout the decade and into the 1990s.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Group A Racing"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Tsuchiya Drifting"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">1987: Drift Pluspy - Drifting Goes Mainstream</h3>
                <p className="text-gray-300 mb-6">
                  In 1987, Keiichi Tsuchiya released "Drift Pluspy," a video showcasing his incredible drifting
                  techniques on mountain roads. This video, featuring the now-legendary Toyota AE86, catapulted drifting
                  into the mainstream and inspired a generation of drivers.
                </p>
                <p className="text-gray-300">
                  The video's influence cannot be overstated - it led to organized drifting competitions, influenced the
                  manga and anime "Initial D," and established Japanese car culture's unique identity on the global
                  stage.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">1989: The Skyline GT-R Returns</h3>
                <p className="text-gray-300 mb-6">
                  After a 16-year hiatus, Nissan revived the legendary GT-R nameplate with the R32 Skyline GT-R in 1989.
                  This technological tour de force featured a twin-turbocharged engine, advanced all-wheel drive, and
                  four-wheel steering.
                </p>
                <p className="text-gray-300">
                  The R32 GT-R would go on to dominate motorsports so thoroughly that it earned the nickname "Godzilla"
                  and was eventually banned from Australian touring car racing for being too dominant. Its legacy
                  represents the pinnacle of 1980s Japanese engineering and the culmination of a decade of technological
                  advancement.
                </p>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Nissan Skyline R32 GT-R"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Discover More Racing History</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Explore our comprehensive archives of races, drivers, and the technological innovations that defined an era
            of motorsport excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-200">
              Browse Race Archives
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View Racing Timeline
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

interface RacerCardProps {
  name: string
  nickname: string
  image: string
  achievements: string[]
  description: string
}

function RacerCard({ name, nickname, image, achievements, description }: RacerCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden group hover:shadow-lg hover:shadow-purple-500/20 transition-all">
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={400}
          height={400}
          className="w-full h-64 object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-sm text-gray-300">{nickname}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Achievements:</h4>
          <ul className="text-sm space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-gray-300 flex items-start">
                <span className="text-purple-400 mr-2">•</span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <Link
          href={`/racers/${name.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-purple-400 hover:text-purple-300 inline-flex items-center text-sm"
        >
          Full profile <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

