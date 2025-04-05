"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-black text-white border-t border-white/10">
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text">
                80s JDM
                </h3>
                <p className="text-gray-400 mb-4">
                Celebrating the golden era of Japanese automotive culture from the 1980s.
                </p>
                <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                    <Youtube className="h-5 w-5" />
                    <span className="sr-only">YouTube</span>
                </Link>
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-4">Explore</h3>
                <ul className="space-y-2">
                <li>
                    <Link href="/cars" className="text-gray-400 hover:text-white">
                    Iconic Cars
                    </Link>
                </li>
                <li>
                    <Link href="/racers" className="text-gray-400 hover:text-white">
                    Racing Legends
                    </Link>
                </li>
                <li>
                    <Link href="/events" className="text-gray-400 hover:text-white">
                    Iconic Events
                    </Link>
                </li>
                <li>
                    <Link href="/history" className="text-gray-400 hover:text-white">
                    Cultural Impact
                    </Link>
                </li>
                <li>
                    <Link href="/gallery" className="text-gray-400 hover:text-white">
                    Gallery
                    </Link>
                </li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                <li>
                    <Link href="/about" className="text-gray-400 hover:text-white">
                    About Us
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className="text-gray-400 hover:text-white">
                    Contact
                    </Link>
                </li>
                <li>
                    <Link href="/faq" className="text-gray-400 hover:text-white">
                    FAQ
                    </Link>
                </li>
                <li>
                    <Link href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                    </Link>
                </li>
                <li>
                    <Link href="/terms" className="text-gray-400 hover:text-white">
                    Terms of Service
                    </Link>
                </li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                <p className="text-gray-400 mb-4">Subscribe to get the latest updates on events and content.</p>
                <form className="space-y-2">
                <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    required
                />
                <button
                    type="submit"
                    className="w-full px-3 py-2 bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 rounded-md font-medium"
                >
                    Subscribe
                </button>
                </form>
            </div>
            </div>

            <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} 80s Japanese Automotive Culture. All rights reserved.</p>
            </div>
        </div>
        </footer>
    )
}

