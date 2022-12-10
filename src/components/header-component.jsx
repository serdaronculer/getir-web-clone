import { ReactComponent as GetirLogo } from "../assets/images/getir.svg";
import { ReactComponent as GetirYemekLogo } from "../assets/images/getir-yemek.svg";
import { ReactComponent as GetirBuyukLogo } from "../assets/images/getir-buyuk.svg";
import { ReactComponent as GetirSuLogo } from "../assets/images/getir-su.svg";
import { RiGlobalLine } from "react-icons/ri";
import {BsFillPersonFill} from "react-icons/bs";
import {IoPersonAdd} from "react-icons/io5"
import { Outlet } from "react-router-dom";
const Header = () => {
  return (
    <>
    <div className="bg-brand-color px-8">
      <div className="container mx-auto  flex justify-between items-center">
        <div className="flex items-center h-11 gap-x-8">
          <a href="#" className="mt-1 bg-primary-color px-5 py-3 rounded-t-md">
            <GetirLogo width="35" height="16" />
          </a>
          <a href="#" className="mt-1">
            <GetirYemekLogo width="87" height="16" />
          </a>
          <a href="#" className="mt-1">
            <GetirBuyukLogo width="81" height="16" />
          </a>
          <a href="#" className="mt-1">
            <GetirSuLogo width="52" height="16" />
          </a>
        </div>

        <nav className="flex items-center gap-x-8 h-11 text-sm font-semibold">
          <a href="#" className="text-nav-text-color inline-flex gap-2 items-center">
            <RiGlobalLine size={20} />
            Türkçe (TR)
          </a>
          <a href="#" className="text-nav-text-color inline-flex gap-2 items-center">
            <BsFillPersonFill size={20}/>
            Giriş Yap
          </a>
          <a href="#" className="text-nav-text-color inline-flex gap-2 items-center">
            <IoPersonAdd size={18}/>
            Kayıt Ol
          </a>
        </nav>
      </div>
    </div>
    <Outlet/>
    </>
  );
};

export default Header;
