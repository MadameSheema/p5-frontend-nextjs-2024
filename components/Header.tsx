"use client";

import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();

    const click = () => {
        router.push('/recipes');
        window.scrollTo(0, 0);
    };

    return (
        <header
            className={
                "fixed top-0 w-full h-10 bg-pink-500 text-white flex flex-row items-center px-4"
            }
        >
            <div className="font-extrabold text-xl text-white cursor-pointer" onClick={() => click()}>
                Recipes
            </div>
        </header>
    );
}