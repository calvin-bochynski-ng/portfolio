import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";
import { ParticlesBackground } from "@/components/particles";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";

export const revalidate = 0;

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "white" },
  //   { media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
  icons: {
    icon: "/logo-small.svg",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="!scroll-smooth"
      title="Calvin Bochynski-Ng"
      suppressHydrationWarning={true}
    >
      <head>
        <title>Calvin Bochynski-Ng</title>
      </head>
      <body
        suppressHydrationWarning={true}
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <ActiveSectionContextProvider>
            <Toaster />
            <ParticlesBackground />
            <div className="relative flex flex-col">
              <Navbar />
              <main className="container mx-auto max-w-7xl px-6 flex flex-col">
                {children}
              </main>
            </div>
            {/* <Footer /> */}
          </ActiveSectionContextProvider>
        </Providers>
      </body>
    </html>
  );
}
