import { ReactNode } from "react";

interface ICard {
    title: string;
    image: string;
    points: Array<string>;
}

const experiences = [
    {
        image: "medibuddy_logo.jpeg",
        title: "MediBuddy",
        points: [
            `Designed and Developed backend from scratch for MB
                Runnr platform which is order management solution
                for phlebotomists.`,
            `Built various tools and API's to help simplify the
                order management process which is responsible for
                90% of the total home visit bookings.`,
            `Designed and Implemented services using AWS
                Lambda to reduce cost and maintainability.`,
            `Developed various UI components in REACT and
                ANGULAR on the company's website.`,
            `Built systems to help automate various routine tasks.`
        ]
    },
    {
        image: "iitbombay.png",
        title: "IIT Bombay",
        points: [
            `Managed and deployed on Azure 2 open source video
                conferencing system.`,
            `2 open source video conferencing systems were Jitsi
                and BigBlueButton.`,
            `Integrated it's API's on a separate website which was
                built from scratch using NodeJS where users can start
                meetings and invite other people.`
        ]
    }
]



function Card({ title, points, image }: ICard): ReactNode {
    return (
        <section className="px-12 relative border-gray-500/40 border-4 py-6 hover:scale-[1.01] hover:shadow-xl transition-transform ease-in-out hover:shadow-slate-500">
            <img className="absolute rounded-full -left-10 top-4 w-16 h-16" src={image} alt="" />
            <h1 className="font-medium text-3xl mb-6">{title}</h1>
            <ul className="list-disc">
                {points.map(point => <li className="py-1">
                    {point}
                </li>)}
            </ul>

        </section>
    )
}


export default function Experience() {
    return <div id="experience" className="mx-8">
        <h1 className="text-4xl py-10 w-fit experience-title">Experiences</h1>
        <div className="flex flex-col space-y-4">
            {experiences.map(experience => {
                return <Card title={experience.title} points={experience.points} image={experience.image} />
            })}
        </div>
    </div>
}