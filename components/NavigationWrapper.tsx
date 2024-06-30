"use client";

import { useRouter } from "next/navigation";

type WrapperProps = {
    id: string,
    children: React.ReactNode;
};

export default function NavigationWrapper({ id, children }: WrapperProps) {
    const router = useRouter();
    return (
        <div className="cursor-pointer" onClick={() => router.push(`/recipes/${id}`)}>{children}</div>
    )
}


