import {NavLink} from "react-router-dom";
import {Helpers} from "../../../helpers";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    PencilAltIcon,
    TrashIcon
} from "@heroicons/react/solid";
import axios from "axios";

const pageSize = 12;

const Grid = (props) => {

    const products = props.products;
    const page = props.page;
    const setPage = props.setPage;
    const setDeleted = props.setDeleted;

    const numberofpages = Math.ceil(props.count / pageSize ? props.count / pageSize : 0);

    const displayPages = (numberofpages) => {
        let pages = [];
        for (let i = 1; i <= numberofpages; i++) {
            const active = i === props.currentPage ? "text-background" + " bg-theme" : "";
            pages.push(<a
                onClick={() => {
                    setPage(i);
                }}
                aria-current="page"
                className={`cursor-pointer z-10 ${active} relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
            >
                {i}
            </a>);
        }
        return pages;
    };

    const deleteProduct = async (productId) => {
        try {
            const res = await axios.delete(`http://127.0.0.1:5003/products/${productId}`);
            setDeleted(true);
        } catch (e) {
            throw new Error(e);
        }
    }

    return (<div className="lg:col-span-3">
        <div className="bg-transparent">
            <div className="">
                <div>
                    <div
                        className="grid col-span-3 gap-2 mx-auto text-center mb-10">
                        <div
                            className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-16 gap-y-10  mx-auto">
                            {products.length ? products.map((book, i) => {
                                return (<div
                                    className="max-w-sm bg-transparent rounded-lg rounded mb-4" key={i}>
                                    <div
                                        className=" group relative overflow-hidden">
                                        <NavLink
                                            to={`/c/${book.categoryId.url}/${book._id}`}
                                        >
                                            <img
                                                className="object-cover h-60  w-full  rounded-t-lg"
                                                src={products.length && book.image}
                                                alt="product image"
                                            />
                                        </NavLink>

                                        <button
                                            onClick={() => props.AddToCart(book)}
                                            className="w-10/12 bg-transparent hover:bg-theme text-theme-hover font-semibold hover:text-background py-2 px-2 hover:border-transparent rounded absolute right-2/4 translate-x-2/4 translate-y-full group-hover:-translate-y-1 hover:translate-y-0 transition ease-in-out duration-300"
                                        >
                                            Quick
                                            Add
                                        </button>
                                    </div>
                                    <div
                                        className="flex justify-between mt-2.5 ">
                                        <div
                                            className={`flex justify-center`}>
                                            {Helpers.displayRating(products.length && book.rating)}
                                        </div>
                                        <p
                                            className={`font-semibold text-gray-400`}
                                        >
                                            ${book.price.toFixed(2)}
                                        </p>
                                    </div>
                                    <div>
                                        <NavLink
                                            to={`/c/${book.categoryId.url}/${book._id}`}
                                        >
                                            <h5 className="flex justify-center items-start text-xl font-semibold tracking-tight text-gray-900 h-16 my-1 ">
                                                {products.length && book.name.slice(0, 25)}
                                            </h5>
                                        </NavLink>
                                        <a
                                            href="#"
                                            className="underline text-gray-500"
                                        >
                                            <p>{book.author}</p>
                                        </a>
                                        <div className={`flex flex-col gap-2 mt-4`}>
                                            <NavLink to={`/dashboard/edit-product/${book._id}`} className={`flex justify-center items-center capitalize bg-theme hover:bg-theme-hover text-background rounded-sm py-1`}>
                                                <PencilAltIcon width={15} height={15}></PencilAltIcon>
                                                edit
                                            </NavLink>
                                            <span
                                                onClick={() => deleteProduct(book._id)}
                                                className={`cursor-pointer flex justify-center items-center capitalize bg-dark-red text-white rounded-sm py-1`}
                                            >
                                                <TrashIcon  width={15} height={15}></TrashIcon>
                                                Delete
                                            </span>
                                        </div>
                                    </div>
                                </div>)

                            }) : ""}
                        </div>
                    </div>
                </div>
                <div>
                    <nav
                        className="relative z-0 inline-flex rounded-md -space-x-px justify-center items-center w-full"
                        aria-label="Pagination"
                    >
                        <a
                            onClick={() => {
                                if (page > 1) {
                                    setPage(page - 1);
                                }
                            }}
                            className="cursor-pointer relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-transparent text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                            />
                        </a>
                        {displayPages(numberofpages)}
                        <a
                            onClick={() => {
                                if (page !== numberofpages) {
                                    setPage(page + 1);
                                }
                            }}
                            className="cursor-pointer relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-transparent text-sm font-medium text-gray-500 hover:bg-gray-50"
                        >
                        <span className="sr-only">Next</span>
                            <ChevronRightIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                            />
                        </a>
                    </nav>
                </div>
            </div>
        </div>

    </div>)
}

export default Grid;
