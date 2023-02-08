/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
export default function Header() {
  return (
    <>
      <div
        className="
        bg-blue
        grotesk
        absolute
        top-0
        h-7
        w-full 
        text-center
        text-sm
        leading-6
        text-white
      "
      >
        Welcome User !
        <a href="/" className="pl-3 underline">
          Look for us services
        </a>
      </div>
      <header className="text-gray-600 body-font pt-6">
  <div className="container mx-auto flex flex-wrap p-5flex-col md:flex-row items-center">
  <div className="mt-4 inline-block pb-4 pr-2">
          <div className="hidden pl-14 align-middle xl:inline-block">
            <a href="#" className="pr-12 text-xl text-black">
              Home.
            </a>
            <a href="#about" className="pr-12 text-xl text-black">
              About.
            </a>
            <a href="#benefit" className="pr-12 text-xl text-black">
              Benefit.
            </a>
            <a href="#contact" className="text-xl text-black">
              Contact.
            </a>
          </div>
        </div>
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      <a href="/" className="align-middle text-3xl font-bold text-black  shadow-lg hover:scale-150 hover:rotate-180 duration-1000 easy linear
      hover:translate-x-5 hover:text-blue transition
      ">
            ReLaun
          </a>
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <Link href={'/auth/login'}>
      <button className=" shadow-lg inline-flex items-center bg-blue border-0 py-1 px-3 focus:outline-none hover:bg-white-200 hover:text-gray hover:scale-150 hover:rotate-360 transition rounded text-base mt-4 md:mt-0 text-white">Log in
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
      </Link>
    </div>
  </div>
</header>
    </>
  );
}
