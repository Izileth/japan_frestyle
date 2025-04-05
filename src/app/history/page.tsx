"use client"


import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, BookOpen, Lightbulb, Wrench, TrendingUp } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 to-green-900/70 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Japanese automotive culture from the 80s"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">CULTURAL IMPACT</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            How Japanese automotive innovation in the 1980s shaped global car culture
          </p>
        </div>
      </section>

      {/* Cultural Aspects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="innovation" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto bg-gray-900/50">
              <TabsTrigger value="innovation" className="py-3 data-[state=active]:bg-emerald-600">
                Technological Innovation
              </TabsTrigger>
              <TabsTrigger value="design" className="py-3 data-[state=active]:bg-emerald-600">
                Design Philosophy
              </TabsTrigger>
              <TabsTrigger value="subculture" className="py-3 data-[state=active]:bg-emerald-600">
                Automotive Subcultures
              </TabsTrigger>
              <TabsTrigger value="media" className="py-3 data-[state=active]:bg-emerald-600">
                Media Influence
              </TabsTrigger>
            </TabsList>

            <TabsContent value="innovation" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Technological Revolution</h2>
                  <p className="text-gray-300 mb-4">
                    The 1980s marked a period of unprecedented technological innovation in the Japanese automotive
                    industry. Manufacturers invested heavily in research and development, introducing technologies that
                    would later become industry standards worldwide.
                  </p>
                  <p className="text-gray-300 mb-6">
                    This era saw the introduction of electronic fuel injection, turbocharging, all-wheel drive systems,
                    four-wheel steering, and advanced engine management computers. These innovations not only improved
                    performance but also enhanced reliability and efficiency.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center text-center">
                      <Lightbulb className="h-8 w-8 text-emerald-400 mb-2" />
                      <h3 className="font-semibold mb-1">VTEC</h3>
                      <p className="text-xs text-gray-400">
                        Hondas Variable Valve Timing and Lift Electronic Control system revolutionized engine
                        performance.
                      </p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center text-center">
                      <Lightbulb className="h-8 w-8 text-emerald-400 mb-2" />
                      <h3 className="font-semibold mb-1">HICAS</h3>
                      <p className="text-xs text-gray-400">
                        Nissans High Capacity Actively Controlled Steering introduced four-wheel steering to production
                        cars.
                      </p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center text-center">
                      <Lightbulb className="h-8 w-8 text-emerald-400 mb-2" />
                      <h3 className="font-semibold mb-1">ATTESA E-TS</h3>
                      <p className="text-xs text-gray-400">
                        Nissans advanced all-wheel drive system that could vary torque distribution in real-time.
                      </p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg flex flex-col items-center text-center">
                      <Lightbulb className="h-8 w-8 text-emerald-400 mb-2" />
                      <h3 className="font-semibold mb-1">Rotary Engine</h3>
                      <p className="text-xs text-gray-400">
                        Mazdas continued development of the Wankel rotary engine for high-performance applications.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Japanese automotive technology"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="design" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Japanese car design"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-xl"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl font-bold mb-6">Design Philosophy</h2>
                  <p className="text-gray-300 mb-4">
                    The 1980s saw Japanese automotive design evolve from purely functional to expressive and
                    distinctive. Designers began to develop a uniquely Japanese aesthetic that combined minimalism with
                    futuristic elements.
                  </p>
                  <p className="text-gray-300 mb-6">
                    Key design elements included pop-up headlights, angular origami styling, digital dashboards, and
                    an emphasis on aerodynamics. These design choices werent just stylistic—they reflected Japans
                    forward-thinking approach to automotive engineering.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Form Follows Function</h3>
                      <p className="text-sm text-gray-400">
                        Japanese designs prioritized aerodynamics and efficiency, resulting in sleek, purposeful shapes
                        that influenced global automotive design.
                      </p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Digital Futurism</h3>
                      <p className="text-sm text-gray-400">
                        The integration of digital displays and electronic controls reflected Japans leadership in
                        consumer electronics and vision of the future.
                      </p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Lightweight Philosophy</h3>
                      <p className="text-sm text-gray-400">
                        Japanese sports cars emphasized power-to-weight ratio over raw horsepower, creating nimble,
                        responsive vehicles that excelled on winding roads.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="subculture" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Automotive Subcultures</h2>
                  <p className="text-gray-300 mb-4">
                    The 1980s saw the birth of several influential automotive subcultures in Japan that would eventually
                    spread worldwide. These movements were often grassroots responses to Japans unique geography,
                    driving conditions, and car culture.
                  </p>
                  <p className="text-gray-300 mb-6">
                    From the mountain passes that birthed drifting to the expressways that hosted midnight racing, these
                    subcultures created their own aesthetics, modifications, and driving styles that continue to
                    influence enthusiasts today.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="bg-white/10 p-4 rounded-lg flex items-start">
                      <div className="bg-emerald-600 p-2 rounded mr-4 mt-1">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Drifting Culture</h3>
                        <p className="text-sm text-gray-400">
                          Born on the mountain passes of Japan, drifting evolved from a racing technique to a distinct
                          motorsport and cultural phenomenon that spread globally.
                        </p>
                      </div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg flex items-start">
                      <div className="bg-emerald-600 p-2 rounded mr-4 mt-1">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Bosozoku</h3>
                        <p className="text-sm text-gray-400">
                          Motorcycle and car clubs known for their highly modified vehicles with exaggerated styling
                          elements, creating a distinctive aesthetic that influenced car modification worldwide.
                        </p>
                      </div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg flex items-start">
                      <div className="bg-emerald-600 p-2 rounded mr-4 mt-1">
                        <TrendingUp className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Midnight Club</h3>
                        <p className="text-sm text-gray-400">
                          Elite street racing teams that competed on Tokyo expressways, pushing high-performance cars
                          to their limits and inspiring tuning culture globally.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Japanese car subcultures"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="media" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Japanese automotive media"
                    width={800}
                    height={600}
                    className="rounded-lg shadow-xl"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl font-bold mb-6">Media Influence</h2>
                  <p className="text-gray-300 mb-4">
                    The 1980s saw Japanese automotive culture begin to influence global media, setting the stage for the
                    explosion of interest in the 1990s and 2000s. Automotive magazines, videos, and early video games
                    helped spread Japanese car culture internationally.
                  </p>
                  <p className="text-gray-300 mb-6">
                    This era laid the groundwork for influential media like Initial D, The Fast and the Furious, and
                    Gran Turismo that would later introduce millions of people worldwide to Japanese performance cars
                    and tuning culture.
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="bg-white/10 p-4 rounded-lg flex items-start">
                      <div className="bg-emerald-600 p-2 rounded mr-4 mt-1">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Option Magazine</h3>
                        <p className="text-sm text-gray-400">
                          Founded in 1981, Option became the bible of Japanese tuning culture, documenting the rise of
                          street racing and car modification throughout the decade.
                        </p>
                      </div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg flex items-start">
                      <div className="bg-emerald-600 p-2 rounded mr-4 mt-1">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Video Option</h3>
                        <p className="text-sm text-gray-400">
                          The video counterpart to Option magazine showcased Japanese tuning culture in action, with
                          footage of street racing, time attacks, and car features.
                        </p>
                      </div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg flex items-start">
                      <div className="bg-emerald-600 p-2 rounded mr-4 mt-1">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Early Video Games</h3>
                        <p className="text-sm text-gray-400">
                          Games like Namcos Pole Position (1982) and Segas Out Run (1986) introduced Japanese sports
                          cars to global audiences through arcade and home console gaming.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Economic Impact */}
      <section className="py-16 bg-gradient-to-r from-emerald-900 to-green-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Economic Impact</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">The Rise of Japanese Automotive Power</h3>
              <p className="mb-6 text-gray-200">
                The 1980s marked a pivotal decade for Japans automotive industry, transforming from budget-friendly
                alternatives to global leaders in quality, reliability, and innovation. This shift fundamentally changed
                the global automotive landscape and established Japanese manufacturers as dominant forces in the
                industry.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Global Expansion</h4>
                  <p className="text-sm text-gray-300">
                    Japanese manufacturers established production facilities in North America and Europe, creating jobs
                    and transferring manufacturing expertise.
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Market Share Growth</h4>
                  <p className="text-sm text-gray-300">
                    By the end of the 1980s, Japanese brands had captured significant market share in key markets,
                    particularly in the United States.
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Supply Chain Innovation</h4>
                  <p className="text-sm text-gray-300">
                    Just-in-time manufacturing and lean production methods revolutionized automotive manufacturing
                    globally, improving efficiency and quality.
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Aftermarket Industry</h4>
                  <p className="text-sm text-gray-300">
                    The rise of Japanese performance cars created a booming aftermarket industry for parts and
                    modifications that continues to thrive today.
                  </p>
                </div>
              </div>

              <Button className="bg-white text-emerald-900 hover:bg-gray-200">
                Economic Impact Analysis
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Japanese automotive industry"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Philosophy */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Engineering Philosophy</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-emerald-600 p-3 rounded-full">
                  <Wrench className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Kaizen: Continuous Improvement</h3>
              </div>
              <p className="text-gray-300 mb-4">
                The Japanese philosophy of continuous improvement was central to their automotive engineering approach.
                Rather than revolutionary changes, Japanese manufacturers focused on iterative refinements that
                gradually perfected their vehicles.
              </p>
              <p className="text-gray-300">
                This approach led to exceptional reliability and build quality that forced Western manufacturers to
                improve their own standards to remain competitive.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-emerald-600 p-3 rounded-full">
                  <Wrench className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Balance of Performance</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Japanese sports cars of the 1980s emphasized balanced performance rather than raw power. Engineers
                focused on handling, response, and the overall driving experience rather than headline-grabbing
                specifications.
              </p>
              <p className="text-gray-300">
                This philosophy created cars that were often more enjoyable to drive than their more powerful Western
                counterparts, particularly on challenging roads.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-emerald-600 p-3 rounded-full">
                  <Wrench className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Technological Innovation</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Japanese manufacturers were willing to invest in new technologies that Western companies often
                considered too expensive or risky. This forward-thinking approach led to numerous innovations that later
                became industry standards.
              </p>
              <p className="text-gray-300">
                From electronic fuel injection to advanced all-wheel drive systems, Japanese engineers pushed the
                boundaries of what was possible in production vehicles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">The Enduring Legacy</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Japanese automotive legacy"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">From the 80s to Today</h3>
              <p className="text-gray-300 mb-6">
                The innovations, designs, and cultural movements that emerged from 1980s Japanese automotive culture
                continue to influence the global industry and enthusiast communities today. Many cars from this era have
                achieved legendary status and are now highly sought after by collectors worldwide.
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Collector Car Market</h4>
                  <p className="text-sm text-gray-400">
                    Japanese performance cars from the 1980s have seen dramatic appreciation in value, with pristine
                    examples of the Toyota AE86, Mazda RX-7, and Nissan Skyline fetching premium prices at auctions
                    worldwide.
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Cultural Influence</h4>
                  <p className="text-sm text-gray-400">
                    The aesthetic and cultural elements of 1980s Japanese car culture continue to influence fashion,
                    design, music, and media, with a resurgence of interest in the distinctive style of this era.
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Engineering Legacy</h4>
                  <p className="text-sm text-gray-400">
                    Many engineering principles and technologies pioneered in the 1980s continue to evolve in modern
                    vehicles, from advanced all-wheel drive systems to variable valve timing and turbocharging.
                  </p>
                </div>
              </div>

              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Explore the Legacy
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-emerald-900 to-green-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Dive Deeper Into Japanese Automotive History</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Explore our comprehensive archives, interviews with key figures, and analysis of how this golden era
            continues to shape automotive culture today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-900 hover:bg-gray-200">
              Browse Historical Archives
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Read Expert Analysis
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

