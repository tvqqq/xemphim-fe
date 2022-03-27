import type { NextPage } from 'next'
import MovieComponent from '../../../components/movie'
import { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Head from 'next/head'

const Movie: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>{data.info.title} | XemPhim - QeoQeo</title>
      </Head>
      <MovieComponent data={data} />
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

export default Movie
