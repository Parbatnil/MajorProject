import React from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";

const Feedback = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-gray-100 py-16 px-8 relative">
      <div className="absolute bg-pink-300 rounded-full w-64 h-64 top-8 -left-16 opacity-40"></div>
      <div className="absolute bg-green-300 rounded-full w-48 h-48 bottom-5 -right-0 opacity-40"></div>
      <div className="absolute bg-yellow-300 rounded-full w-16 h-16 bottom-80 -right-0 opacity-80 z-100 flex items-center justify-center">
        <MdOutlineVerifiedUser className="text-white text-3xl" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="col-span-1 flex flex-col justify-center relative z-10">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            Valuable Feedback from Our Students
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Hear what our students have to say about their learning journey and the impact it has made on their future.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg shadow-lg hover:bg-blue-500 transition duration-300">
            View All Reviews
          </button>
        </div>

        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 shadow-2xl rounded-3xl relative hover:scale-105 transition-transform duration-300">
            <img
              className="w-20 h-20 rounded-full border-4 border-white absolute -top-10 left-6"
              src="https://themes.stackbros.in/eduport_r/assets/01-7N0KytgQ.jpg"
              alt="student"
            />
            <p className="text-gray-700 mt-10 text-lg">
              “Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen noisy young. At weddings believed laughing “
            </p>
            <div className="mt-6 flex items-center">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
              <FaStar className="text-gray-300" />
            </div>
            <p className="font-semibold mt-4 text-xl">Carolyn Ortiz</p>
          </div>

          <div className="bg-blue-600 text-white p-8 shadow-2xl rounded-3xl text-center h-40 w-60">
            <h3 className="text-4xl font-bold">4.5/5.0</h3>
            <p className="mt-4 text-lg">Based on 3265 ratings</p>
          </div>

          <div className="bg-white p-8 shadow-2xl rounded-3xl relative hover:scale-105 transition-transform duration-300">
            <img
              className="w-20 h-20 rounded-full border-4 border-white absolute -top-10 left-6"
              src="https://themes.stackbros.in/eduport_r/assets/03-gME39Lw5.jpg"
              alt="student"
            />
            <p className="text-gray-700 mt-10 text-lg">
              “ At weddings believed laughing although the Moonlight newspaper up its enjoyment agreeable depending. ”
            </p>
            <div className="mt-6 flex items-center">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
              <FaStar className="text-gray-300" />
            </div>
            <p className="font-semibold mt-4 text-xl">Dennis Barrett</p>
          </div>

          <div className="bg-white p-8 shadow-2xl rounded-3xl z-50">
            <h3 className="font-bold text-2xl mb-6">100+ Verified Mentors</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://themes.stackbros.in/eduport_r/assets/09-1AM4Ze_z.jpg"
                  alt="mentor"
                />
                <p className="text-lg">Lori Stevens - Tutor of Physics</p>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://themes.stackbros.in/eduport_r/assets/04-Axz2kzOk.jpg"
                  alt="mentor"
                />
                <p className="text-lg">Billy Vasquez - Tutor of Chemistry</p>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="	https://themes.stackbros.in/eduport_r/assets/02-Dm08lEkH.jpg"
                  alt="mentor"
                />
                <p className="text-lg">Larry Lawson - Tutor of Technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
