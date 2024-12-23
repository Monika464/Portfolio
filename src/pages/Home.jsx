import React from "react";
import { textContent } from "./texthome";

const Home = () => {
  return (
    <div className="space-y-6 mt-12">
      {/* Wiersz 1 */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
        {/* Ramka filmu */}
        <div className="w-full sm:w-1/2 bg-zinc-100 flex items-center justify-center h-96">
          <iframe
            src="https://player.vimeo.com/video/1041227479"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Film 1"
          ></iframe>
        </div>
        {/* Ramka tekstu */}
        {/* <div className="w-full sm:w-1/2 bg-gray-100 flex items-center justify-center h-96 p-4"> */}

        <div className="w-full sm:w-1/2 bg-gray-100 items-center justify-center h-96 p-4">
          <div className="w-full max-w-md border border-gray-300 rounded-lg shadow-md p-4 mt-8 bg-white">
            <h3 className="text-xl font-bold text-gray-800 p-2">
              {textContent[1].title}
            </h3>
            <p className="text-justify text-gray-700 p-2">
              {textContent[1].body}
            </p>

            <p className="text-base font-semibold text-gray-500 p-2">
              Technology: {textContent[1].tech}
            </p>
            <p className="text-sm font-semibold text-blue-500 hover:underline p-2">
              <a
                href="https://github.com/Monika464/Club-Management-App"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Wiersz 2 */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <div className="w-full sm:w-1/2 bg-gray-200 flex items-center justify-center h-96">
          <iframe
            src="https://player.vimeo.com/video/1041228725"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Film 2"
          ></iframe>
        </div>

        <div className="w-full sm:w-1/2 bg-gray-100 items-center justify-center h-96 p-4">
          <div className="w-full max-w-md border border-gray-300 rounded-lg shadow-md p-4 mt-8 bg-white">
            <h3 className="text-xl font-bold text-gray-800 p-2">
              {textContent[1].title}
            </h3>
            <p className="text-justify text-gray-700 p-2">
              {textContent[1].body}
            </p>

            <p className="text-base font-semibold text-gray-500 p-2">
              Technology: {textContent[1].tech}
            </p>
            <p className="text-sm font-semibold text-blue-500 hover:underline p-2">
              <a
                href="https://github.com/Monika464/Club-Management-App"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Wiersz 3 */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <div className="w-full sm:w-1/2 bg-gray-200 flex items-center justify-center h-96">
          <iframe
            src="https://player.vimeo.com/video/1041230673"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Film 3"
          ></iframe>
        </div>

        <div className="w-full sm:w-1/2 bg-gray-100 items-center justify-center h-96 p-4">
          <div className="w-full max-w-md border border-gray-300 rounded-lg shadow-md p-4 mt-8 bg-white">
            <h3 className="text-xl font-bold text-gray-800 p-2">
              {textContent[1].title}
            </h3>
            <p className="text-justify text-gray-700 p-2">
              {textContent[1].body}
            </p>

            <p className="text-base font-semibold text-gray-500 p-2">
              Technology: {textContent[1].tech}
            </p>
            <p className="text-sm font-semibold text-blue-500 hover:underline p-2">
              <a
                href="https://github.com/Monika464/Club-Management-App"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Wiersz 4 */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <div className="w-full sm:w-1/2 bg-gray-200 flex items-center justify-center h-96">
          <iframe
            src="https://player.vimeo.com/video/1041583293"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Film 4"
          ></iframe>
        </div>

        <div className="w-full sm:w-1/2 bg-gray-100 items-center justify-center h-96 p-4">
          <div className="w-full max-w-md border border-gray-300 rounded-lg shadow-md p-4 mt-8 bg-white">
            <h3 className="text-xl font-bold text-gray-800 p-2">
              {textContent[1].title}
            </h3>
            <p className="text-justify text-gray-700 p-2">
              {textContent[1].body}
            </p>

            <p className="text-base font-semibold text-gray-500 p-2">
              Technology: {textContent[1].tech}
            </p>
            <p className="text-sm font-semibold text-blue-500 hover:underline p-2">
              <a
                href="https://github.com/Monika464/Club-Management-App"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="h-6 bg-slate-300 text-slate-300">aa</div>
    </div>
  );
};

export default Home;
