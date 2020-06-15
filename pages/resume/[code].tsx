import React from "react"
import { useRouter } from "next/router";


export default function ResumeWithCode() {
    const router = useRouter();
    const { code } = router.query;

    return (
        <div>CODE is: {code}</div>
    )
}