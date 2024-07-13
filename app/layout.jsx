import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PageAnimation from '@/components/PageAnimation'
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"]
  , weight: ["100", "200", "300", "400", "500", "600"]
  , style: ["normal", "italic"]
  , variable: "--font-jetBrainsMono"
})

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
