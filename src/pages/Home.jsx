import React from "react";

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
        <div className="w-full sm:w-1/2 bg-gray-100 flex items-center justify-center h-96 p-4">
          <p className="text-justify">
            nceptos ligula ante diam est taciti rutrum. Ultricies nisl pharetra
            sed posuere etiam. Commodo consectetur nunc tincidunt mi purus fusce
            purus amet. Montes bibendum ridiculus rutrum; habitasse hac a. Ut
            montes etiam sit, conubia dignissim dui. Platea purus lobortis erat
            consequat odio ultricies maecenas accumsan. Diam taciti interdum
            ornare fermentum curabitur; cursus vivamus habitasse? Amet maecenas
            massa hendrerit lacus euismod fermentum suscipit scelerisque? Semper
            varius mi eget nec adipiscing pretium. Tortor ad tristique convallis
            fusce sodales nascetur est eget.
          </p>
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
        <div className="w-full sm:w-1/2 bg-gray-100 flex items-center justify-center h-96 p-4">
          <p className="text-justify">
            nceptos ligula ante diam est taciti rutrum. Ultricies nisl pharetra
            sed posuere etiam. Commodo consectetur nunc tincidunt mi purus fusce
            purus amet. Montes bibendum ridiculus rutrum; habitasse hac a. Ut
            montes etiam sit, conubia dignissim dui. Platea purus lobortis erat
            consequat odio ultricies maecenas accumsan. Diam taciti interdum
            ornare fermentum curabitur; cursus vivamus habitasse? Amet maecenas
            massa hendrerit lacus euismod fermentum suscipit scelerisque? Semper
            varius mi eget nec adipiscing pretium. Tortor ad tristique convallis
            fusce sodales nascetur est eget.
          </p>
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
        <div className="w-full sm:w-1/2 bg-gray-100 flex items-center justify-center h-96 p-4">
          <p className="text-justify">
            nceptos ligula ante diam est taciti rutrum. Ultricies nisl pharetra
            sed posuere etiam. Commodo consectetur nunc tincidunt mi purus fusce
            purus amet. Montes bibendum ridiculus rutrum; habitasse hac a. Ut
            montes etiam sit, conubia dignissim dui. Platea purus lobortis erat
            consequat odio ultricies maecenas accumsan. Diam taciti interdum
            ornare fermentum curabitur; cursus vivamus habitasse? Amet maecenas
            massa hendrerit lacus euismod fermentum suscipit scelerisque? Semper
            varius mi eget nec adipiscing pretium. Tortor ad tristique convallis
            fusce sodales nascetur est eget.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

// import React from "react";

// const Home = () => {
//   return (
//     <div className="space-y-6">
//       {/* Wiersz 1 */}
//       <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
//         <div className="w-full sm:w-3/5 bg-zinc-100 h-96 flex items-center justify-center">
//           <iframe
//             src="https://player.vimeo.com/video/1041227479"
//             width="100%"
//             height="100%"
//             frameBorder="0"
//             allow="autoplay; fullscreen; picture-in-picture"
//             allowFullScreen
//             title="Film 1"
//           ></iframe>
//         </div>
//         <div className="w-full sm:w-2/5 bg-gray-100 h-auto p-6">
//           <p className="text-justify">
//             Nceptos ligula ante diam est taciti rutrum. Ultricies nisl pharetra
//             sed posuere etiam. Commodo consectetur nunc tincidunt mi purus fusce
//             purus amet. Montes bibendum ridiculus rutrum; habitasse hac a.
//           </p>
//         </div>
//       </div>

//       {/* Wiersz 2 */}
//       <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
//         <div className="w-full sm:w-3/5 bg-gray-200 h-96 flex items-center justify-center">
//           <iframe
//             src="https://player.vimeo.com/video/1041228725"
//             width="100%"
//             height="100%"
//             frameBorder="0"
//             allow="autoplay; fullscreen; picture-in-picture"
//             allowFullScreen
//             title="Film 2"
//           ></iframe>
//         </div>
//         <div className="w-full sm:w-2/5 bg-gray-100 h-auto p-6">
//           <p className="text-justify">
//             Nceptos ligula ante diam est taciti rutrum. Ultricies nisl pharetra
//             sed posuere etiam. Commodo consectetur nunc tincidunt mi purus fusce
//             purus amet. Montes bibendum ridiculus rutrum; habitasse hac a.
//           </p>
//         </div>
//       </div>

//       {/* Wiersz 3 */}
//       <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
//         <div className="w-full sm:w-3/5 bg-gray-200 h-96 flex items-center justify-center">
//           <iframe
//             src="https://player.vimeo.com/video/1041230673"
//             width="100%"
//             height="100%"
//             frameBorder="0"
//             allow="autoplay; fullscreen; picture-in-picture"
//             allowFullScreen
//             title="Film 3"
//           ></iframe>
//         </div>
//         <div className="w-full sm:w-2/5 bg-gray-100 h-auto p-6">
//           <p className="text-justify">
//             Nceptos ligula ante diam est taciti rutrum. Ultricies nisl pharetra
//             sed posuere etiam. Commodo consectetur nunc tincidunt mi purus fusce
//             purus amet. Montes bibendum ridiculus rutrum; habitasse hac a.
//             Nceptos ligula ante diam est taciti rutrum. Ultricies nisl pharetra
//             sed posuere etiam. Commodo consectetur nunc tincidunt mi purus fusce
//             purus amet. Montes bibendum ridiculus rutrum; habitasse hac a.
//             Nceptos ligula ante diam est taciti rutrum. Ultricies nisl pharetra
//             sed posuere etiam. Commodo consectetur nunc tincidunt mi purus fusce
//             purus amet. Montes bibendum ridiculus rutrum; habitasse hac a.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// // import React from "react";

// // const Home = () => {
// //   return (
// //     <div className="space-y-6">
// //       {/* Wiersz 1 */}
// //       <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
// //         <div className="w-full sm:w-1/2 bg-zinc-100 h-60 flex items-center justify-center">
// //           <iframe
// //             src="https://player.vimeo.com/video/1041227479"
// //             width="100%"
// //             height="100%"
// //             frameBorder="0"
// //             allow="autoplay; fullscreen; picture-in-picture"
// //             allowFullScreen
// //             title="Film 1"
// //           ></iframe>
// //         </div>
// //         <div className="w-full sm:w-1/2 bg-gray-100 h-auto p-4">
// //           <p className="text-justify">
// //             nceptos ligula ante diam est taciti rutrum. Ultricies nisl pharetra
// //             sed posuere etiam. Commodo consectetur nunc tincidunt mi purus fusce
// //             purus amet. Montes bibendum ridiculus rutrum; habitasse hac a. Ut
// //             montes etiam sit, conubia dignissim dui. Platea purus lobortis erat
// //             consequat odio ultricies maecenas accumsan. Diam taciti interdum
// //             ornare fermentum curabitur; cursus vivamus habitasse? Amet maecenas
// //             massa hendrerit lacus euismod fermentum suscipit scelerisque? Semper
// //             varius mi eget nec adipiscing pretium. Tortor ad tristique convallis
// //             fusce sodales nascetur est eget.
// //           </p>
// //         </div>
// //       </div>

// //       {/* Wiersz 2 */}
// //       <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
// //         <div className="w-full sm:w-1/2 bg-gray-200 h-60 flex items-center justify-center">
// //           <iframe
// //             src="https://player.vimeo.com/video/1041228725"
// //             width="100%"
// //             height="100%"
// //             frameBorder="0"
// //             allow="autoplay; fullscreen; picture-in-picture"
// //             allowFullScreen
// //             title="Film 2"
// //           ></iframe>
// //         </div>
// //         <div className="w-full sm:w-1/2 bg-gray-100 h-auto p-4">
// //           <p className="text-justify">
// //             nceptos ligula ante diam est taciti rutrum. Ultricies nisl pharetra
// //             sed posuere etiam. Commodo consectetur nunc tincidunt mi purus fusce
// //             purus amet. Montes bibendum ridiculus rutrum; habitasse hac a. Ut
// //             montes etiam sit, conubia dignissim dui. Platea purus lobortis erat
// //             consequat odio ultricies maecenas accumsan. Diam taciti interdum
// //             ornare fermentum curabitur; cursus vivamus habitasse? Amet maecenas
// //             massa hendrerit lacus euismod fermentum suscipit scelerisque? Semper
// //             varius mi eget nec adipiscing pretium. Tortor ad tristique convallis
// //             fusce sodales nascetur est eget.
// //           </p>
// //         </div>
// //       </div>

// //       {/* Wiersz 3 */}
// //       <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
// //         <div className="w-full sm:w-1/2 bg-gray-200 h-60 flex items-center justify-center">
// //           <iframe
// //             src="https://player.vimeo.com/video/1041230673"
// //             width="100%"
// //             height="100%"
// //             frameBorder="0"
// //             allow="autoplay; fullscreen; picture-in-picture"
// //             allowFullScreen
// //             title="Film 3"
// //           ></iframe>
// //         </div>
// //         <div className="w-full sm:w-1/2 bg-gray-100 h-auto p-4">
// //           <p className="text-justify">
// //             nceptos ligula ante diam est taciti rutrum. Ultricies nisl pharetra
// //             sed posuere etiam. Commodo consectetur nunc tincidunt mi purus fusce
// //             purus amet. Montes bibendum ridiculus rutrum; habitasse hac a. Ut
// //             montes etiam sit, conubia dignissim dui. Platea purus lobortis erat
// //             consequat odio ultricies maecenas accumsan. Diam taciti interdum
// //             ornare fermentum curabitur; cursus vivamus habitasse? Amet maecenas
// //             massa hendrerit lacus euismod fermentum suscipit scelerisque? Semper
// //             varius mi eget nec adipiscing pretium. Tortor ad tristique convallis
// //             fusce sodales nascetur est eget.
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;
