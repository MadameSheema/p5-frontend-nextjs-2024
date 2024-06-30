type imageProps = {
    image: string,
    title: string,
    id?: number,
};

export default function Image( { image, title, id }: imageProps) {
    return (
        <img className="rounded" key={id} src={image} alt={title} />
    )
}


