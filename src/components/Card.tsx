import { ReactNode } from "react";
import { SpotlightCard } from "./Spotlight";

interface CardProps {
    title: string;
    description: string;
    icon: ReactNode;
}

export default function Card({ title, description, icon }: CardProps) {
    return (
        <SpotlightCard>
            <div className="relative h-full bg-light-secondary1 rounded-[inherit] z-20 overflow-hidden">
                <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                    <div className="absolute inset-0 translate-z-0 bg-light-secondary2 rounded-full blur-[80px]"></div>
                </div>
                <div className="flex flex-col h-full">
                    <div className="flex flex-col gap-12 p-12 rounded-2xl group transition-colors items-start">
                        <div className="bg- rounded-full w-min p-4 bg-light-secondary2">
                            {icon}
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="font-semibold text-white">{title}</h4>
                            <h5 className="font-medium text-light-primary">{description}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </SpotlightCard>
    )
}