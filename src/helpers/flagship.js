import { Flagship, FSSdkStatus, DecisionMode, LogLevel } from '@flagship.io/react-sdk'

// Function to start the Flagship SDK
function startFlagshipSDKAsync() {
    // Return a new Promise
    return new Promise((resolve) => {
        // Check if the Flagship SDK has already been initialized
        if (
            Flagship.getStatus() &&
            Flagship.getStatus() !== FlagshipStatus.NOT_INITIALIZED
        ) {
            // If it has been initialized, resolve the Promise with the Flagship object and return early
            resolve(Flagship);
            return;
        }
        // If the SDK has not been initialized, start it with the specified parameters
        Flagship.start(
            process.env.NEXT_PUBLIC_ENV_ID, // Environment ID
            process.env.NEXT_PUBLIC_API_KEY, // API key
            {
                pollingInterval: 10, // Set polling interval to 10
                fetchNow: false, // Do not fetch flags immediately
                decisionMode: DecisionMode.BUCKETING, // Set decision mode to BUCKETING
                nextFetchConfig: { revalidate: 15 }, //Set cache revalidation for SDK routes to 15 seconds
                onBucketingSuccess: () => {
                    // It is triggered when the first bucketing file request succeeds, resolve the Promise with the Flagship object
                    resolve(Flagship);
                },
                onBucketingFail() {
                    // It is triggered when the first bucketing file request fails, resolve the Promise with the Flagship object
                    resolve(Flagship);
                },
            }
        );
    });
}

// Function to start the Flagship SDK
export async function startFlagshipSDK() {
    if (Flagship.getStatus() && Flagship.getStatus() !== FSSdkStatus.SDK_NOT_INITIALIZED) {
        return Flagship; // If it has been initialized, return early
    }
    return await Flagship.start(process.env.NEXT_PUBLIC_ENV_ID, process.env.NEXT_PUBLIC_API_KEY, {
        fetchNow: false, // Do not fetch flags immediately
        decisionMode: DecisionMode.DECISION_API, // set decision mode 
        nextFetchConfig: { revalidate: 15 }, //Set cache revalidation for SDK routes to 15 seconds
    });
}


export async function getFsVisitorData(visitorData) {

    // start the SDK in Decision Api mode et get the Flagship instance 
    const flagship = await startFlagshipSDK()

    // start the SDK in Bucketing mode et get the Flagship instance 
    // const flagship = await startFlagshipSDKAsync()

    // Create a visitor 
    const visitor = flagship.newVisitor({
        visitorId: visitorData.id,
        context: visitorData.context
    });

    // Fetch flag values for the visitor
    await visitor.fetchFlags();

    // Return visitor instance
    return visitor;
}