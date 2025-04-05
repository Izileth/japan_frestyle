"use client"


import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-black/70 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Japanese cars from the 80s"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">GALLERY</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            A visual journey through the golden era of Japanese automotive culture
          </p>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="cars" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto bg-gray-900/50">
              <TabsTrigger value="cars" className="py-3 data-[state=active]:bg-gray-700">
                Iconic Cars
              </TabsTrigger>
              <TabsTrigger value="racing" className="py-3 data-[state=active]:bg-gray-700">
                Racing
              </TabsTrigger>
              <TabsTrigger value="culture" className="py-3 data-[state=active]:bg-gray-700">
                Culture
              </TabsTrigger>
              <TabsTrigger value="design" className="py-3 data-[state=active]:bg-gray-700">
                Design
              </TabsTrigger>
            </TabsList>

            <TabsContent value="cars" className="mt-8">
              <GalleryGrid
                title="Iconic Cars of the 1980s"
                description="The legendary vehicles that defined an era of Japanese automotive excellence"
                images={[
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Toyota AE86 Trueno",
                    caption: "Toyota AE86 Trueno (1983-1987)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Mazda RX-7 FC",
                    caption: "Mazda RX-7 FC (1985-1992)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Nissan Skyline R31",
                    caption: "Nissan Skyline R31 (1985-1989)",
                  },
                  { src: "/placeholder.svg?height=600&width=800", alt: "Honda CRX", caption: "Honda CRX (1983-1991)" },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Toyota Supra A70",
                    caption: "Toyota Supra A70 (1986-1993)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Mitsubishi Starion",
                    caption: "Mitsubishi Starion (1982-1989)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Nissan 300ZX Z31",
                    caption: "Nissan 300ZX Z31 (1983-1989)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Toyota MR2 AW11",
                    caption: "Toyota MR2 AW11 (1984-1989)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Nissan Skyline R32 GT-R",
                    caption: "Nissan Skyline R32 GT-R (1989-1994)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Honda City Turbo II",
                    caption: "Honda City Turbo II (1983-1986)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Mazda Cosmo",
                    caption: "Mazda Cosmo (1981-1989)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Subaru Leone RX Turbo",
                    caption: "Subaru Leone RX Turbo (1983-1989)",
                  },
                ]}
              />
            </TabsContent>

            <TabsContent value="racing" className="mt-8">
              <GalleryGrid
                title="Racing Heritage"
                description="The competitive spirit that pushed Japanese engineering to new heights"
                images={[
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Group A Racing",
                    caption: "Group A Touring Car Racing (1985)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Keiichi Tsuchiya Drifting",
                    caption: "Keiichi Tsuchiya Drifting an AE86 (1987)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Japanese Touring Car Championship",
                    caption: "Japanese Touring Car Championship (1986)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Rally Japan",
                    caption: "All Japan Rally Championship (1983)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Mazda Rotary Racing",
                    caption: "Mazda Rotary Engine Racing Program (1982)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Fuji Speedway",
                    caption: "Fuji Speedway Grand Champion Series (1984)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Tsukuba Circuit",
                    caption: "Tsukuba Circuit Time Attack (1983)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Suzuka Circuit",
                    caption: "Suzuka 1000km Endurance Race (1987)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Nissan Racing Team",
                    caption: "Nissan Motorsports (NISMO) Racing Team (1988)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Toyota Team TOM'S",
                    caption: "Toyota Team TOM'S (1985)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Satoru Nakajima F1",
                    caption: "Satoru Nakajima in Formula 1 (1987)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Drift Competition",
                    caption: "Early Drift Competition (1989)",
                  },
                ]}
              />
            </TabsContent>

            <TabsContent value="culture" className="mt-8">
              <GalleryGrid
                title="Cultural Impact"
                description="How Japanese automotive culture shaped society and media"
                images={[
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Midnight Club",
                    caption: "Legendary Midnight Club Racing Team (1987)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Bosozoku Style",
                    caption: "Bosozoku Car Style (1985)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Tokyo Auto Salon",
                    caption: "Early Tokyo Auto Salon (1983)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Option Magazine",
                    caption: "Option Magazine Cover (1981)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Wangan Highway",
                    caption: "Wangan Highway at Night (1986)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Touge Mountain Pass",
                    caption: "Touge Mountain Pass Driving (1984)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Car Audio Culture",
                    caption: "Japanese Car Audio Culture (1988)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Drift Pluspy Video",
                    caption: "Keiichi Tsuchiya's Drift Pluspy Video (1987)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Tokyo Motor Show",
                    caption: "Tokyo Motor Show (1985)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Tuning Shop",
                    caption: "Early Japanese Tuning Shop (1982)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Racing Arcade Game",
                    caption: "Japanese Racing Arcade Game (1986)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Car Meet",
                    caption: "Japanese Car Meet (1989)",
                  },
                ]}
              />
            </TabsContent>

            <TabsContent value="design" className="mt-8">
              <GalleryGrid
                title="Design & Technology"
                description="The innovative designs and technologies that revolutionized the automotive world"
                images={[
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Pop-up Headlights",
                    caption: "Iconic Pop-up Headlight Design (1985)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Digital Dashboard",
                    caption: "Early Digital Dashboard Technology (1984)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "HICAS System",
                    caption: "Nissan's HICAS Four-Wheel Steering System (1986)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Rotary Engine",
                    caption: "Mazda's Rotary Engine Technology (1983)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "ATTESA E-TS",
                    caption: "Nissan's ATTESA E-TS All-Wheel Drive System (1989)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "VTEC Engine",
                    caption: "Honda's VTEC Engine Technology (1989)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Aerodynamic Design",
                    caption: "Wind Tunnel Testing of Japanese Sports Cars (1987)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Turbocharging",
                    caption: "Twin-Turbo Technology Development (1986)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Concept Car",
                    caption: "Futuristic Japanese Concept Car (1985)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Interior Design",
                    caption: "Driver-Focused Interior Design (1988)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Engine Bay",
                    caption: "Meticulously Engineered Engine Bay (1987)",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Car Design Sketches",
                    caption: "Original Design Sketches for Iconic Models (1982)",
                  },
                ]}
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Featured Collection</h2>
          <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            The Evolution of the Japanese Sports Car: 1980-1989
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-8">
              <GalleryImage
                src="/placeholder.svg?height=600&width=800"
                alt="Early 80s Japanese Sports Car"
                caption="1980-1982: The Foundation Years"
                description="The early 1980s saw Japanese manufacturers focusing on efficiency and reliability while beginning to explore performance."
              />
              <GalleryImage
                src="/placeholder.svg?height=600&width=800"
                alt="Mid 80s Japanese Sports Car"
                caption="1983-1985: The Experimental Phase"
                description="This period saw the introduction of innovative technologies like turbocharging and electronic fuel injection becoming standard."
              />
            </div>
            <div className="space-y-8">
              <GalleryImage
                src="/placeholder.svg?height=600&width=800"
                alt="Golden Era Japanese Sports Car"
                caption="1986-1987: The Golden Era Begins"
                description="These years marked the emergence of truly world-class performance cars with distinctive Japanese engineering approaches."
              />
              <GalleryImage
                src="/placeholder.svg?height=600&width=800"
                alt="Late 80s Japanese Sports Car"
                caption="1988-1989: The Technological Revolution"
                description="The late 1980s saw advanced technologies like VTEC, ATTESA E-TS, and Super HICAS transform what was possible in production cars."
              />
            </div>
            <div className="space-y-8 lg:col-span-1 md:col-span-2 lg:mt-0 md:mt-8">
              <div className="bg-gray-800 rounded-lg overflow-hidden h-full">
                <div className="relative h-64 md:h-96">
                  <Image
                    src="/placeholder.svg?height=800&width=1200"
                    alt="Evolution of Japanese Sports Cars"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">The Complete Evolution</h3>
                  <p className="text-gray-300 mb-4">
                    The 1980s represented a complete transformation for Japanese sports cars, evolving from underpowered
                    curiosities to world-beating performance machines that would define an era.
                  </p>
                  <p className="text-gray-300 mb-4">
                    This decade of innovation established Japan as a major player in the performance car market and
                    created legendary vehicles that continue to influence automotive design and culture today.
                  </p>
                  <Button className="w-full">View Complete Timeline</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Contribute to Our Gallery</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Do you have photographs, videos, or memorabilia from the golden era of Japanese automotive culture? Share
            them with our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Submit Your Photos</Button>
            <Button size="lg" variant="outline">
              Contact Our Curators
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

interface GalleryImageProps {
  src: string
  alt: string
  caption: string
  description?: string
}

function GalleryImage({ src, alt, caption, description }: GalleryImageProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden group">
      <div className="relative h-48 md:h-64">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold mb-1">{caption}</h3>
        {description && <p className="text-sm text-gray-400">{description}</p>}
      </div>
    </div>
  )
}

interface GalleryGridProps {
  title: string
  description: string
  images: {
    src: string
    alt: string
    caption: string
  }[]
}

function GalleryGrid({ title, description, images }: GalleryGridProps) {
  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">{description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <GalleryImageWithModal key={index} image={image} />
        ))}
      </div>
    </div>
  )
}

function GalleryImageWithModal({ image }: { image: { src: string; alt: string; caption: string } }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer group">
          <div className="relative aspect-square">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="p-3">
            <p className="text-sm font-medium truncate">{image.caption}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] bg-gray-900 border-gray-800">
        <DialogHeader>
          <DialogTitle>{image.caption}</DialogTitle>
          <DialogDescription className="text-gray-400">Click image to view full size</DialogDescription>
        </DialogHeader>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
        </div>
      </DialogContent>
    </Dialog>
  )
}

