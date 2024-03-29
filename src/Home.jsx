import Navigation from "./Nav";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const email = "jakub.purczynski@onet.pl";
  const phoneNumber = "+48 785 748 978";

  return (
    <div className="">
      <Navigation />
      <div className="bg-dataS md:bg-cover xl:bg-repeat-round min-h-screen	mx-auto sm:py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-red-100 mb-2 p-8  animate-bounce">
          Welcome to my Portfolio
        </h2>

        <div className="border-2 border-gray-400 rounded-lg  bg-slate-800 w-80 lg:w-1/3 mx-auto ">
          <h1 className="text-4xl font-bold text-center text-white mb-8 p-8">
            Jakub Purczyński
          </h1>
          <div className="flex justify-center py-10  ">
            <a
              href="https://github.com/xenoxkuba?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 text-gray-200"
            >
              <FaGithub size="4rem" />
            </a>
            <a
              href="https://www.linkedin.com/in/jakub-purczy%C5%84ski-bb9ab2255/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 text-gray-200"
            >
              <FaLinkedin size="4rem" />
            </a>
          </div>
          <div className="flex justify-center  pb-4 pt-6 text-gray-200">
            <FaEnvelope size="1.5em" className="mr-4" />
            <p>{email}</p>
          </div>
          <div className="flex justify-center  pb-8 text-gray-200">
            <p>{phoneNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
