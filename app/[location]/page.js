import { getWeatherData } from "@/utils/weather";

export default function Home() {
  getWeatherData();
  return <h2>Landing Page</h2>;
}
