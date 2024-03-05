import Link from "next/link";
import React from "react";

const success = () => {
  return (
    <div>
      <section className="relative py-12 h-screen bg-gray-900 sm:py-16 lg:py-20 xl:py-32">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full"
            src="https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>

        <div className="absolute inset-0 bg-gray-900/50"></div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Your Booking is Successful
            </h2>
            <p className="mt-4 text-base font-normal leading-7 text-white sm:mt-6">
              Please Check Your Email for more details
            </p>

            <div className="mt-8 sm:mt-10">
              <Link
                href="/"
                title=""
                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold leading-7 text-gray-900 transition-all duration-200 bg-white border border-transparent rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                role="button"
              >
                Go to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default success;
