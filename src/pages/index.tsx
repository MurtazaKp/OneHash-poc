import Link from "next/link";
import React, { useState } from "react";

// import Pricing from "@/component/plans";

const Home = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <header
        className="py-4 bg-white sm:py-5"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <a href="#" title="" className="">
                <img
                  className="w-auto h-8"
                  src="https://landingfoliocom.imgix.net/store/collection/saasui/images/logo.svg"
                  alt=""
                />
              </a>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-4 lg:ml-12">
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300"
              >
                Products
              </a>
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300"
              >
                Features
              </a>
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300"
              >
                Pricing
              </a>
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-300"
              >
                Support
              </a>
            </div>

            <div className="hidden sm:flex sm:items-center sm:justify-end sm:space-x-4 sm:ml-auto">
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring-900"
                role="button"
              >
                Start free trial
              </a>
            </div>

            <div className="flex ml-4 lg:hidden">
              <button
                type="button"
                className="inline-flex items-center p-2.5 text-gray-900 duration-200 border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transiton-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:bg-gray-900 focus:text-white"
              >
                <span
                  style={{ display: !expanded ? "inline" : "none" }}
                  aria-hidden="true"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </span>

                <span
                  style={{ display: expanded ? "inline" : "none" }}
                  aria-hidden="true"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12 overflow-hidden bg-white sm:py-16 lg:pb-20 xl:pb-48">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-12 gap-x-16">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl sm:tracking-tight">
                Discover Your Skin True Potential with SkinScope
              </h1>
              <p className="mt-6 text-lg leading-7 text-gray-700 lg:leading-8 lg:text-xl">
                Discover the potential of your skin with SkinScope Services. Our
                advanced technology and personalized solutions help you achieve
                glowing, healthy skin. Explore our tailored services and begin
                your journey to beauty today.
              </p>

              <ul className="mt-10 space-y-4">
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Personalized skincare recommendations tailored to your needs.
                </li>

                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Cutting-edge technology for accurate skin analysis and
                  progress tracking.
                </li>

                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Expert guidance from skincare professionals throughout your
                  journey.
                </li>
              </ul>
            </div>

            <div>
              <div className="relative w-full max-w-sm mx-auto">
                <div className="absolute inset-y-0 w-screen translate-y-20 left-1/2 bg-red-50 lg:left-32 lg:right-0"></div>

                <img
                  className="relative object-cover w-full max-w-xs mx-auto sm:max-w-sm rounded-2xl"
                  src="/skincare.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Choose your plan
            </h2>
            <p className="mt-5 text-lg font-normal text-gray-900 font-pj">
              Premium UI Kit, affordable for everyone
            </p>
          </div>

          <div className="grid max-w-7xl grid-cols-1 mx-auto mt-8 text-center sm:grid-cols-3 sm:mt-16 gap-y-5 gap-x-10">
            <div className="overflow-hidden bg-white border border-gray-200 rounded-2xl">
              <div className="p-6 md:p-10">
                <p className="text-lg font-bold text-gray-900 font-pj">
                  Book a Discovery Call
                </p>
                <p className="mt-4 text-base font-normal leading-7 text-gray-600 font-pj">
                  Book a Free Discovery Call and Learn about all the SkinScope
                  services today hurry
                </p>
                <p className="mt-8 text-xl font-bold text-gray-900 font-pj">
                  FREE
                </p>
                <Link
                  href="https://cal.id/murtaza/discovery-call"
                  className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    px-8
                                    py-3.5
                                    mt-10
                                    text-base
                                    font-bold
                                    text-gray-900
                                    transition-all
                                    duration-200
                                    border-2 border-gray-400
                                    rounded-xl
                                    font-pj
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                                    hover:bg-gray-900
                                    focus:bg-gray-900
                                    hover:text-white
                                    focus:text-white
                                    hover:border-gray-900
                                    focus:border-gray-900
                                "
                >
                  Book Now
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden bg-white border border-gray-200 rounded-2xl">
                <div className="p-6 md:p-10">
                  <p className="text-lg font-bold text-gray-900 font-pj">
                    Consultation call
                  </p>
                  <p className="mt-4 text-base font-normal leading-7 text-gray-600 font-pj">
                    Consultation available for you. Discover SkinScope services
                    today! book a paid call
                  </p>
                  <p className="mt-8 text-xl font-bold text-gray-900 font-pj">
                    $100
                  </p>

                  <a
                    href="https://cal.id/murtaza/counsultation"
                    title=""
                    className="
                                        relative
                                        inline-flex
                                        items-center
                                        justify-center
                                        px-8
                                        py-3.5
                                        mt-10
                                        text-base
                                        font-bold
                                        text-white
                                        transition-all
                                        duration-200
                                        bg-gray-900
                                        border border-transparent
                                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                                        font-pj
                                        hover:bg-opacity-90
                                        rounded-xl
                                    "
                    role="button"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-white border border-gray-200 rounded-2xl">
              <div className="p-6 md:p-10">
                <p className="text-lg font-bold text-gray-900 font-pj">
                  Custom call
                </p>
                <p className="mt-4 text-base font-normal leading-7 text-gray-600 font-pj">
                  Looking for custom option Book a custom call now book
                  according to your need
                </p>
                <p className="mt-8 text-xl font-bold text-gray-900 font-pj">
                  -
                </p>

                <a
                  href="#"
                  title=""
                  className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    px-8
                                    py-3.5
                                    mt-10
                                    text-base
                                    font-bold
                                    text-gray-900
                                    transition-all
                                    duration-200
                                    border-2 border-gray-400
                                    rounded-xl
                                    font-pj
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                                    hover:bg-gray-900
                                    focus:bg-gray-900
                                    hover:text-white
                                    focus:text-white
                                    hover:border-gray-900
                                    focus:border-gray-900
                                "
                  role="button"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
