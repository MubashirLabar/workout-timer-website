import Link from "next/link";

export default function Home() {
  return (
    <main className="text-gray-900">
      <div
        class="h-screen pb-14 bg-right bg-cover"
        style={{ backgroundImage: `url(/bg.svg)` }}
      >
        {/* Navbar */}
        <div className="w-full container mx-auto p-3">
          <div className="w-full flex items-center justify-between">
            <Link href={"/"}>
              <img
                src="/logo.svg"
                className="w-[150px] md:w-[180px] absolute"
              />
            </Link>
          </div>
        </div>

        {/* Main */}
        <div className="container px-6 mx-auto mt-36 sm:mt-40 xl:mt-0 flex flex-wrap flex-col md:flex-row items-center">
          {/* Left Side */}
          <div className="flex flex-col w-full xl:w-2/5  justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-8xl uppercase text-primary-700 font-bold text-center md:text-left">
              Workout With Me
            </h1>
            <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left text-gray-700">
              Interval Training Timer perfect for HIIT Circuit and Tabata
              Workouts
            </p>

            <p className="text-secondary-700 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">
              Download our app:
            </p>
            <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
              {/* <img
                src="/app-store.svg"
                className="h-12 pr-4 bounce-top-icons"
              /> */}
              <a
                href="https://play.google.com/store/apps/details?id=com.zeezsoft.workouttimer"
                target="_blank"
              >
                <img src="/play-store.svg" className="h-12 bounce-top-icons" />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div class="w-full xl:w-3/5 overflow-hidden">
            <img
              class="h-full lg:h-[900px] w-full mx-auto lg:mr-0"
              src="/vector.svg"
            />
          </div>

          {/* Footer */}
          <div class="w-full flex items-center pb-8 text-sm text-center md:text-left fade-in">
            <div class="flex-1 text-gray-500 no-underline hover:no-underline">
              &copy; 2023, Workout Timer
            </div>
            <div className="flex items-center gap-x-8">
              <Link href={"/privacy"} className="text-gray-500">
                Privacy
              </Link>
              {/* <Link href={"/"} className="text-gray-500">
                Contact Us
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
