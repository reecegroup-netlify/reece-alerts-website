import "./globals.css";

import Alert from "@/components/alert";
import Footer from "@/components/footer";

import { draftMode } from "next/headers";
import Container from "@/components/container";

export default function RootLayout({ children }) {
  const { isEnabled } = draftMode();

  return (
    <html lang="en">
      <body className="color-[#575756]">
        <div className="min-h-screen">
          <Alert preview={isEnabled} />
          <main className="bg-[#F4F5F6]">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
