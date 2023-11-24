import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";

import {
  CiBadgeDollar,
  CiHome,
  CiSettings,
  CiUser
} from "react-icons/ci";

import homeBG from "../../public/img/homebg.png";
import homeFG from "../../public/img/homebg-fg.png";
import home3 from "../../public/img/home3.png";

import phIcon from "../../public/img/phicon.png";
import bIcon from "../../public/img/bayuticon.png";
import dIcon from "../../public/img/dubizzleicon.png";
import pfIcon from "../../public/img/pficon.png";

import ActionIcon from "@/components/action-icon";

export default async function Layout({ children, params }) {
  const settings = await getSettings();
  return (
    <>
      {/* Header */}
      <div className="relative">
        <div className="absolute z-0 flex w-full justify-center">
          <Navbar />
        </div>
        <div className="fixed left-1/2 top-[10vw] w-full -translate-x-1/2 text-center text-[9vw] font-extrabold text-white">
          Let&apos;s Build a Legacy
        </div>
        <Image className="absolute" src={homeFG} alt="" />

        <Image src={homeBG} alt="" />
      </div>

      <div className="relative flex flex-col items-center justify-center bg-white">
        <div className="flex max-w-6xl flex-col items-center gap-4 py-12 md:flex-row md:py-24">
          <div className="flex flex-col gap-2 px-4 md:w-1/2 md:px-0">
            <div className="text-center text-2xl font-extralight">
              <span className="text-plgray">Pure </span>
              <span className="text-plgreen">Home </span>
              <span className="text-plgray">Real Estate</span>
            </div>
            <span className="flex items-center justify-center text-center font-light">
              Connecting People & Property, perfectly. Helping
              hundreds of people move homes every year In Abu Dhabi.
            </span>
          </div>

          <div className=" flex w-1/2 flex-col items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-4">
              <ActionIcon
                title="Sell Properties"
                icon={CiBadgeDollar}
              />
              <ActionIcon title="Rent Properties" icon={CiHome} />
            </div>
            <div className="flex items-center justify-center gap-4">
              <ActionIcon
                title="Property Management"
                icon={CiSettings}
              />
              <ActionIcon title="Hand Over Services" icon={CiUser} />
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-2 top-1/2 max-w-[7ch] -translate-y-1/2 text-left text-[7vw] font-extrabold text-white md:left-10">
          Manage your Legacy with us
        </div>
        <Image src={home3} alt="" />
      </div>

      <div className="relative flex flex-col items-center justify-center bg-white">
        <div className="flex max-w-6xl flex-col-reverse items-center gap-8 py-12 md:flex-row md:py-24">
          <div className="flex w-1/2 flex-col items-center justify-center ">
            <div className="flex items-center justify-center gap-8">
              <Image src={phIcon} alt="" />
              <Image src={bIcon} alt="" />
            </div>
            <div className="flex items-center justify-center gap-8">
              <Image src={dIcon} alt="" />
              <Image src={pfIcon} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-2 px-8 md:w-1/2 md:px-4">
            <div className="text-center text-2xl font-extralight">
              <span className="text-plgray">
                Property Management made{" "}
              </span>
              <span className="text-plgreen">easy</span>
            </div>
            <span className="flex items-center justify-center text-center font-light">
              Get complete peace of mind when it comes to the sale,
              renting and maintenance of your properties. Our
              comprehensive services can address any sort of
              requirement that you may have, under a single roof with
              a single contact point, available 24/7.
            </span>
          </div>
        </div>
      </div>

      {/* <div>{children}</div> */}

      <Footer {...settings} />
    </>
  );
}
// enable revalidate for all pages in this layout
// export const revalidate = 60;
