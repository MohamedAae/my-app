import React from "react";
import "./best-seller.css";
export default function BestSeller() {
  const bestbook = [
    {
      id: 1,
      price: 125,
      cover:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780439064873_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      bookurl: "",
      author: "Alison Espach",
      description:
        "In this exhilarating novel, two friends—often in love, but never lovers—come together as creative partners in the world of video game design, where success brings them fame, joy, tragedy, duplicity, and, ultimately, a kind of immortality.",
      title: "The Night Shift: ANovel",
      rate: 5,
    },
    {
      id: 2,
      price: 125,
      cover:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780439064873_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      bookurl: "",
      author: "Alison Espach",
      description: "ftttt",
      title: "The Night Shift: ANovel",
      rate: 3,
    },
    {
      id: 4,
      price: 125,
      cover:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780439064873_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      bookurl: "",
      author: "Alison Espach",
      description: "ftttt",
      title: "The Night Shift: ANovel",
      rate: 4,
    },
    {
      id: 6,
      price: 125,
      cover:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780439064873_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      bookurl: "",
      author: "Alison Espach",
      description: "ftttt",
      title: "The Night Shift: ANovel",
      rate: 4,
    },
    {
      id: 9,
      price: 125,
      cover:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780439064873_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      bookurl: "",
      author: "Alison Espach",
      description: "ftttt",
      title: "The Night Shift: ANovel",
      rate: 4,
    },
    {
      id: 11,
      price: 125,
      cover:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780439064873_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      bookurl: "",
      author: "Alison Espach",
      description: "ftttt",
      title: "The Night Shift: ANovel",
      rate: 4,
    },
    {
      id: 11,
      price: 125,
      cover:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780439064873_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      bookurl: "",
      author: "Alison Espach",
      description: "ftttt",
      title: "The Night Shift: ANovel",
      rate: 4,
    },
    {
      id: 11,
      price: 125,
      cover:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780439064873_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      bookurl: "",
      author: "Alison Espach",
      description: "ftttt",
      title: "The Night Shift: ANovel",
      rate: 4,
    },
    {
      id: 11,
      price: 125,
      cover:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780439064873_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
      bookurl: "",
      author: "Alison Espach",
      description: "ftttt",
      title: "The Night Shift: ANovel",
      rate: 4,
    },
  ];

  function forloop(n) {
    let starsarr = [];
    let color = "text-gray-300";
    for (var i = 0; i < 5; i++) {
      if (n > i) {
        color = "text-yellow-300";
      }
      starsarr.push(
        <svg
          aria-hidden="true"
          className={`w-5 h-5 ${color}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          {bestbook[0].rate}
          <title>Second star</title>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    }
    return starsarr;
  }
  return (
    <section className="">
      <aside className="w-11/12 grid grid-cols-4 text-center gap-2 mx-auto w-11/12">
        <div className="grid gap-2">
          <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className=" group relative overflow-hidden">
              <a href="#">
                <img
                  className="object-cover w-full p-5 rounded-t-lg"
                  src={bestbook[0].cover}
                  alt="product image"
                />
              </a>
              <button className="w-11/12 bg-gray-50 hover:bg-gray-700 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded absolute right-2/4 translate-x-2/4 translate-y-full group-hover:translate-y-0 hover:translate-y-0 transition ease-in-out delay-150 duration-1000 ">
                Quick Add
              </button>
            </div>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {bestbook[0].title}
                </h5>
              </a>
              <a href="">
                <p>{bestbook[0].author}</p>
              </a>
              <div className="flex justify-center mt-2.5 mb-5">
                {forloop(5)}
              </div>
              <div>
                <p>{bestbook[0].description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" grid col-span-3 gap-2 mx-auto text-center">
          <div className=" grid grid-cols-4 gap-2 mx-auto">
            {bestbook.map((book, i) => {
              if (i != 0) {
                return (
                  <div className=" rounded">
                    <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                      <div className=" group relative overflow-hidden">
                        <a href="#">
                          <img
                            className="object-cover w-full p-5 rounded-t-lg"
                            src={book.cover}
                            alt="product image"
                          />
                        </a>
                        <button className="w-10/12 bg-gray-50 hover:bg-gray-700 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded absolute right-2/4 translate-x-2/4 translate-y-full group-hover:translate-y-0 hover:translate-y-0 transition ease-in-out delay-150 duration-1000 ">
                          Quick Add
                        </button>
                      </div>
                      <div className="px-5 pb-5">
                        <a href="#">
                          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {book.title}
                          </h5>
                        </a>
                        <a href="#" className="underline text-gray-500">
                          <p>{book.author}</p>
                        </a>
                        <div className="flex justify-center mt-2.5 mb-5">
                          {forloop(5)}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </aside>
    </section>
  );
}
