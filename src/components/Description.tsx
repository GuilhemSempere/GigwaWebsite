interface DescriptionProps {
    number: number;
    title: string;
    description: string;
}

export default function Description ({number, title, description}: DescriptionProps){
    return (
        <div className="flex flex-row gap-8 items-center">
            <h2 className="text-primary min-w-12">{number}.</h2>
            <div className="flex flex-col gap-3">
                <h4>{title}</h4>
                <h5>{description}</h5>
            </div>
        </div>
    )
}