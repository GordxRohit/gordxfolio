import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from "react"
import { IoIosArrowRoundBack } from "react-icons/io"
import Header from '../../components/Header'
import Data from "../../data/projects.json"
import Footer from '../../components/Footer'
interface Projects {
  project: {
    id: number;
  title: string;
  stack: string[];
  description: string;
  link: string;
  code: string;
  }
}
const project = ({project}: Projects) => {
  const {back} = useRouter();
  // const [details, setDetails] = useState<Projects>();
  // const id: number | any = query.id;
  // useEffect(() => {
  //   const response: Projects | any = Data.find(pro => pro.id == id);
  //   setDetails(response)
  // }, [id])
  // console.log(props.)
  return (
    <div>
         <Head>
        <title>{project.title}</title>
        <meta name="description" content={project.description} />
        <link rel="icon" href="/images/javascript.png" />
      </Head>
      <div className='max-w-screen-lg mx-auto py-20 px-5'>
        <Header />
        <div className='my-5'>
          <div className='text-orange-500 flex items-center capitalize mb-2 cursor-pointer' onClick={() => back()}>
           <IoIosArrowRoundBack size={22} /> go back
          </div>
          {<>
            <h1 className='text-2xl text-white font-bold'>{project.title}</h1>
            <div className='flex flex-wrap -mx-2 my-3'>
              {project.stack.length > 0 && project.stack.map((stack: string, index) => (
                <span key={index} className="p-2">
                  <span className='bg-zinc-800 text-white px-4 py-1.5 uppercase font-medium rounded-full text-xs'>{stack}</span>
                </span>
              ))}
            </div>
            <div>
              <li className='text-orange-500'>
                <a href={project.link} className="text-orange-500 capitalize" target="_blank">live demo</a>
              </li>
              <li className='text-orange-500'>
                <a href={project.code} className="text-orange-500 capitalize" target="_blank">source code</a>
              </li>
            </div>
            <p className='text-gray-400 mt-3'>{project.description}</p>
          </>}
          
        </div>
        <Footer />
        </div>
    </div>
  )
}

export default project
export const getServerSideProps = ({query}: any) =>  {
      const response: Projects | any = Data.find(pro => pro.id == query.id);
      return {
        props: {
          project: response
        }
      }
}