import type { Metadata } from "next";
import AppProvider from "./_providers/theme";
import { Geist, Geist_Mono, Noto_Sans, Nunito_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const nunitoSansHeading = Nunito_Sans({ subsets: ['latin'], variable: '--font-heading' });

const notoSans = Noto_Sans({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welcome",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", notoSans.variable, nunitoSansHeading.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" >
        <AppProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
