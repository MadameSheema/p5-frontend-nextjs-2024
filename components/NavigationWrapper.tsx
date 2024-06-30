"use client";

import { useRouter } from "next/navigation";

type WrapperProps = {
    id: string,
    children: React.ReactNode;
};

export default function NavigationWrapper({ id, children }: WrapperProps) {
    const router = useRouter();
    const click = () => {
        router.push(`/recipes/${id}`);
        window.scrollTo(0, 0);
    };
    return (
        <div className="cursor-pointer" onClick={() => click()}>{children}</div>
    )
}


