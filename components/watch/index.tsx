const WatchComponent = ({ data }: { data: any }) => {
  return (
    <>
      <div className="w-full" style={{ height: '80vh' }}>
        <iframe
          id="iframe"
          src={`https://www.2embed.ru/embed/tmdb/movie?id=${data.id}`}
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>

      <div className="block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-10 mb-5 text-slate-200 text-lg">
          <a
            href={`/movie/${data.id}`}
            className="underline text-sm flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>{' '}
            Back to movie detail
          </a>
          <h1 className="mt-5 font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-left text-white">
            {data.info.title}
          </h1>

          <div className="mt-10 text-slate-300">
            <div className="text-2xl font-semibold uppercase border-b border-slate-500 inline-block mb-5">
              Comments
            </div>
            <p>Coming soon...</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default WatchComponent
