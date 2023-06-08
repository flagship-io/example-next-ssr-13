import Link from "next/link";

export default function Nav() {
    return (
        <>
            <Link href="/">Home</Link>
            <Link href="/client-component">client-component page</Link>
            <Link href="/server-component">server-component page</Link>
        </>
    )
}