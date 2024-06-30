type HeaderProps = {
    children: React.ReactNode;
};

export default function RecipeHeader ({ children }: HeaderProps) {
    return <header className="font-extrabold text-xl m-4">{children}</header>
};
