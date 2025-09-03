import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/context/UserContext";
import { Verified } from "lucide-react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  icons: "/favicon.png",
  Verification: {
    google: "google-site-verification: google44adf7e3f67c1280.html",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,  
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <UserProvider>

          {children}
        </UserProvider>
      </body>
    </html>
  );
}
