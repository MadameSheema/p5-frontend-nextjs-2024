"use client";

import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();

    return (
        <header
            className={
                "h-12 bg-pink-500 text-white flex flex-row items-center px-4"
            }
        >
            <div className="font-extrabold text-xl text-white mr-4 cursor-pointer" onClick={() => router.push('/recipes')}>
                Recipes
            </div>
        </header>
    );
}