import type { Metadata } from "next";
import { Poppins, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/static/header";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/static/footer";

const fontSyne = Syne({
  weight: 'variable',
  display: 'swap',
  variable: "--font-syne",
  subsets: ["latin-ext"],
})

const fontPoppins = Poppins({
  weight: '400',
  display: 'swap',
  variable: "--font-poppins",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Binary Biology | Integrating Biology with Technology",
  description: "Explore the intersection of biology and technology. We provide services as well as platform to explore bioinformatics and technology in a simplified and accessible manner.",
  metadataBase: new URL("https://binarybiology.top"),
  alternates: {
    canonical: "https://binarybiology.top",
  },
  openGraph: {
    title: "Binary Biology",
    description: "Integrating Biology with Technology.",
    url: "https://binarybiology.top",
    siteName: "Binary Biology",
    images: [
      {
        url: "/brand/logo.png",
        width: 1200,
        height: 1200,
        alt: "Binary Biology Logo and Tagline",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Binary Biology",
    description: "Integrating Biology with Technology.",
    creator: "@raannakasturi",
    site: "@binarybiology",
    images: {
      url: "/brand/logo.png",
      alt: "Binary Biology Logo",
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSyne.variable} ${fontPoppins.variable} w-full flex flex-col justify-center items-center antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          enableColorScheme={true}
          disableTransitionOnChange
        >
          < NextTopLoader />
          < Header />
          {children}
          < Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
