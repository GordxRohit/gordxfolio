import { useState } from "react"
import { FaHandPointRight } from "react-icons/fa";
import Link from "next/link";
import Data from "../data/projects.json"
console.log('data:', Data)
const Projects = () => {
    const [projects] = useState(Data);
  return (
    <div className="py-6 ">
    <h3 className="text-gray-400 capitalize text-lg font-medium mb-6">Projects & Accomplishments
</h3>
    <div className="">
        {projects.map(project => (
            <Link href={`/project/${project.id}`} className="flex items-center border-t border-t-gray-700 py-3" key={project.id}><FaHandPointRight className="text-yellow-400" /> <span className="ml-3 text-white">{project.title}</span></Link>
        ))}
    </div>
</div>
  )
}

export default Projects