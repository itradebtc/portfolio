import React from "react";
import Link from 'next/link'

async function fetchprojects(){
    const response = fetch('https://itradebtc.github.io/dentistsdata/project.json')
  
    const data = await (await response).json()
  
    return data
  }
  
  export default async function Projects() {
    const data2 = await fetchprojects()
  
  
    const projectslist = job.projects.map(projects =>(
      <section key={projects.id} className='p-4 shadow-2xl  hover:shadow-2xl'>
        <h1 className='text-xl p-3'>{projects.title}</h1>
        <Link href={`/portfolio/${projects.name}`}>
          <Image src={projects.image} width={500} height={500} alt='Picture of project'/>
        </Link>
        <div className='flex justify-between items-center py-3'>
          <h2>
            <p className='uppercase'>Created with {projects.madeWith}</p>
          </h2>
          <p className='flex justify-between items-center gap-2'>
            <a href={projects.github} target='_blank' title='View Code' className='text-[12px]' >
              Github Code
              <FaGithub size={25} className='text-green-800 hover:scale-105'/>
            </a>
            <a href={projects.site} target='_blank' title='View Site' className='text-[12px]' >
              Live Demo
              <FaShareSquare size={25} className='text-green-800 hover:scale-105' />
            </a>
          </p>
        </div>
      </section>
  ))
  return (
    <div></div>
  )
}
