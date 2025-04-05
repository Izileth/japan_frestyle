"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Cars", href: "/cars" },
        { name: "Racers", href: "/racers" },
        { name: "Events", href: "/events" },
        { name: "History", href: "/history" },
        { name: "Gallery", href: "/gallery" },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text">
                80s JDM
            </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
                <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
                >
                {item.name}
                </Link>
            ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
                Sign In
            </Button>
            <Button className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600">
                Join Community
            </Button>
            </div>

            {/* Mobile Navigation */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-black border-white/10 text-white">
                <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b border-white/10 py-4">
                    <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text">
                    80s JDM
                    </span>
                    <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                    </Button>
                </div>
                <nav className="flex flex-col gap-4 py-8">
                    {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="text-lg font-medium text-white/70 transition-colors hover:text-white px-2 py-2"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {item.name}
                    </Link>
                    ))}
                </nav>
                <div className="mt-auto flex flex-col gap-4 py-6 border-t border-white/10">
                    <Button
                    variant="outline"
                    className="w-full border-white/20 text-white hover:bg-white/10 hover:text-white"
                    >
                    Sign In
                    </Button>
                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600">
                    Join Community
                    </Button>
                </div>
                </div>
            </SheetContent>
            </Sheet>
        </div>
        </header>
    )
}

