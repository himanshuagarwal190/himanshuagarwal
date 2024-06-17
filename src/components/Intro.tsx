export default function Intro(){
    return <div className="flex items-center justify-center h-[100vh] -mt-28">
        <div className="w-1/2 flex justify-center items-center space-y-4 flex-col">
            <p className="m-auto text-5xl">{"</Himanshu Agarwal >"}</p>
            <p>Hey there! I'm a passionate software engineer dedicated to transforming innovative ideas into reality through code. With a blend of creativity and technical prowess, I specialize in crafting robust, user-centric applications that not only solve problems but also delight users. Dive into my world of software development, where every line of code is a step towards a smarter, more connected future. Let's build something amazing together!</p>
        </div>
        <div className="w-1/2">
            <div className="m-auto me-image box-content rounded-full">
                <img className="w-full h-full" src="./me.png" alt="" />
            </div>
        </div>
    </div>
}