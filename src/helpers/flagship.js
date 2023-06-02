import { Flagship, DecisionMode } from '@flagship.io/js-sdk'

export async function getFsVisitorData() {

    if (!Flagship.getVisitor()) {
        Flagship.start(
            process.env.NEXT_PUBLIC_ENV_ID,
            process.env.NEXT_PUBLIC_API_KEY,
            {
                fetchNow: false,
                pollingInterval: 30
            }
        );
    }

    const visitor = Flagship.newVisitor({
        visitorId: "visitor",
        context: {},
        isNewInstance: false
    })
    await visitor.fetchFlags();

    return visitor;
}