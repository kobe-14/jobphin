import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Job Phin",
  description: "Modern Job Boards",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} container mx-auto bg-paper p-4`}>
        {children}
      </body>
    </html>
  );
}
