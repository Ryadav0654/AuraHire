import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { DarkModeProvider } from "../context/DarkModeContext";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AuraHire.ai",
  description: "AI Resume Analysis and Job Tracking",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DarkModeProvider>
      <ClerkProvider
        appearance={{
          cssLayerName: "clerk",
        }}
      >
        <html lang="en">
          <body className={geist.className}>
            {children}
          </body>
        </html>
      </ClerkProvider>
    </DarkModeProvider>
  );
}
