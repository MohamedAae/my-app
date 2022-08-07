/* This example requires Tailwind CSS v2.0+ */
import React, {Fragment, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {XIcon} from "@heroicons/react/outline";
import {ShoppingCartIcon} from "@heroicons/react/solid";

let products = [];

const Cart = (props) => {

    const [open, setOpen] = useState(false);
    products = props.item;

    return (
        <>
            <span onClick={() => setOpen(true)} className="cursor-pointer relative">
                <ShoppingCartIcon
                    width={28}
                    height={28}
                    className="text-background"
                ></ShoppingCartIcon>
                {
                    props.totalItems
                        ?
                        (
                            <p className="absolute -top-3 -right-4 bg-theme rounded-full text-background w-6 h-6 flex justify-center items-center">
                                {props.totalItems}
                            </p>
                        )
                        :
                        (
                            ""
                        )
                }
            </span>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div
                            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div
                                className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel
                                        className="pointer-events-auto w-screen max-w-md ">
                                        <div
                                            className="flex h-full flex-col overflow-y-scroll bg-cart-bg shadow-xl">
                                            <div
                                                className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                                <div
                                                    className="flex items-start justify-between">
                                                    <Dialog.Title
                                                        className="text-lg font-medium text-gray-900">
                                                        {" "}
                                                        Your Cart{" "}
                                                    </Dialog.Title>
                                                    <div
                                                        className="ml-3 flex h-7 items-center">
                                                        <button
                                                            type="button"
                                                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            <span
                                                                className="sr-only">Close panel</span>
                                                            <XIcon
                                                                className="h-6 w-6"
                                                                aria-hidden="true"/>
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="mt-8">
                                                    <div className="flow-root">
                                                        <ul
                                                            role="list"
                                                            className="-my-6 divide-y divide-gray-200"
                                                        >
                                                            {products.length ? (
                                                                products.map((product) => (
                                                                    <li key={product.id}
                                                                        className="flex py-6">
                                                                        <div
                                                                            className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                            <img
                                                                                src={product.image}
                                                                                alt={product.name}
                                                                                className="h-full w-full object-cover object-center"
                                                                            />
                                                                        </div>

                                                                        <div
                                                                            className="ml-4 flex flex-1 flex-col justify-between">
                                                                            <div>
                                                                                <div
                                                                                    className="flex justify-between text-base font-medium text-gray-900">
                                                                                    <h3>
                                                                                        <a href="#"> {product.name} </a>
                                                                                    </h3>
                                                                                    <p className="ml-4">
                                                                                        ${product.price}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="flex items-end justify-between text-md">
                                                                                <div className="flex justify-center items-center text-gray-500">
                                                                                    <button
                                                                                        onClick={() => props.editFunction(product._id, product.price)}
                                                                                        className={`text-xl text-background h-full px-3 py-1 font-black rounded-sm flex justify-center items-center`}
                                                                                    >
                                                                                        -
                                                                                    </button>
                                                                                    <p className={`px-5 py-1`}>
                                                                                        {product.quantity}
                                                                                    </p>
                                                                                    <button
                                                                                        onClick={() => props.addFunction(product)}
                                                                                        className={`text-xl text-background h-full px-3 py-1 font-black rounded-sm flex justify-center items-center`}
                                                                                    >
                                                                                        +
                                                                                    </button>
                                                                                </div>
                                                                                <div
                                                                                    className="flex justify-end">
                                                                                    <button
                                                                                        onClick={() =>
                                                                                            props.removeFunction(
                                                                                                product._id,
                                                                                                product.price,
                                                                                            )
                                                                                        }
                                                                                        type="button"
                                                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                                    >
                                                                                        Remove
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                ))
                                                            ) : (
                                                                <div
                                                                    className="mt-16">
                                                                    <img
                                                                        src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            )}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                                {props.totalItems ? (
                                                    <>
                                                        <div
                                                            className="flex justify-between text-base font-medium text-gray-900">
                                                            <p>Subtotal</p>
                                                            <p>${Math.abs(props.totalPrice.toFixed(2))}</p>
                                                        </div>
                                                        <p className="mt-0.5 text-sm text-gray-500">
                                                            Shipping and taxes
                                                            calculated at
                                                            checkout.
                                                        </p>
                                                        <div className="mt-6">
                                                            <a
                                                                href="#"
                                                                className="flex items-center justify-center rounded-md border border-transparent bg-theme  px-6 py-3 text-base font-medium text-background shadow-sm "
                                                            >
                                                                Checkout
                                                            </a>
                                                        </div>
                                                    </>
                                                ) : (
                                                    ""
                                                )}
                                                <div
                                                    className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                    <p>
                                                        or{" "}
                                                        <button
                                                            type="button"
                                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            Continue Shopping
                                                            <span
                                                                aria-hidden="true"> &rarr;</span>
                                                        </button>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
};

export default Cart;