import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner'
import CommonLayout from '../components/layouts/CommonLayout'
import MyProjects from '../components/MyProjects'


export default function Home() {
  return (
    <CommonLayout >
      <Banner />
      <MyProjects />
    </CommonLayout>
  )
}
