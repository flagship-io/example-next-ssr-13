//src/app/server-component/page.js
import { getFsVisitorData } from "@/helpers/flagship"

export default async function ServerComponent() {
    //visitor data
    const visitorData = {
        id: "visitorId",
        context: {
            key: "value"
        }
    }
    //Get visitor instance
    const visitor = await getFsVisitorData(visitorData)

    //Get flag `btnColor` using visitor instance
    const flag = visitor.getFlag("btnColor", "#dc3545")

    return (
        <>
            <h1>This page is a server component</h1>
            <p>flag key: btnColor</p>
            <p>flag value: {flag.getValue()}</p>
            <button style={{ background: flag.getValue() }} >Click me</button>
        </>
    )
}