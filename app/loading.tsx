import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <main className="flex items-center space-x-4">
            <div className="m-4 space-y-2">
                <Skeleton className={`h-4 w-[2000px]`} />
                <Skeleton className={`h-4 w-[1950px]`} />
                <Skeleton className={`h-4 w-[1900px]`} />
                <Skeleton className={`h-4 w-[1850px]`} />
                <Skeleton className={`h-4 w-[1800px]`} />
                <Skeleton className={`h-4 w-[1750px]`} />
            </div>
        </main>
    );
}
