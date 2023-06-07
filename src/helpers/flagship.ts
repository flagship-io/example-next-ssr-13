import { Flagship, type Visitor, FlagshipStatus } from "@flagship.io/js-sdk";

export async function getFsVisitorData(visitorData: {
  id?: string;
  context: Record<string, string | number | boolean>;
}): Promise<Visitor> {
  //Check if Flagship JS SDK is already initialized
  if (
    !Flagship.getStatus() ||
    Flagship.getStatus() === FlagshipStatus.NOT_INITIALIZED
  ) {
    // Start the SDK
    Flagship.start(
      process.env.NEXT_PUBLIC_ENV_ID,
      process.env.NEXT_PUBLIC_API_KEY,
      {
        fetchNow: false, // Fetch data only when `fetchFlags` is called
        nextFetchConfig: { revalidate: 20 }, // Configure next fetch cache to revalidate SDK routes after 20 sec
      }
    );
  }

  // Create a visitor
  const visitor = Flagship.newVisitor({
    visitorId: visitorData.id,
    context: visitorData.context,
  });

  // Fetch flags
  await visitor.fetchFlags();

  // Return visitor instance
  return visitor;
}
