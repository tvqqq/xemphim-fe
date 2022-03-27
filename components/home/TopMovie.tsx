import Image from 'next/image'

const TopMovie = ({ data }: { data: any }) => {
  return (
    <div className="max-w-7xl px-4 sm:px-6 md:px-8 lg:grid lg:gap-8 lg:grid-cols-12 lg:items-center mx-auto text-center">
      <div className="relative row-start-1 col-start-1 xl:col-start-3 col-span-7 xl:col-span-6">
        <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            {data.name}
          </span>
        </h1>
        <p className="text-lg text-center mx-auto text-slate-400 my-5">
          {data.overview}
        </p>
        <a href={`/movie/${data.id}`} className="group">
          <div className="w-48 inline-flex items-center justify-center text-purple-900 group-hover:text-purple-500 font-medium leading-none bg-white rounded-lg shadow-sm group-hover:shadow-lg py-2 px-5 border border-transparent transform-gpu group-hover:-translate-y-0.5 transition-all duration-150 mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="24"
              height="24"
              className=" text-purple-600 mr-3 text-opacity-50 transform"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>
            <span>Watch Movie</span>
          </div>
        </a>
      </div>
      <div className="relative row-start-1 col-start-1 col-span-3 xl:col-span-3">
        <div className="w-80 drop-shadow-xl mx-auto text-center mt-3 lg:mt-0">
          <Image
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            src={`${process.env.NEXT_PUBLIC_TMDB_IMG}/w500${data.poster_path}`}
            alt="The Adam Project"
          />
        </div>
      </div>
    </div>
  )
}

export default TopMovie
