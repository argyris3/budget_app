import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import RootProviders from "@/components/providers/RootProviders";

import { Toaster } from "sonner";

const inter = Kanit({
  weight: "400",

  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Budget_App",
  icons: {
    icon: "/money.png",
  },
  description: "Dont waste your money..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
        <body className={inter.className}>
          <Toaster richColors position="bottom-right" />
          <RootProviders>{children}</RootProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
