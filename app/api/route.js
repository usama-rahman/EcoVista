import getlocation from "./location/location";

export async function GET() {
  const locationData = getlocation();

  return Response.json(locationData);
}
