import { useState } from "react"
import { FaHandPaper } from "react-icons/fa"
const About = () => {
    const [heading] = useState<string>('hello everyone');
    const [description] = useState<string>('I\'m Rohit Kumar Mandal, a talented Frontend Developer and UI Designer with a passion for creating exceptional web experiences. With expertise in HTML, CSS, Bootstrap , Tailwincss , javascript , Figma , React , Nextjs , Nodejs , Php , MySQL , Github , Netlify , Midjourney .  I combine my technical skills with a keen eye for aesthetics to craft visually appealing and user-friendly interfaces.');
  return (
    <div className="py-6 border-b border-zinc-700">
    <h3 className="text-gray-400 capitalize text-lg font-medium">about me</h3>
    <h1 className="text-white text-2xl font-medium capitalize my-2 flex items-center">{heading} <FaHandPaper className="ml-3 text-yellow-400 rotate-[10deg]" /></h1>
    <p className="text-gray-400 font-medium ">{description}</p>
    </div>
  )
}

export default About