import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EcoVista",
  description: "One Place Dashboard for Eco Information",
};

export default function RootLayout({
  children,
  weather,
  aqi,
  wind,
  temperature,
}) {
  return (
    <div lang="en">
      <div className={inter.className}>
        {children}
        {weather}
        {aqi}
        {wind}
        {temperature}
      </div>
    </div>
  );
}
