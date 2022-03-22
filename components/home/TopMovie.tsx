import Image from 'next/image'

const TopMovie = () => {
  return (
    <div className="max-w-7xl px-4 sm:px-6 md:px-8 lg:grid lg:gap-8 lg:grid-cols-12 lg:items-center">
      <div className="relative row-start-1 col-start-1 xl:col-start-3 col-span-7 xl:col-span-6">
        <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center text-white">
          SPiderman: No -way home
        </h1>
        <p className="mt-6 text-lg text-center max-w-3xl mx-auto text-slate-400">
          A utility-first CSS framework packed with classes likemô tả dài dài
        </p>
        <a className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-20 flex items-center justify-center sm:w-auto bg-sky-500 highlight-white/20 hover:bg-sky-400">
          Xem phim
        </a>
      </div>
      <div className="relative row-start-1 col-start-1 col-span-3 xl:col-span-3">
        <div className="w-80 drop-shadow-xl">
          <Image
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
            src="https://image.tmdb.org/t/p/w500/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg"
            alt="The Adam Project"
          />
        </div>
      </div>
    </div>
  )
}

export default TopMovie
