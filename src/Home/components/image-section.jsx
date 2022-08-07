import React from "react";

export default function ImageSection(props) {
  const imagelink = {
    id: 1,
    imgsrc: props.imgSrc,
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
