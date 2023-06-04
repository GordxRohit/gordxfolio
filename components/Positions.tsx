import Image from "next/image"
import { useState } from "react"
const Positions = () => {
    const [position] = useState([
        {
            id: 2,
            image: '/images/dcoder.jpg',
            role: ' Content Creator',
            type: 'remote',
            date: '05/2021 - present',
            skills: [
                {id: 1, name: 'Html', image: '/images/html.png'},
                {id: 2, name: 'CSS', image: '/images/css.png'},
                {id: 3, name: 'Javascript', image: '/images/javascript.png'},
                {id: 4, name: 'Python', image: '/images/python.png'},
                {id: 8, name: 'github', image: '/images/git.png'},
            ]
        },
        {
            id: 1,
            image: '/images/figma.png',
            role: 'UI UX Creator',
            type: 'remote',
            date: '10/2022 - present',
            skills: [
                {id: 1, name: 'figma', image: '/images/figma.png'},
            ]
        },
        
        {
            id:3,
            image: '/images/lgm.jpg',
            role: 'Lets Grow more - Web Developer Intern',
            // type: 'remote',
            date: '5/2023 - 6/2023',
            skills: [
                {id: 1, name: 'Html', image: '/images/html.png'},
                {id: 2, name: 'CSS', image: '/images/css.png'},
                {id: 3, name: 'Javascript', image: '/images/javascript.png'},
                {id: 4, name: 'Python', image: '/images/python.png'},
                {id: 8, name: 'github', image: '/images/git.png'},
            ],
            options: ['Learned New Skills ', 'Build Projects on Web Development']
        },
        {
            id:4,
            image: '/images/youtube.png',
            role: 'Content Creator & Gamer',
            // type: 'remote',
            date: '4/2020 - present',
            options: ['54K+ youtube Subsribers', 'Created video about Web Development , Graphic Design , Video Editing, etc.','Entertainment - status , shorts , gaming']
        }
    ])
  return (
    <div className="py-6 border-b border-zinc-700">
        <h3 className="text-gray-400 capitalize text-lg font-medium">work history</h3>
        {position.map(pos => (
            <div className="mt-6 flex space-x-3" key={pos.id}>
            <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden">
                <Image src={pos.image} fill alt="job" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
                <h2 className="text-white capitalize">{pos.role}</h2>
                <h5 className="text-gray-500 font-medium capitalize text-sm mt-[2px]">{pos.type} - <span>{pos.date}</span></h5>
                {pos.skills && <div className="flex flex-wrap gap-2 my-2">{
                    pos.skills?.map(skill => (
                        <div key={skill.id}>
                        <div className="flex items-center bg-zinc-800 px-3 py-1 rounded-sm ">
                     <div className="relative w-[20px] h-[20px]">
                     <Image src={`${skill.image}`} fill alt="skill" className="w-full h-full object-cover" />
                     </div>
                     <span className="ml-2 text-gray-200 capitalize text-sm font-medium">{skill.name}</span>
                </div>
                    </div>
                        ))
                    }</div>}

                <div className="mt-2">
                {pos.options && pos.options.map(option => (
                    <li key={option} className="text-gray-400">{option}</li>
                )) }
                </div>
            </div>
        </div>
        ))}
        </div>
  )
}

export default Positions