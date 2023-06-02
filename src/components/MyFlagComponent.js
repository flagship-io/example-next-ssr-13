'use client'
import {
    useFsFlag,
} from "@/components/flagship";

export function MyFlagComponent() {
    const myFlag = useFsFlag("my_flag_key", "default-value");
    return <p>flag value: {myFlag.getValue()}</p>
}