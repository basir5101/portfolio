import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import CommonLayout from '../components/layouts/CommonLayout'
import MyProjects from '../components/MyProjects'
import ProjectCompleted from '../components/ProjectsCompleted'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <CommonLayout >
      <Banner />
      <MyProjects />
      <Skills />
      <ProjectCompleted />

    </CommonLayout>
  )
}
