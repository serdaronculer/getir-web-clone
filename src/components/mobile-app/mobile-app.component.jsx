import { ContainerEl } from "common-styles";
import { ReactComponent as AppStoreLogo } from "assets/images/app-store.svg";
import { ReactComponent as GooglePlayLogo } from "assets/images/google-play.svg";
import { ReactComponent as AppGalleryLogo } from "assets/images/app-gallery.svg";

const MobileApp = () => {
  return (
    <div className="md:container md:mx-auto">
      <div className="bg-primary-color bg-mobile-app-background md:rounded-lg items-center text-white flex flex-row justify-between">
        <div className="flex flex-col gap-y-3 p-10" style={{maxWidth:"400px"}}>
          <h3 className="text-[1.625rem] tracking-tight font-bold ">Getir'i indirin!</h3>
          <p className="font-semibold">İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.</p>
          <nav className="mt-5 flex gap-x-2">
            <a href="#" className="transform hover:scale-105 transition">
              <AppStoreLogo />
            </a>
            <a href="#" className="transform hover:scale-105 transition">
              <GooglePlayLogo />
            </a>
            <a href="#" className="transform hover:scale-105 transition">
              <AppGalleryLogo />
            </a>
          </nav>
        </div>
        <picture className="self-end ">
          <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" alt="" />
        </picture>
      </div>
    </div>
  );
};

export default MobileApp;


