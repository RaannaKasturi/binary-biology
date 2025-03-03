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
  title: "Binary Biology",
  description: "Integrating Biology with Technology.",
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
