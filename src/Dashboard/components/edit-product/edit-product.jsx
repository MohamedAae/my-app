import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {getCategories} from "../../../redux/categories/categories.action";
import {connect} from "react-redux";
import {Helpers} from "../../../shared/helpers";

let categories = [];
let originalBookCover = "";

const EditProduct = (props) => {

    const params = useParams();
    const id = params.id;
    const [product, setProduct] = useState({});
    const [imagePreview, setImagePreview] = useState({
        url: "", uploaded: false
    });

    if(!originalBookCover && product.image) {
        originalBookCover = product.image;
    }

    useEffect(() => {
        getBook(id);
        props.getCategories();
    }, []);
    categories = props.categories;

    const getBook = async (productId) => {
        try {
            const res = await axios.get(`http://127.0.0.1:5003/products/${productId}`);
            setProduct(res.data.product);
        } catch (e) {
            throw new Error(e);
        }
    };

    const deleteProduct = async (productId) => {
        try {
            const res = await axios.delete(`http://127.0.0.1:5003/products/${productId}`);
            console.log(res);
        } catch (e) {
            throw new Error(e);
        }
    };

    const onChangeHandler = (property, value) => {
        return setProduct({
            ...product, [property]: value,
        });
    };

    const handleImagePreview = (event) => {
        let image_as_base64 = URL.createObjectURL(event.target.files[0]);
        setImagePreview({...imagePreview, url: image_as_base64});
    }

    const handleUpload = async (event) => {
        handleImagePreview(event);
        try {
            const uploadedImage = await Helpers.uploadImage(event);
            onChangeHandler("image", uploadedImage);
            return setImagePreview({url: uploadedImage, uploaded: true});
        } catch (e) {
            throw new Error(e);
        }
    }

    const onSubmitHandler = async (id, product) => {
        try {
            const res = await axios.patch(`http://127.0.0.1:5003/products/${id}`, product);
        } catch (e) {
            throw new Error(e);
        }
    };

    return (<>
        <div>
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-300">
                            Book:
                        </h3>
                        <p className="mt-1 text-sm text-gray-300 font-bold ">
                            Id: {product._id}
                        </p>
                        <img
                            className="object-cover w-full rounded-lg mt-5"
                            src={Object.keys(product).length && product.image}
                            alt="product image"
                        />
                    </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form onSubmit={(event) => onSubmitHandler(product._id, product)}>
                        <div
                            className="shadow sm:rounded-md sm:overflow-hidden">
                            <div
                                className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <div className="grid grid-cols-3 gap-6">
                                    <div className="col-span-3">
                                        <label
                                            htmlFor="author"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Author
                                        </label>
                                        <input
                                            onChange={(event) => onChangeHandler("author", event.target.value)}
                                            type="text"
                                            name="author"
                                            id="author"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg"
                                            value={Object.keys(product).length && product.author}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-6">
                                    <div className="col-span-3">
                                        <label
                                            htmlFor="book-name"
                                            className="block text-sm font-medium text-gray-700"
                                        >
                                            Name
                                        </label>
                                        <input
                                            onChange={(event) => onChangeHandler("name", event.target.value)}
                                            type="text"
                                            name="book-name"
                                            id="book-name"
                                            autoComplete="book-name"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg"
                                            value={Object.keys(product).length && product.name}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="description"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Description
                                    </label>
                                    <div className="mt-1">
                      <textarea
                          onChange={(event) => onChangeHandler("description", event.target.value)}
                          id="description"
                          name="description"
                          rows={3}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          defaultValue={Object.keys(product).length && product.description}
                      />
                                    </div>
                                </div>

                                <div className="py-5 bg-white">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div
                                            className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="rating"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Rating
                                            </label>
                                            <input
                                                onChange={(event) => onChangeHandler("rating", event.target.value)}
                                                type="number"
                                                min={`1`}
                                                max={`5`}
                                                name="rating"
                                                id="rating"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                value={Object.keys(product).length && product.rating}
                                            />
                                        </div>

                                        <div
                                            className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="price"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Price
                                            </label>
                                            <input
                                                onChange={(event) => onChangeHandler("price", event.target.value)}
                                                min={`0`}
                                                step={`0.1`}
                                                type="number"
                                                name="price"
                                                id="price"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                value={Object.keys(product).length && product.price}
                                            />
                                        </div>

                                        <div
                                            className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="discountRate"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Discount Rate
                                            </label>
                                            <input
                                                onChange={(event) => onChangeHandler("discountrate", event.target.value)}
                                                type="number"
                                                min={`0`}
                                                max={`1`}
                                                step={`0.1`}
                                                name="discountRate"
                                                id="discountRate"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                value={Object.keys(product).length && product.discountrate}
                                            />
                                        </div>

                                        <div
                                            className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="stock"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Stock
                                            </label>
                                            <input
                                                onChange={(event) => onChangeHandler("stock", event.target.value)}
                                                min={`0`}
                                                type="number"
                                                name="stock"
                                                id="stock"
                                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                value={Object.keys(product).length && product.stock}
                                            />
                                        </div>

                                        <div
                                            className="col-span-6 sm:col-span-3">
                                            <label
                                                htmlFor="category"
                                                className="block text-sm font-medium text-gray-700"
                                            >
                                                Category
                                            </label>
                                            <select
                                                onChange={(event) => onChangeHandler("categoryId", event.target.value)}
                                                id="category"
                                                name="category"
                                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                {categories.length && Object.keys(product).length ? categories.map((category) => {
                                                    const isBookCategory = product.categoryId._id === category._id;
                                                    return (<option
                                                        selected={isBookCategory}
                                                        value={category._id}
                                                    >
                                                        {category.name}
                                                    </option>);
                                                }) : ""}
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label
                                        className="block text-sm font-medium text-gray-700">
                                        Cover photo
                                    </label>
                                    <div
                                        className="mt-1 flex justify-center items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div
                                            className="space-y-1 text-center">
                                            {imagePreview.url ? imagePreview.uploaded ?
                                                <img
                                                    src={imagePreview.url}
                                                    alt={`uploaded image`}
                                                    className={`rounded mx-auto`}
                                                /> : <button type="button"
                                                             className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 transition ease-in-out duration-150 cursor-not-allowed"
                                                             disabled="">
                                                    <svg
                                                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24">
                                                        <circle
                                                            className="opacity-25"
                                                            cx="12" cy="12"
                                                            r="10"
                                                            stroke="currentColor"
                                                            stroke-width="4"></circle>
                                                        <path
                                                            className="opacity-75"
                                                            fill="currentColor"
                                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Uploading...
                                                </button> : <svg
                                                className="mx-auto h-12 w-12 text-gray-400"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 48 48"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>}
                                            <div
                                                className="flex text-sm justify-center text-gray-600">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                >
                                                    <span>Upload a file</span>
                                                    <input
                                                        id="file-upload"
                                                        name="file-upload"
                                                        type="file"
                                                        className="sr-only"
                                                        onChange={(event) => handleUpload(event)}
                                                    />
                                                </label>
                                                <p className="pl-1">or drag
                                                    and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500">
                                                PNG, JPG, GIF up to 10MB
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                        <button
                            className="btn bg-indigo-500 hover:bg-indigo-600 text-white"
                            type="submit"
                        >
                            <span
                                className="hidden xs:block ml-2">Save Changes</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
                <div className="border-t border-gray-200"/>
            </div>
        </div>
    </>);
};

let mapStateToProps = (state) => {
    return {
        categories: state.categories.categories,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        getCategories: () => dispatch(getCategories()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);
