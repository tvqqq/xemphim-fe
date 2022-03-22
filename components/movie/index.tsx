import Image from 'next/image'

const MovieComponent = () => {
  return (
    <>
      <div className="relative">
        <div
          className="bg-cover bg-[url('https://image.tmdb.org/t/p/original/kfUWupX3phYp7AleZA2U1dmVcjX.jpg')] opacity-30"
          style={{ height: '60vh' }}
        ></div>
        <div className="absolute top-0 space-y-48 max-w-7xl px-4 sm:px-6 md:px-8 lg:grid lg:gap-8 lg:grid-cols-12 lg:items-center">
          <div className="relative row-start-1 col-start-1 xl:col-start-3 col-span-7 xl:col-span-6">
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-left text-white">
              SPiderman: No -way home
            </h1>
            <h2 className="text-2xl tracking-tight text-left text-gray-400">
              SPiderman: No -way home (tiếng anh)
            </h2>
            <p className="mt-6 text-lg max-w-3xl mx-auto text-slate-400">
              1 giờ 46 phút PG-13
            </p>
            <div className="flex justify-around">
              <a className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-20 flex items-center justify-center sm:w-auto bg-sky-500 highlight-white/20 hover:bg-sky-400">
                Xem phim
              </a>
              <a className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-20 flex items-center justify-center sm:w-auto bg-sky-500 highlight-white/20 hover:bg-sky-400">
                Chia sẻ
              </a>
            </div>
          </div>
          <div className="relative row-start-1 col-start-1 col-span-3 xl:col-span-3">
            <div className="w-96 drop-shadow-xl">
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
      </div>

      <div className="block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 my-14 text-slate-200 text-lg">
          <div className="grid grid-cols-3">
            <div className="grid grid-cols-5">
              <div className="col-span-2 uppercase font-bold">
                <div className="mb-2">Đạo diễn</div>
                <div>Biên kịch</div>
              </div>
              <div className="col-span-3">
                <div className="mb-2">2312234234n</div>
                <div>dsdsdms,s</div>
              </div>
            </div>
            <div className="grid grid-cols-5 uppercase">
              <div className="col-span-2 uppercase font-bold">
                <div className="mb-2">Đạo diễn2</div>
                <div>Biên kịch2</div>
              </div>
              <div className=" col-span-3">
                <div className="mb-2">2312234234n</div>
                <div>dsdsdms,s</div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-slate-300">
            Sau khi gặp tai nạn rơi máy bay vào năm 2022, phi công chiến cơ du
            hành thời gian Adam Reed bắt tay với chính mình lúc 12 tuổi trong
            nhiệm vụ cứu tương lai.
          </div>

          <div className="mt-10 text-slate-300">
            <div className="text-2xl font-semibold uppercase border-b border-slate-500 inline-block mb-5">
              Diễn viên
            </div>
            <div className="grid grid-flow-col grid-cols-6 gap-10">
              <a href="#" className="">
                <Image
                  width="200"
                  height="200"
                  layout="responsive"
                  src="https://image.tmdb.org/t/p/w500/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg"
                  alt="The Adam Project"
                  className="rounded-full"
                />
                <div className="text-center">
                  <p className="text-xl text-slate-50 leading-7">Ryan</p>
                  <p className="text-base text-slate-400">Ryandfjsk</p>
                </div>
              </a>
              <a href="#" className="">
                <Image
                  width="200"
                  height="200"
                  layout="responsive"
                  src="https://image.tmdb.org/t/p/w500/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg"
                  alt="The Adam Project"
                  className="rounded-full"
                />
                <div className="text-center">
                  <p className="text-xl text-slate-50 leading-7">Ryan</p>
                  <p className="text-base text-slate-400">Ryandfjsk</p>
                </div>
              </a>
              <a href="#" className="">
                <Image
                  width="200"
                  height="200"
                  layout="responsive"
                  src="https://image.tmdb.org/t/p/w500/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg"
                  alt="The Adam Project"
                  className="rounded-full"
                />
                <div className="text-center">
                  <p className="text-xl text-slate-50 leading-7">Ryan</p>
                  <p className="text-base text-slate-400">Ryandfjsk</p>
                </div>
              </a>
              <a href="#" className="">
                <Image
                  width="200"
                  height="200"
                  layout="responsive"
                  src="https://image.tmdb.org/t/p/w500/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg"
                  alt="The Adam Project"
                  className="rounded-full"
                />
                <div className="text-center">
                  <p className="text-xl text-slate-50 leading-7">Ryan</p>
                  <p className="text-base text-slate-400">Ryandfjsk</p>
                </div>
              </a>
              <a href="#" className="">
                <Image
                  width="200"
                  height="200"
                  layout="responsive"
                  src="https://image.tmdb.org/t/p/w500/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg"
                  alt="The Adam Project"
                  className="rounded-full"
                />
                <div className="text-center">
                  <p className="text-xl text-slate-50 leading-7">Ryan</p>
                  <p className="text-base text-slate-400">Ryandfjsk</p>
                </div>
              </a>
              <a href="#" className="">
                <Image
                  width="200"
                  height="200"
                  layout="responsive"
                  src="https://image.tmdb.org/t/p/w500/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg"
                  alt="The Adam Project"
                  className="rounded-full"
                />
                <div className="text-center">
                  <p className="text-xl text-slate-50 leading-7">Ryan</p>
                  <p className="text-base text-slate-400">Ryandfjsk</p>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-10 text-slate-300">
            <div className="text-2xl font-semibold uppercase border-b border-slate-500 inline-block mb-5">
              Trailer
            </div>
            <p>Coming soon...</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 my-20">
          <div className="flex justify-between items-center pb-3 border-solid border-slate-700 border-b">
            <div className="text-xl sm:text-4xl font-extrabold tracking-tight text-slate-50 uppercase">
              Phim tương tự
            </div>
            <a
              className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-700 focus:ring-indigo-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500"
              href="/docs/utility-first"
            >
              Learn more
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
          <div className="grid grid-flow-col grid-cols-4 gap-1 py-10">
            <div>
              <div className="w-full drop-shadow-sm">
                <Image
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                  src="https://image.tmdb.org/t/p/w500/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg"
                  alt="The Adam Project"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-slate-50">Spiderman 23</p>
                <p className="text-md text-slate-300">english name</p>
              </div>
            </div>
            <div>
              <div className="w-full drop-shadow-sm">
                <Image
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                  src="https://image.tmdb.org/t/p/w500/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg"
                  alt="The Adam Project"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-slate-50">Spiderman 23</p>
                <p className="text-md text-slate-300">english name</p>
              </div>
            </div>
            <div>
              <div className="w-full drop-shadow-sm">
                <Image
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                  src="https://image.tmdb.org/t/p/w500/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg"
                  alt="The Adam Project"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-slate-50">Spiderman 23</p>
                <p className="text-md text-slate-300">english name</p>
              </div>
            </div>
            <a href="#" className="group">
              <div className="w-full drop-shadow-sm transform group-hover:opacity-80  group-hover:scale-95">
                <Image
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                  src="https://image.tmdb.org/t/p/w500/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg"
                  alt="The Adam Project"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-slate-50 leading-10 group-hover:text-red-300">
                  Không có lời tạm biệt
                </p>
                <p className="text-md text-slate-300">
                  Without Saying GoodbyeWithout Saying Goodbye
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieComponent
