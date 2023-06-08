import { Flagship, FlagshipStatus } from '@flagship.io/react-sdk'

export async function getFsVisitorData(visitorData) {

    //Check if the Flagship JS SDK has already been initialized 
    if (!Flagship.getStatus() || Flagship.getStatus() === FlagshipStatus.NOT_INITIALIZED) {
        //Start the SDK with the provided environment ID and API key
        Flagship.start(
            process.env.NEXT_PUBLIC_ENV_ID,
            process.env.NEXT_PUBLIC_API_KEY,
            {
                fetchNow: false, // Set to only fetch data when `fetchFlags` is called
                nextFetchConfig: { revalidate: 20 }, // Configure next fetch cache to revalidate SDK routes after 20 sec
            }
        );
    }

    // Create a visitor 
    const visitor = Flagship.newVisitor({
        visitorId: visitorData.id,
        context: visitorData.context
    });

    // Fetch flag values for the visitor
    await visitor.fetchFlags();

    // Return visitor instance
    return visitor;
}