import { ReactComponent as GetirMutlulukLogo } from "../assets/images/getir-mutluluk.svg";
import React, { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactFlagsSelect from "react-flags-select";

const HeroSection = () => {
  const [selected, setSelected] = useState("TR");
  const phones = {
    US: "+1",
    DE: "+50",
    TR: "+90",
    IT: "+7",
    IN: "+15",
  };
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    swipe: false,
    speed: 500,
    autoplaySpeed: 5000,
    arrows: false,
  };
  return (
    <div className="w-full relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-color before:to-transparent before:absolute before:inset-0 before:z-10">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover mix-blend-overlay "
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            className="w-full h-[500px] object-cover mix-blend-overlay"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
            alt=""
          />
        </div>
      </Slider>
      <div className="container flex justify-between items-center absolute top-0 left-1/2 h-full z-20 -translate-x-1/2">
        <div>
          <GetirMutlulukLogo width="180px" height="180px" />
          <h3 className="mt-8 text-4xl font-semibold text-white">
            Dakikalar içinde <br /> kapınızda
          </h3>
        </div>
        <div className="w-[400px] rounded-lg bg-gray-50 p-6">
          <h4 className="text-primary-color text-center font-semibold mb-4">
            Giriş yap veya kayıt ol
          </h4>
          <div className="grid flex-col gap-y-3">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                onSelect={(code) => setSelected(code)}
                selected={selected}
                className="flag-select w-[110px]"
              />
              <label className="flex-1 relative block">
                <input
                  type="text"
                  required
                  className="text-sm pt-2 h-14 px-4 border-2 rounded w-full transition-colors hover:border-primary-color focus:border-primary-color outline-none peer "
                />
                <span className="absolute top-0 left-0 text-gray-500  h-full px-4 flex items-center text-sm pointer-events-none transition-all peer-focus:h-7 peer-focus:text-xs peer-focus:text-primary-color peer-valid:h-7 peer-valid:text-xs peer-valid:text-primary-color">
                  Telefon Numarası
                </span>
              </label>
            </div>
            <button className="bg-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold text-primary-color hover:bg-primary-color hover:text-brand-yellow transition-colors">
              Telefon numarası ile devam et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
