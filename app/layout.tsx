import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./custom.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import GoogleProvider from "@/components/providers/google-provider";
import { Toaster } from "@/components/ui/toaster"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hugo Piedanna | Portfolio",
  description:
    "Bonjour! Je suis Hugo, un développeur freelance full-stack. Je suis passionnée par le web et les parcs d'attractions.",
  authors: {
    name: "Hugo Piedanna",
    url: "https://piedanna.dev",
  },
  applicationName: "Hugo Piedanna",
  robots: { index: true, follow: true },
  keywords: [
    "Hugo Piedanna",
    "Piedanna",
    "Développeur web",
    "Web developer",
    "Développeur full-stack",
    "Full-stack developer",
    "Développeur junior",
    "Junior developer",
    "France",
    "French",
    "Web development",
    "Développement web",
    "Développeur Java",
    "Java développer",
    "Développeur freelance",
    "Freelance developer"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GoogleProvider>
            {children}
            <Toaster />
          </GoogleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
