"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Car, Trophy, Flag, Clock, ImageIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-pink-600/70 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Japanese cars from the 80s"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">JAPANESE AUTO CULTURE</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Exploring the golden era of Japanese automotive innovation and style from the 1980s
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
              Explore Iconic Cars
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Discover Racing Legends
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/cars" className="group">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-700 p-6 rounded-lg transition-transform group-hover:translate-y-[-5px]">
                <Car className="h-12 w-12 mb-4" />
                <h2 className="text-2xl font-bold mb-2">Iconic Cars</h2>
                <p className="text-blue-100">Explore legendary Japanese vehicles that defined an era</p>
              </div>
            </Link>

            <Link href="/racers" className="group">
              <div className="bg-gradient-to-br from-pink-500 to-purple-700 p-6 rounded-lg transition-transform group-hover:translate-y-[-5px]">
                <Trophy className="h-12 w-12 mb-4" />
                <h2 className="text-2xl font-bold mb-2">Racing Legends</h2>
                <p className="text-purple-100">Meet the drivers who pushed these machines to their limits</p>
              </div>
            </Link>

            <Link href="/events" className="group">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-700 p-6 rounded-lg transition-transform group-hover:translate-y-[-5px]">
                <Flag className="h-12 w-12 mb-4" />
                <h2 className="text-2xl font-bold mb-2">Iconic Events</h2>
                <p className="text-orange-100">Relive the races and shows that made history</p>
              </div>
            </Link>

            <Link href="/history" className="group">
              <div className="bg-gradient-to-br from-green-500 to-emerald-700 p-6 rounded-lg transition-transform group-hover:translate-y-[-5px]">
                <Clock className="h-12 w-12 mb-4" />
                <h2 className="text-2xl font-bold mb-2">Cultural Impact</h2>
                <p className="text-emerald-100">Discover how these cars shaped Japanese culture</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Car */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Toyota AE86"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Toyota AE86 Trueno</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 p-3 rounded">
                  <p className="text-sm text-gray-400">Engine</p>
                  <p className="font-medium">1.6L 4A-GE</p>
                </div>
                <div className="bg-white/10 p-3 rounded">
                  <p className="text-sm text-gray-400">Power</p>
                  <p className="font-medium">128 HP</p>
                </div>
                <div className="bg-white/10 p-3 rounded">
                  <p className="text-sm text-gray-400">Weight</p>
                  <p className="font-medium">940 kg</p>
                </div>
                <div className="bg-white/10 p-3 rounded">
                  <p className="text-sm text-gray-400">0-60 mph</p>
                  <p className="font-medium">8.3 seconds</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                The legendary Toyota AE86, immortalized in the manga and anime Initial D, became the symbol of Japans
                drifting culture. Its perfect balance, lightweight chassis, and rear-wheel drive made it the ultimate
                drivers car despite modest power figures.
              </p>
              <Button className="bg-cyan-600 hover:bg-cyan-700">View Full Specifications</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Racing Legends */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Racing Legends</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-lg overflow-hidden group">
              <div className="h-64 relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Keiichi Tsuchiya"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Keiichi Tsuchiya</h3>
                <p className="text-gray-300 mb-4">
                  Known as the Drift King, Tsuchiya pioneered drifting techniques that revolutionized motorsport and
                  influenced car culture worldwide.
                </p>
                <Link href="/racers/tsuchiya" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                  Read profile <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg overflow-hidden group">
              <div className="h-64 relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Kunimitsu Takahashi"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Kunimitsu Takahashi</h3>
                <p className="text-gray-300 mb-4">
                  A pioneer who transitioned from motorcycle racing to cars, Takahashi driving style laid the
                  groundwork for modern drifting techniques.
                </p>
                <Link href="/racers/takahashi" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                  Read profile <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg overflow-hidden group">
              <div className="h-64 relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Satoru Nakajima"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Satoru Nakajima</h3>
                <p className="text-gray-300 mb-4">
                  Japans first full-time Formula 1 driver who paved the way for future generations of Japanese racers
                  on the international stage.
                </p>
                <Link href="/racers/nakajima" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
                  Read profile <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">The Evolution of an Era</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-pink-500"></div>

            <div className="grid grid-cols-1 gap-12">
              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="bg-cyan-500 text-white font-bold py-2 px-6 rounded-full z-10 mb-6">1980</div>
                </div>
                <div className="bg-white/5 p-6 rounded-lg text-white ml-0 md:ml-[50%] md:w-[45%] relative">
                  <h3 className="text-xl font-bold mb-2">The Birth of Modern JDM</h3>
                  <p>
                    Japanese manufacturers begin focusing on performance and technology, setting the stage for a decade
                    of automotive innovation that would influence global car design.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full z-10 mb-6">1983</div>
                </div>
                <div className="bg-white/5 p-6 rounded-lg text-white mr-0 md:mr-[50%] md:w-[45%] md:ml-[5%] relative">
                  <h3 className="text-xl font-bold mb-2">Toyota AE86 Debuts</h3>
                  <p>
                    The launch of the Toyota Corolla Levin/Sprinter Trueno (AE86) creates a cult following and
                    eventually becomes the icon of drifting culture.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="bg-purple-500 text-white font-bold py-2 px-6 rounded-full z-10 mb-6">1985</div>
                </div>
                <div className="bg-white/5 p-6 rounded-lg text-white ml-0 md:ml-[50%] md:w-[45%] relative">
                  <h3 className="text-xl font-bold mb-2">Group A Racing Dominance</h3>
                  <p>
                    Japanese manufacturers begin to dominate Group A touring car racing, showcasing their engineering
                    prowess on international circuits.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="bg-pink-500 text-white font-bold py-2 px-6 rounded-full z-10 mb-6">1989</div>
                </div>
                <div className="bg-white/5 p-6 rounded-lg text-white mr-0 md:mr-[50%] md:w-[45%] md:ml-[5%] relative">
                  <h3 className="text-xl font-bold mb-2">The Supercar Revolution</h3>
                  <p>
                    The decade closes with the introduction of Japanese supercars like the Nissan Skyline GT-R R32 and
                    the first-generation Mazda MX-5, changing perceptions of Japanese automobiles forever.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Gallery</h2>
            <Link href="/gallery" className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
              View full gallery <ImageIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square relative overflow-hidden rounded-lg group">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Gallery image 1"
                fill
                className="object-cover transition-transform group-hover:scale-110"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-lg group">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Gallery image 2"
                fill
                className="object-cover transition-transform group-hover:scale-110"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-lg group">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Gallery image 3"
                fill
                className="object-cover transition-transform group-hover:scale-110"
              />
            </div>
            <div className="aspect-square relative overflow-hidden rounded-lg group">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Gallery image 4"
                fill
                className="object-cover transition-transform group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-cyan-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Connected</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates on Japanese automotive culture, events, and exclusive
            content.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-lg flex-grow bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
            <Button className="bg-cyan-500 hover:bg-cyan-600">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  )
}

