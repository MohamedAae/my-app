import React from "react";


export default function ImageSection() {
  const imagelink =
    {
      "id": 1,
      "imgsrc":"https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780439064873_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      "pagelink":"#"
    }
  return (
    <section >
   <a href={imagelink.pagelink}>
         <img src={imagelink.imgsrc} className="w-full h-80"/>
           
       </a>
           
    </section>
  )
}
