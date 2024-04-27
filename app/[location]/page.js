import { getWeatherData } from "@/utils/weather";

export default function Home() {
  getWeatherData(51.5073, -0.1276);

  return <h2>Landing Page</h2>;
}
