import type { NextPage } from 'next'
import Head from 'next/head'
import HomeComponent from '../components/home'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'

const Home: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Home | XemPhim - QeoQeo</title>
      </Head>
      <HomeComponent data={data} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/lists/homepage')
  const data = await res.json()

  return { props: { data } }
}

export default Home
