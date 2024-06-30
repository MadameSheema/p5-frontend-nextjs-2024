type HeaderProps = {
    children: React.ReactNode;
};

export const RecipeHeader = ({ children }: HeaderProps) => (
    <header className="font-extrabold text-xl m-4">{children}</header>
);
