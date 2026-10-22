import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

function SkeletonCard() {
    return (
        <Card className="w-full max-w-xs">
            <CardHeader>
                <Skeleton className="aspect-video w-full" />

            </CardHeader>
            <CardContent>
                <div className="space-y-2 mb-16">
                    <Skeleton className="h-3 w-1/2" />
                    <Skeleton className="h-3 w-3/4" />
                </div>

                <div className="flex gap-2">
                    <Skeleton className="h-8 w-1/2" />
                    <Skeleton className="h-8 w-1/2" />
                </div>
            </CardContent>
        </Card>
    )
}


export function SkeletonCardGrid({ count }: { count: number }) {
    const skeletonCards = Array.from({ length: count }, (_, index) => (
        <SkeletonCard key={index} />
    ))

    return (
        <div className="w-full flex flex-wrap items-center justify-center gap-5">
            {skeletonCards}
        </div>
    )
}