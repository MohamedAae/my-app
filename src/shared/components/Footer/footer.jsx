import React, {useEffect} from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

let categories = [];

const Footer = (props) => {

  categories = props.categories;

  return (
    <footer class="bg-white border-t border-gray-200">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 px-6 md:grid-cols-3">
        <div>
          <h2 class="mb-6 text-sm font-semibold text-background capitalize font-serif">
            Categories
          </h2>
          <ul class="text-gray-500">
            {
              categories.length
                ?
                  categories.map(category => {
                    return(
                        <li className="mb-4">
                          <NavLink to={`/category/${category._id}`} className=" hover:underline">
                            {category.name}
                          </NavLink>
                        </li>
                    )
                  })
                  :
                  ""
            }
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-md font-semibold text-background capitalize font-serif">
            Company
          </h2>
          <ul className="text-gray-500 text-sm">

            <li className="mb-4">
              <a href="#" className=" hover:underline">
                About
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Brand Center
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="mb-6 text-md font-semibold text-background capitalize font-serif">
            Legal
          </h2>
          <ul class="text-gray-500 text-sm">
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Licensing
              </a>
            </li>
            <li class="mb-4">
              <a href="#" class="hover:underline">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="py-6 px-4 bg-gray-100md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center">
          © 2022 Mwmmy Team™.
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

let mapStateToProps = state => {
  return {
    categories: state.categories.categories,
  }
}

export default connect(mapStateToProps)(Footer);
