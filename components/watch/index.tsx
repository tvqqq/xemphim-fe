const WatchComponent = () => {
  return (
    <>
      <div className="w-full" style={{ height: '80vh' }}>
        <iframe
          id="iframe"
          src="https://www.2embed.ru/embed/tmdb/movie?id=951368"
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>

      <div className="block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 my-14 text-slate-200 text-lg">
          <div>Trở về trang giới thiệu phim</div>
          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-left text-white">
            SPiderman: No -way home
          </h1>
          <h2 className="text-2xl tracking-tight text-left text-gray-400">
            SPiderman: No -way home (tiếng anh)
          </h2>
          <div className="flex justify-around">
            <a className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-20 flex items-center justify-center sm:w-auto bg-sky-500 highlight-white/20 hover:bg-sky-400">
              Tập 1
            </a>
            <a className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-20 flex items-center justify-center sm:w-auto bg-sky-500 highlight-white/20 hover:bg-sky-400">
              Tập 2
            </a>
            <a className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-20 flex items-center justify-center sm:w-auto bg-sky-500 highlight-white/20 hover:bg-sky-400">
              Tập 2
            </a>
            <a className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-20 flex items-center justify-center sm:w-auto bg-sky-500 highlight-white/20 hover:bg-sky-400">
              Tập 2
            </a>
            <a className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-20 flex items-center justify-center sm:w-auto bg-sky-500 highlight-white/20 hover:bg-sky-400">
              Tập 2
            </a>
            <a className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-20 flex items-center justify-center sm:w-auto bg-sky-500 highlight-white/20 hover:bg-sky-400">
              Tập 2
            </a>
          </div>
          <div className="mt-10 text-slate-300">
            <div className="text-2xl font-semibold uppercase border-b border-slate-500 inline-block mb-5">
              Bình luận phim
            </div>
            <p>Coming soon...</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default WatchComponent
