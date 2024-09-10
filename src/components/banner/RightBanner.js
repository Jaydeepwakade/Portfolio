import React from 'react'
import { profile } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full  flex justify-center items-center relative">
      <img
        className="w-[350px] h-[350px] lgl:w-[580px] lgl:h-[580px] "
        src={profile}
        alt="bannerImg"
      />
     
    </div>
  );
}

export default RightBanner