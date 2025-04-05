"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from "lucide-react"

export default function CarsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/70 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Japanese sports cars from the 80s"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">ICONIC CARS</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Explore the legendary vehicles that defined Japanese automotive excellence in the 1980s
          </p>
        </div>
      </section>

      {/* Car Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="sports" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto bg-gray-900/50">
              <TabsTrigger value="sports" className="py-3 data-[state=active]:bg-cyan-600">
                Sports Cars
              </TabsTrigger>
              <TabsTrigger value="gt" className="py-3 data-[state=active]:bg-cyan-600">
                GT Cars
              </TabsTrigger>
              <TabsTrigger value="rally" className="py-3 data-[state=active]:bg-cyan-600">
                Rally Cars
              </TabsTrigger>
              <TabsTrigger value="kei" className="py-3 data-[state=active]:bg-cyan-600">
                Kei Cars
              </TabsTrigger>
            </TabsList>
            <TabsContent value="sports" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <CarCard
                  name="Toyota AE86 Trueno"
                  year="1983-1987"
                  image="/placeholder.svg?height=400&width=600"
                  specs={["Engine: 1.6L 4A-GE", "Power: 128 HP", "Weight: 940 kg", "0-60 mph: 8.3 seconds"]}
                  description="The legendary Toyota AE86, immortalized in the manga and anime 'Initial D,' became the symbol of Japan's drifting culture."
                />

                <CarCard
                  name="Mazda RX-7 FC"
                  year="1985-1992"
                  image="/placeholder.svg?height=400&width=600"
                  specs={["Engine: 1.3L 13B Rotary", "Power: 146-200 HP", "Weight: 1,250 kg", "0-60 mph: 6.8 seconds"]}
                  description="The second generation RX-7 featured a distinctive pop-up headlight design and Mazda's legendary rotary engine."
                />

                <CarCard
                  name="Nissan 300ZX Z31"
                  year="1983-1989"
                  image="/placeholder.svg?height=400&width=600"
                  specs={["Engine: 3.0L V6 Turbo", "Power: 200-228 HP", "Weight: 1,470 kg", "0-60 mph: 7.1 seconds"]}
                  description="The Z31 300ZX represented Nissan's shift toward luxury performance, combining comfort with impressive speed."
                />

                <CarCard
                  name="Honda CRX"
                  year="1983-1991"
                  image="/placeholder.svg?height=400&width=600"
                  specs={["Engine: 1.5L-1.6L I4", "Power: 76-150 HP", "Weight: 820 kg", "0-60 mph: 8.5 seconds"]}
                  description="The Honda CRX was a lightweight, fuel-efficient sports car that proved performance didn't require massive power."
                />

                <CarCard
                  name="Mitsubishi Starion"
                  year="1982-1989"
                  image="/placeholder.svg?height=400&width=600"
                  specs={["Engine: 2.6L Turbo I4", "Power: 150-197 HP", "Weight: 1,410 kg", "0-60 mph: 7.5 seconds"]}
                  description="The Starion was Mitsubishi's first modern performance car, featuring aggressive styling and advanced technology."
                />

                <CarCard
                  name="Toyota MR2 AW11"
                  year="1984-1989"
                  image="/placeholder.svg?height=400&width=600"
                  specs={["Engine: 1.6L 4A-GE", "Power: 112-145 HP", "Weight: 950 kg", "0-60 mph: 8.0 seconds"]}
                  description="Toyota's mid-engine sports car offered supercar-like handling at an affordable price, earning the nickname 'poor man's Ferrari'."
                />
              </div>
            </TabsContent>

            <TabsContent value="gt" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <CarCard
                  name="Nissan Skyline R31"
                  year="1985-1989"
                  image="/placeholder.svg?height=400&width=600"
                  specs={["Engine: 2.0L RB20DET", "Power: 210 HP", "Weight: 1,400 kg", "0-60 mph: 6.5 seconds"]}
                  description="The R31 Skyline introduced the iconic RB engine series and set the stage for the legendary GT-R models to come."
                />

                <CarCard
                  name="Toyota Supra A70"
                  year="1986-1993"
                  image="/placeholder.svg?height=400&width=600"
                  specs={[
                    "Engine: 3.0L 7M-GTE Turbo",
                    "Power: 230-276 HP",
                    "Weight: 1,590 kg",
                    "0-60 mph: 6.0 seconds",
                  ]}
                  description="The third-generation Supra established itself as a serious performance GT car with its powerful inline-six engine."
                />

                <CarCard
                  name="Mazda Cosmo"
                  year="1981-1989"
                  image="/placeholder.svg?height=400&width=600"
                  specs={["Engine: 1.3L 13B Rotary", "Power: 135-185 HP", "Weight: 1,280 kg", "0-60 mph: 8.7 seconds"]}
                  description="Mazda's luxury GT featured the unique rotary engine and was one of the first cars with a built-in navigation system."
                />
              </div>
            </TabsContent>

            <TabsContent value="rally" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <CarCard
                  name="Toyota Celica GT-Four"
                  year="1986-1989"
                  image="/placeholder.svg?height=400&width=600"
                  specs={["Engine: 2.0L 3S-GTE Turbo", "Power: 190 HP", "Weight: 1,310 kg", "0-60 mph: 7.0 seconds"]}
                  description="The first generation of Toyota's legendary all-wheel drive rally car that would go on to dominate WRC in the early 90s."
                />

                <CarCard
                  name="Mitsubishi Starion 4WD"
                  year="1987-1989"
                  image="/placeholder.svg?height=400&width=600"
                  specs={["Engine: 2.0L Turbo", "Power: 197 HP", "Weight: 1,470 kg", "0-60 mph: 6.8 seconds"]}
                  description="A rare rally-focused variant of the Starion that helped develop Mitsubishi's AWD technology for future Evolutions."
                />

                <CarCard
                  name="Subaru Leone RX Turbo"
                  year="1983-1989"
                  image="/placeholder.svg?height=400&width=600"
                  specs={["Engine: 1.8L Turbo", "Power: 115 HP", "Weight: 1,060 kg", "0-60 mph: 8.9 seconds"]}
                  description="The predecessor to the Impreza, this AWD turbocharged Leone laid the groundwork for Subaru's rally success."
                />
              </div>
            </TabsContent>

            <TabsContent value="kei" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <CarCard
                  name="Honda City Turbo II"
                  year="1983-1986"
                  image="/placeholder.svg?height=400&width=600"
                  specs={["Engine: 1.2L Turbo", "Power: 110 HP", "Weight: 680 kg", "0-60 mph: 8.6 seconds"]}
                  description="The 'Bulldog' was a tiny but mighty turbocharged city car that often came with a folding Motocompo scooter in the trunk."
                />

                <CarCard
                  name="Suzuki Alto Works"
                  year="1987-1988"
                  image="/placeholder.svg?height=400&width=600"
                  specs={["Engine: 550cc Turbo", "Power: 64 HP", "Weight: 580 kg", "0-60 mph: 9.1 seconds"]}
                  description="This tiny turbocharged kei car packed a surprising punch and became a cult classic in Japanese motorsport."
                />

                <CarCard
                  name="Daihatsu Mira Turbo TR-XX"
                  year="1985-1990"
                  image="/placeholder.svg?height=400&width=600"
                  specs={["Engine: 550cc Turbo", "Power: 64 HP", "Weight: 560 kg", "0-60 mph: 9.0 seconds"]}
                  description="The Mira Turbo was a tiny powerhouse that demonstrated how fun small displacement engines could be."
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Car Spotlight */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Spotlight: Nissan Skyline R32 GT-R</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Nissan Skyline R32 GT-R"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">The Legend Begins: 1989</h3>
              <p className="mb-6 text-gray-200">
                Though released at the very end of the decade, the R32 GT-R represents the culmination of 80s Japanese
                engineering prowess. Nicknamed Godzilla, this technological tour de force dominated motorsports so
                thoroughly that it was eventually banned from Australian touring car racing.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">ATTESA E-TS AWD</h4>
                  <p className="text-sm text-gray-300">
                    Advanced all-wheel drive system that could send up to 50% of power to the front wheels when needed.
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Super HICAS</h4>
                  <p className="text-sm text-gray-300">
                    Four-wheel steering system that improved both high-speed stability and low-speed maneuverability.
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">RB26DETT Engine</h4>
                  <p className="text-sm text-gray-300">
                    Twin-turbocharged 2.6L inline-six officially rated at 276 HP due to the Gentlemans Agreement.
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Racing Heritage</h4>
                  <p className="text-sm text-gray-300">
                    Won all 29 races in the Japanese Touring Car Championship and dominated Group A racing worldwide.
                  </p>
                </div>
              </div>

              <Button className="bg-cyan-600 hover:bg-cyan-700">
                Full R32 GT-R History
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

interface CarCardProps {
  name: string
  year: string
  image: string
  specs: string[]
  description: string
}

function CarCard({ name, year, image, specs, description }: CarCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden group hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
      <div className="h-48 relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">{year}</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{name}</h3>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Specifications:</h4>
          <ul className="text-sm space-y-1">
            {specs.map((spec, index) => (
              <li key={index} className="text-gray-300">
                {spec}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <Link
          href={`/cars/${name.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-cyan-400 hover:text-cyan-300 inline-flex items-center text-sm"
        >
          View details <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

