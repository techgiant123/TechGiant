import ProfilePic from "../../icons/profileIcon"
const FeedbackApp: React.FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-[70px] w-[70px] rounded-full bg-sky-500 transition-all duration-1000 group-hover:scale-[20]"></span>
        <div className="relative z-10 mx-auto max-w-md">
          <div className="flex flex-row">
            <span className="grid h-[70px] w-[70px] place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                <ProfilePic className="h-10 w-10 text-white transition-all" fill="white"/>
            </span>

            <div className="pt-5 text-base font-semibold leading-7">
              <p>
                <a
                  href="#"
                  className="text-sky-500 transition-all duration-300 group-hover:text-white"
                >
                  Read the docs &rarr;
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
            <p>
              "The training program exceeded my expectations. The instructors
              were highly knowledgeable, and the hands-on approach helped me
              solidify my skills in software testing."
            </p>
          </div>
          <div className="pt-5 text-base font-semibold leading-7">
            {/* <p>
                    <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">Read the docs
                        &rarr;
                    </a>
                </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackApp;
