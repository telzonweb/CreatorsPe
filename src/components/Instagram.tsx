import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

export const Instagram = () => {
  return (
    <>
      <h2 className="pt-[20px] text-center text-2xl">Our Portfolio</h2>
      <div
        className=" flex flex-wrap items-center justify-center gap-10 pt-20 "
        //   style={{
        //     display: "flex",
        //     justifyContent: "center",
        //     flexWrap: "wrap",
        //     gap: "10px",
        //   }}
      >
        <InstagramEmbed
          url="https://www.instagram.com/p/C6WFeeNJiJr/"
          width={328}
          height="auto"
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/C6WFeeNJiJr/"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/C6WFeeNJiJr/"
          width={328}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/C6WFeeNJiJr/"
          width={328}
        />
      </div>
    </>
  );
};
