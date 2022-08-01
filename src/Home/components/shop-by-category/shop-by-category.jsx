import React from "react";

export default function ShopByCategory() {
  let categoryArray = [
    {
      id: 1,
      url: "",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bjpg%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780593334836_s118x184.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bjpg%5D",
      name: "Manga",
    },
    {
      id: 2,
      url: "",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bjpg%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780593334836_s118x184.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bjpg%5D",
      name: "Ebooks",
    },
    {
      id: 3,
      url: "",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bjpg%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780593334836_s118x184.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bjpg%5D",
      name: "Romance",
    },
    {
      id: 4,
      url: "",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bjpg%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780593334836_s118x184.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bjpg%5D",
      name: "Audiobook",
    },
    {
      id: 5,
      url: "",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bjpg%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780593334836_s118x184.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bjpg%5D",
      name: "Booktok",
    },
    {
      id: 6,
      url: "",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bjpg%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780593334836_s118x184.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bjpg%5D",
      name: "Comdey",
    },
    {
      id: 7,
      url: "",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bjpg%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780593334836_s118x184.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bjpg%5D",
      name: "Booktok",
    },
    {
      id: 8,
      url: "",
      imageUrl:
        "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bjpg%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780593334836_s118x184.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bjpg%5D",
      name: "Comdey",
    },
  ];
  return (
    <section className="my-10">
      <div className="container mx-auto px-2">
        <section className="pt-8 px-2">
          <h3 className="font-bold mb-5 text-2xl font-mono">
            Shop by category
          </h3>
          <div className="grid md:grid-cols-4">
            {categoryArray.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="md:w-8/12 pb-2 mb-8 border mx-auto"
                >
                  <a href={item.url}>
                    <h3 className="text-center mb-2 p-1">{item.name}</h3>
                    <img
                      className="mx-auto rounded shadow-md"
                      src={item.imageUrl}
                      alt=""
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
}
