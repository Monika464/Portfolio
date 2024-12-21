import React from "react";

const AboutMe = () => {
  return (
    <div className="h-screen w-screen bg-gray-50 p-4">
      <div className="w-full sm:w-2/3 lg:w-1/2 bg-white shadow-lg rounded-lg p-6 text-left mt-8 mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">O mnie</h1>
        <p className="text-gray-700 leading-relaxed">
          Tutaj możesz wpisać dowolne informacje o sobie. Ten tekst jest tylko
          przykładem, ale możesz go zmienić na dowolny opis, który odpowiada
          Twoim potrzebom. W razie potrzeby dodaj tutaj więcej szczegółów, takie
          jak Twoje doświadczenie, zainteresowania lub inne informacje.
        </p>
        <p className="mt-4 text-gray-700">
          Jeśli chcesz, możesz również dostosować ten styl, dodając więcej
          dekoracji lub elementów, takich jak zdjęcia, listy czy linki.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
