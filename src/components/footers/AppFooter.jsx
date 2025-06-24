"use client";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function AppFooter() {
  return (
    <footer className="w-full bg-gray-100 text-gray-600 text-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="space-y-2">
          <p className="text-2xl font-semibold text-gray-800">Artistly</p>
          <p>123 Creative Street, Mumbai, India</p>
          <p>Email: support@artistly.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

    
        <div className="flex flex-col justify-start items-start gap-2 text-center md:text-left">
          <p className="w-full text-lg text-left font-medium text-gray-800">Pages</p>
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/manager/dashboard" className="hover:text-blue-600">Dashboard</Link>
          <Link href="/planner/artists" className="hover:text-blue-600">Browse Artists</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <p className="w-full text-lg text-left font-medium text-gray-800">Follow us</p>
          <div className="w-full flex  gap-6">
            <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
              <Facebook className="w-6 h-6 hover:text-blue-600" />
            </Link>
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <Twitter className="w-6 h-6 hover:text-blue-600" />
            </Link>
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
              <Instagram className="w-6 h-6 hover:text-pink-600" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 hover:text-blue-700" />
            </Link>
          </div>
        </div>

      </div>

      <div className="text-center border-t border-gray-200 py-4 mt-4">
        © {new Date().getFullYear()} Artistly. All rights reserved.
      </div>
    </footer>
  );
}
