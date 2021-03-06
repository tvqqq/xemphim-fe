import Image from 'next/image'

const ListMovies = ({ data }: { data: any }) => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8  my-20">
        <div className="flex justify-between items-center pb-3 border-solid border-slate-700 border-b">
          <div className="text-xl sm:text-4xl font-extrabold tracking-tight text-slate-50 uppercase">
            What to watch
          </div>
          <a
            className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-700 focus:ring-indigo-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500"
            href="#"
          >
            Watch more
            <span className="sr-only">, utility-first fundamentals</span>
            <svg
              className="overflow-visible ml-3 text-indigo-300 group-hover:text-indigo-400 dark:text-slate-500 dark:group-hover:text-slate-400"
              width="3"
              height="6"
              viewBox="0 0 3 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0L3 3L0 6"></path>
            </svg>
          </a>
        </div>
        <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 gap-5 mt-10">
          {data.map((movie: any) => (
            <a
              href={`/movie/${movie.id}`}
              className="group mb-10"
              key={movie.id}
            >
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
                <p className="text-xl text-slate-50 group-hover:text-red-300 mt-4 mb-2">
                  {movie.name}
                </p>
                <p className="text-md text-slate-300">{movie.release_date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ListMovies
