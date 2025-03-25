'use client'
import {
    useFsFlag,
} from "@flagship.io/react-sdk";

export function MyFlagComponent() {
    const myFlag = useFsFlag("my_flag_key");
    return <p>flag value: {myFlag.getValue("default-value")}</p>
}