import { LucideBadgeCheck, LucideMoveRight } from "lucide-react";

interface AdvantageProps {
    version: string;
    advantages: string[];
}

export default function Advantage({ version, advantages }: AdvantageProps) {
    const halfLength = Math.ceil(advantages.length / 2);
    const firstColumn = advantages.slice(0, halfLength);
    const secondColumn = advantages.slice(halfLength);

    const onClick = () => {
        window.location.href = "https://github.com/SouthGreenPlatform/Gigwa2/releases";
    }


    return (
        <div className="bg-light-secondary1 p-8 flex flex-col gap-16 rounded-2xl w-full">
            <h3>Gigwa v{version}</h3>
            <div className="flex flex-col md:flex-row md:gap-16 gap-6">
                <div className="flex flex-col gap-6">
                    {firstColumn.map((advantage, index) => (
                        <div className="flex flex-row gap-2 items-center">
                            <LucideBadgeCheck className="min-w-6 min-h-6 max-w-6 max-h-6" />
                            <h4 className="font-normal" key={index}>{advantage}</h4>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-6">
                    {secondColumn.map((advantage, index) => (
                        <div className="flex flex-row gap-2 items-center">
                            <LucideBadgeCheck className="min-w-6 min-h-6 max-w-6 max-h-6" />
                            <h4 className="font-normal" key={index}>{advantage}</h4>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-row items-center justify-between">
                <h3 className="font-semibold">Free</h3>
                <button onClick={onClick} className="bg-primary hover:bg-light-secondary2 transition-colors px-6 py-3 text-xl font-medium text-secondary rounded-lg flex flex-row gap-3 items-center">Download now <LucideMoveRight className="min-w-4 min-h-4 max-w-4 max-h-4"/></button>
            </div>
        </div>
    );
}
