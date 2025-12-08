'use client';

import { Button } from "@/components/ui/button";

export default function DataNodisplay() {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <div className="h-60 w-60 bg-gray-200 rounded-full" />
            <h1 className="text-3xl font-bold">No Data Available</h1>
            <p className="text-center text-gray-600 w-lg">
                We're sorry, but there is no data to display at the moment. Please check back later or contact support if you believe this is an error.
            </p>
            <div className="flex flex-row gap-5">

                <Button variant="default" onClick={() => window.location.reload()}>
                    Retry pages
                </Button>
                <Button variant="default">
                    help center
                </Button>
            </div>
        </div>
    )
}