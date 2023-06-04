import Image from "next/image";
import { useState } from "react"
const Skills = () => {
    const [skillsList] = useState([
        {id: 1, name: 'HTML', image: '/images/html.png'},
        {id: 2, name: 'CSS', image: '/images/css.png'},
       // {id: 3, name: 'sass', image: '/images/sass.png'},
        {id: 4, name: 'bootstrap', image: '/images/bootstrap.png'},
        {id: 5, name: 'tailwindcss', image: '/images/tailwind.png'},
        {id: 6, name: 'JavaScript', image: '/images/javascript.png'},
        {id: 7, name: 'figma', image: '/images/figma.png'},
        {id: 8, name: 'react', image: '/images/react.png'},
      //  {id: 9, name: 'redux', image: '/images/redux.png'},
       // {id: 10, name: 'styled components', image: '/images/styled.png'},
        {id: 11, name: 'next', image: '/images/next-js.png'},
      //  {id: 12, name: 'vue', image: '/images/vue.png'},
      //  {id: 345345, name: 'vuex', image: '/images/vuex.png'},
        {id: 13, name: 'node', image: '/images/node.png'},
      //  {id: 14, name: 'express', image: '/images/express.png'},
      //  {id: 15, name: 'mongodb', image: '/images/mongodb.png'},
        {id: 16, name: 'PHP', image: '/images/php.png'},
        {id: 17, name: 'MySQL', image: '/images/mysql.png'},
      //  {id: 18, name: 'solidity', image: '/images/sol.png'},
        // {id: 343453, name: 'ethereum', image: '/images/eth.png'},
        {id: 19, name: 'GitHub', image: '/images/git.png'},
      //  {id: 20, name: 'jest', image: '/images/jest.png'},
        // {id: 21, name: 'AWS Amplify', image: '/images/aws.png'},
       // {id: 22, name: 'heroku', image: '/images/heroku.png'},
        {id: 23, name: 'netlify', image: '/images/netlify.png'},
       // {id: 24, name: 'third web', image: '/images/thirdweb.png'},
    ]);
  return (
    <div className="py-6 border-b border-zinc-700">
    <h3 className="text-gray-400 capitalize text-lg font-medium">tech stack</h3>
    <div className="flex flex-wrap -mx-2">
            {skillsList.map(skill => (
                <div key={skill.id} className="p-2">
                    <div className="flex items-center bg-zinc-800 px-3 py-1.5 rounded-sm ">
                 <div className="relative w-[25px] h-[25px]">
                 <Image src={`${skill.image}`} fill alt="skill" className="w-full h-full object-cover" />
                 </div>
                 <span className="ml-2 text-gray-200 capitalize text-sm font-medium">{skill.name}</span>
            </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Skills