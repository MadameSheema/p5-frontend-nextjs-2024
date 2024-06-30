"use client";

import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="m-40 flex flex-col justify-center items-center">
            <header className="font-extrabold text-6xl">Something went wrong!</header>
            <Button className="m-40"
                onClick={
                    () => reset()
                }
            >
                Please try again
            </Button>
        </div>
    )
}