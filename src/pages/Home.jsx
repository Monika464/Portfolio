import React from "react";

const Home = () => {
  return (
    <div className="h-screen w-screen p-4">
      <div className="text-xl mb-4">Projekty z Home - Content</div>

      {/* Kontener z wierszami */}
      <div className="space-y-4">
        {/* Wiersz 1 */}
        <div className="flex flex-row items-center space-x-4">
          <div className="w-1/2 bg-zinc-100 h-60 flex items-center justify-center">
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
          <div className="w-1/2 bg-zinc-100 h-60 flex items-center justify-center">
            opis1
          </div>
        </div>

        {/* Wiersz 2 */}
        <div className="flex flex-row items-center space-x-4">
          <div className="w-1/2 bg-gray-200 h-60 flex items-center justify-center">
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
          <div className="w-1/2 bg-gray-100 h-60 flex items-center justify-center">
            opis2
          </div>
        </div>

        {/* Wiersz 3 */}
        <div className="flex flex-row items-center space-x-4">
          <div className="w-1/2 bg-gray-200 h-60 flex items-center justify-center">
            <iframe
              src="https://player.vimeo.com/video/1041230673"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Film 2"
            ></iframe>
          </div>
          <div className="w-1/2 bg-gray-100 h-60 flex items-center justify-center">
            opis3
          </div>
        </div>

        {/* Wiersz 4 */}
        <div className="flex flex-row items-center space-x-4">
          <div className="w-1/2 bg-gray-200 h-60 flex items-center justify-center">
            film4
          </div>
          <div className="w-1/2 bg-gray-100 h-60 flex items-center justify-center">
            opis4
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// import React from "react";

// const Home = () => {
//   return (
//     <div className="h-screen w-screen inline">
//       <div className="text-xl">projekty z home - content</div>
//       <div>
//         <div>film1</div>
//         <div>opis1</div>
//       </div>
//       <div>
//         <div>film2</div>
//         <div>opis2</div>
//       </div>
//       <div>
//         <div>film3</div>
//         <div>opis3</div>
//       </div>
//       <div>
//         <div>film4</div>
//         <div>opis4</div>
//       </div>
//     </div>
//   );
// };

// export default Home;
