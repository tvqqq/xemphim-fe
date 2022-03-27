import Image from 'next/image'

// type Movie = {
//   data: {
//     info: {
//       title: string
//     }
//   }
// }

const MovieComponent = ({ data }) => {
  return (
    <>
      <div className="relative">
        <div
          className="bg-cover opacity-30 h-80 lg:h-96 bg-top"
          style={{
            backgroundImage: `url(${
              process.env.NEXT_PUBLIC_TMDB_IMG +
              '/original' +
              data.info.backdrop_path
            })`,
          }}
        ></div>
        <div className="absolute w-full px-4 lg:px-0 mx-0 mt-10 lg:mt-0 top-0 space-y-24 lg:grid lg:grid-cols-12 lg:items-center">
          <div className="relative row-start-1 col-start-1 xl:col-start-3 col-span-7 xl:col-span-6">
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-left text-white">
              {data.info.title}
            </h1>
            <h2 className="text-2xl text-left text-gray-400">
              {data.info.tagline}
            </h2>
            {/* <p className="mt-6 text-lg max-w-3xl mx-auto text-slate-400">
              <span>1 giờ 46 phút</span>
            </p> */}
            <div className="flex justify-between mt-6">
              <a href={`/movie/${data.id}/watch`} className="group flex">
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
          </div>
          <div className="hidden lg:block lg:relative row-start-1 col-start-1 col-span-3 xl:col-span-3">
            <div className="w-96 drop-shadow-xl">
              <Image
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
                src={`${process.env.NEXT_PUBLIC_TMDB_IMG}/w500${data.info.poster_path}`}
                alt={data.info.title}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 my-14 text-slate-200 text-lg">
          <div className="grid grid-cols-1 grid-flow-row lg:grid-flow-col lg:grid-cols-3">
            <div className="grid grid-cols-5 uppercase">
              <div className="col-span-2 uppercase font-bold">
                <div className="mb-2">Release Date</div>
                <div>Revenue</div>
              </div>
              <div className="col-span-2">
                <div className="mb-2">{data.info.release_date}</div>
                <div>{data.info.revenue}</div>
              </div>
            </div>
            <div className="grid grid-cols-5 my-2 lg:my-0">
              <div className="col-span-2 uppercase font-bold">
                <div className="mb-2">Directors</div>
                <div>Writers</div>
              </div>
              <div className="col-span-2">
                <div className="mb-2">{data.credits.directors.join(', ')}</div>
                <div>{data.credits.writers.join(', ')}</div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-slate-300">{data.info.overview}</div>

          <div className="mt-10 text-slate-300">
            <div className="text-2xl font-semibold uppercase border-b border-slate-500 inline-block mb-5">
              Casts
            </div>
            <div className="grid grid-flow-row grid-cols-2 lg:grid-cols-6 gap-10">
              {data.credits.casts.map((cast) => (
                <a href="#" className="" key={cast.id}>
                  <Image
                    width="200"
                    height="200"
                    layout="responsive"
                    objectFit="cover"
                    src={`${process.env.NEXT_PUBLIC_TMDB_IMG}/w500${cast.profile_path}`}
                    alt={cast.name}
                    className="rounded-full"
                  />
                  <div className="text-center">
                    <p className="text-xl text-slate-50 leading-7">
                      {cast.name}
                    </p>
                    <p className="text-base text-slate-400">{cast.character}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 text-slate-300">
            <div className="text-2xl font-semibold uppercase border-b border-slate-500 inline-block mb-5">
              Trailers
            </div>
            <p>Coming soon...</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 my-20">
          <div className="flex justify-between items-center pb-3 border-solid border-slate-700 border-b">
            <div className="text-xl sm:text-4xl font-extrabold tracking-tight text-slate-50 uppercase">
              You may also like...
            </div>
          </div>
          <div className="grid grid-flow-row grid-cols-2 lg:grid-cols-4 gap-1 py-10">
            {data.recommendations.map((movie) => (
              <a href={`/movie/${movie.id}`} className="group" key={movie.id}>
                <div className="w-full drop-shadow-sm transform group-hover:opacity-80 group-hover:scale-95">
                  <Image
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="contain"
                    src={`${process.env.NEXT_PUBLIC_TMDB_IMG}/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
                <div className="text-center">
                  <p className="text-xl text-slate-50 leading-10 group-hover:text-red-300">
                    {movie.title}
                  </p>
                  <p className="text-md text-slate-300">{movie.release_date}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieComponent
