import React from "react";

export default function ImageSection() {
  const imagelink = {
    id: 1,
    imgsrc:
      "https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2022/07/26/23992_BB_D_Back_to_School_07-26.jpg",
    pagelink: "#",
  };
  return (
    <section className="w-11/12 mx-auto">
      <a href={imagelink.pagelink}>
        <img src={imagelink.imgsrc} className="w-full h-4/5" />
      </a>
    </section>
  );
}
