interface NavBarProps {
    active: number;
}

const navItems = [
    {
        name: "Home",
        leftPosition: "0",
        width: "110px"
    },
    {
        name: "Experience",
        leftPosition: "95px",
        width: "130px"
    },
    {
        name: "Education",
        leftPosition: "222px",
        width: "110px"
    },
    {
        name: "Personal Projects",
        leftPosition: "335px",
        width: "170px"
    },
    {
        name: "Achievements",
        leftPosition: "498px",
        width: "160px"
    },
]
export default function NavBar({ active }: NavBarProps){
    return <div className="w-full mt-8">
        <div className="w-fit m-auto p-2 border-2 border-white rounded-3xl relative">
            {navItems.map((item, idx) => {
                return <button key={idx} className={`py-2 px-6 -mr-2 relative z-20 ${active === idx ? "nav-select-text-color" : ""}`}>{item.name}</button>
            })}
        <div style={{width: navItems[active].width, left: navItems[active].leftPosition}} className={`h-full rounded-2xl bg-white absolute top-0 z-10 nav-select-slide opacity-90`}></div>
        </div>
    </div>
}