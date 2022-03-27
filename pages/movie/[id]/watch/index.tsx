import type { NextPage } from 'next'
import Head from 'next/head'
import WatchComponent from '../../../../components/watch'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'

const Watch: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Watch {data.info.title} | XemPhim - QeoQeo</title>
      </Head>
      <WatchComponent data={data} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + '/movie/' + ctx.params?.id ?? 0
  )
  const data = await res.json()

  return { props: { data } }
}

export default Watch
