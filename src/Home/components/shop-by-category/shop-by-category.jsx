import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../../redux/categories/categories.action";

let categoryArray = [];
const ShopByCategory = (props) => {
  useEffect(() => {
    props.getCategories();
  }, []);
  categoryArray = props.categories;

  // let categoryArray = [
  //   {
  //     id: 1,
  //     url: "",
  //     imageUrl:
  //       "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bjpg%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780593334836_s118x184.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bjpg%5D",
  //     name: "Manga",
  //   },
  //   {
  //     id: 2,
  //     url: "",
  //     imageUrl:
  //       "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bjpg%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780593334836_s118x184.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bjpg%5D",
  //     name: "Ebooks",
  //   },
  //   {
  //     id: 3,
  //     url: "",
  //     imageUrl:
  //       "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bjpg%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780593334836_s118x184.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bjpg%5D",
  //     name: "Romance",
  //   },
  //   {
  //     id: 4,
  //     url: "",
  //     imageUrl:
  //       "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bjpg%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780593334836_s118x184.jpg%5D&scale=options%5Blimit%5D,size%5B300x10000%5D&sink=format%5Bjpg%5D",
  //     name: "Audiobook",
  //   },
  // ];
  return (
    <section className="mb-10 w-11/12 mx-auto">
      <div className="container mx-auto px-2">
        <section className="px-2">
          <h1 className="py-6 text-3xl italic font-serif">Shop by category</h1>
          <div className="grid md:grid-cols-4">
            {categoryArray.map((item, index) => {
              return (
                <div key={item.id} className="px-1 pb-2 mb-8 border mx-auto">
                  <a href={item.url}>
                    <h3 className="text-center mb-2 p-1">{item.name}</h3>
                    <img
                      className="mx-auto rounded shadow-md"
                      src={item.image}
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
};
let mapStateToProps = (state) => {
  console.log(state, "kkk");
  return {
    categories: state.categories.categories,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getCategories: () => dispatch(getCategories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopByCategory);
