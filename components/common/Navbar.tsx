import FullLogo from './FullLogo'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
// import ButtonLogin from './ButtonLogin'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menus = {
    '#': 'Menu coming soon...',
    // '/search': 'Search',
    // '/list/trending': 'Trending',
    // '/list/popular': 'Popular',
    // '/faq': 'FAQ',
  }
  return (
    <>
      <div className="px-4 sm:px-6 md:px-8">
        <div className="relative py-6 flex items-center text-slate-200 font-semibold">
          <Link href="/" passHref>
            <a className="cursor-point">
              <FullLogo className="h-8" />
            </a>
          </Link>
          <div className="flex flex-1 justify-end">
            <div className="-my-1 ml-2 -mr-1 md:hidden">
              <button
                type="button"
                className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                onClick={() => setIsOpen(true)}
              >
                <span className="sr-only">Navigation</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden md:flex items-center flex-1">
              <ul className="flex space-x-8 lg:ml-10">
                {Object.entries(menus).map(([key, value]) => {
                  return (
                    <li key={key}>
                      <a
                        className="hover:text-sky-500 dark:hover:text-sky-400"
                        href={key}
                      >
                        {value}
                      </a>
                    </li>
                  )
                })}
              </ul>
              <div className="flex flex-1 justify-end">
                {/* <ButtonLogin /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed z-50 inset-0 md:hidden"
      >
        <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" />

        <div className="fixed top-4 right-4 w-60 max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5">
          <button
            type="button"
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            onClick={() => setIsOpen(false)}
          >
            <span className="sr-only">Close navigation</span>
            <svg
              viewBox="0 0 10 10"
              className="w-2.5 h-2.5 overflow-visible"
              aria-hidden="true"
            >
              <path
                d="M0 0L10 10M10 0L0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
            </svg>
          </button>
          <ul className="space-y-6">
            {Object.entries(menus).map(([key, value]) => {
              return (
                <li key={key}>
                  <a
                    className="hover:text-sky-500 dark:hover:text-sky-400"
                    href={key}
                  >
                    {value}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-200/10">
            {/* <ButtonLogin /> */}
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default Navbar
