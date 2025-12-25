import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import PageAnimation from '@/components/PageAnimation'

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata = {
  title: "Sluch Resturant",
  description: "Best Resturant in town",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <PageAnimation>
          {children}
        </PageAnimation>
      </body>
    </html>
  );
}
