import { getFsVisitorData } from "@/helpers/flagship"

export default async function About() {
    const visitor = await getFsVisitorData({ id: "visitor", context: {} })
    const flag = visitor.getFlag("payment_header_color", "red")
    return <div>about {flag.getValue()}</div>
}