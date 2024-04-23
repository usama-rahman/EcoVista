import { getLocations } from "./locationUtils";

export async function GET() {
  const licationData = getLocations();

  return Response.json(licationData);
}
