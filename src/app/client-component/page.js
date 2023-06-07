// src/app/client-component/page.js

'use client'

import { useFsFlag } from "@flagship.io/react-sdk";

export default function ClientComponent() {

    // Get the flag `btnColor` using useFsFlag hook
    const flag = useFsFlag("btnColor", "#dc3545")

    return (
        <>
            <h1>This page is a client component</h1>
            <p>flag key: btnColor</p>
            <p>flag value: {flag.getValue()}</p>
            <button style={{ background: flag.getValue() }} >Click me</button>
        </>
    )
}