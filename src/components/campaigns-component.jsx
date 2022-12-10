import Slider from "react-slick";
import Banner from "./banner.component";
import bannerDatas from "../api/banners.json";
import { useState, useEffect } from "react";

const Campaigns = () => {
  const [banners, setBanners] = useState([]);
  const [isMouseDown, setIsMouseDown ] = useState(false);
    
  useEffect(() => {
    setBanners(bannerDatas);
  }, []);

  const handleMouseEvent = (e) =>{

    const flag = e.type === "mousedown" ? true : false;
    setIsMouseDown(flag);
    
  }

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    swipe: true,
    speed: 500,
    autoplaySpeed: 9000,
    arrows: false,
  };
  return (
    <div className="container mx-auto py-8">
      <h6 className="text-sm font-semibold mb-3">Kampanyalar</h6>
      <Slider className="-mx-5" {...settings}>
        {banners &&
          banners.map((banner) => (
            <div  key={banner.id}  className={`px-5  ${isMouseDown ? 'cursor-grabbing' : 'cursor-grab'}`} onMouseDown={handleMouseEvent} onMouseUp={handleMouseEvent}>
              <Banner banner={banner} />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Campaigns;
