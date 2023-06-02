'use client'
import {
    useFsFlag,
    useFlagship,
    Flagship,
    HitType,
    EventCategory,
} from "@/components/flagship";

export function MyButtonSendHit() {
    const fs = useFlagship();

    const onSendHitClick = () => {
        fs.hit.send({
            type: HitType.EVENT,
            category: EventCategory.ACTION_TRACKING,
            action: "click button",
        });
    };

    return (
        <button
            style={{ width: 100, height: 50 }}
            onClick={() => {
                onSendHitClick();
            }}
        >
            Send hits
        </button>
    )
}