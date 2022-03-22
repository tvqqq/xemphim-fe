import FullLogo from './FullLogo'

const Navbar = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8">
      <div className="relative pt-6 lg:pt-8 flex items-center justify-end lg:justify-start text-slate-200 font-semibold">
        <FullLogo className="h-8" />
        <div className="flex items-center">
          {/* TODO: Mobile button */}
          <ul className="flex items-center space-x-8 lg:ml-10">
            <li>
              <a
                className="hover:text-sky-500 dark:hover:text-sky-400"
                href="/docs/installation"
              >
                Docs
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com"
                className="hover:text-sky-500 dark:hover:text-sky-400"
              >
                Components
              </a>
            </li>
            <li>
              <a
                className="hover:text-sky-500 dark:hover:text-sky-400"
                href="/blog"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-1 justify-end">
          <a className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto bg-sky-500 highlight-white/20 hover:bg-sky-400">
            Button login
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
