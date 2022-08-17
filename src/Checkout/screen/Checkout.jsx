import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

import CheckoutForm from "../components/checkout-form/checkout-form";
import "../components/checkout-form/checkout-form.css";

import {Disclosure} from "@headlessui/react";
import {LockClosedIcon} from "@heroicons/react/solid";
import {NavLink} from "react-router-dom";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51LXfVgKUWh2HHgQzOnR0r48ZjYdJ52sEvJb55h5q0ROyiS9E1UmWCA0XcGmWqhGrHZnuvNg7A43N6ARVodNgxfOk00HeGUcgou");
const discount = {code: "iti", amount: 5};
const shipping = 0;

let products = [], subtotal = 0, total = 0, taxes = 0;

const CheckOut = (props) => {
    const [clientSecret, setClientSecret] = useState("");

    products = props.cart.cartItems;
    subtotal = +props.cart.totalPrice;
    taxes = subtotal * 0.15;
    total = subtotal ? (subtotal + taxes - discount.amount).toFixed(2) : "";
    console.log(products);

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://127.0.0.1:5003/orders/create-payment-intent", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({items: products}),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [props.cart.cartItems]);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret, appearance,
    };

    return (<>
        <>
            <main
                className="lg:min-h-full lg:overflow-hidden lg:flex lg:justify-center lg:flex-row-reverse max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="sr-only">Checkout</h1>

                <section
                    aria-labelledby="order-heading"
                    className="bg-gray-50 px-4 py-6 sm:px-6 lg:hidden"
                >
                    <Disclosure as="div" className="max-w-lg mx-auto">
                        {({open}) => (<>
                            <div
                                className="flex items-center justify-between">
                                <h2
                                    id="order-heading"
                                    className="text-lg font-medium text-gray-900"
                                >
                                    Your Order
                                </h2>
                                <Disclosure.Button
                                    className="font-medium text-indigo-600 hover:text-indigo-500">
                                    {open ? (<span>Hide full summary</span>) : (
                                        <span>Show full summary</span>)}
                                </Disclosure.Button>
                            </div>

                            <Disclosure.Panel>
                                <ul
                                    role="list"
                                    className="divide-y divide-gray-200 border-b border-gray-200"
                                >
                                    {products.length ? products.map((product) => (
                                        <li key={product.id}
                                            className="flex py-6 space-x-6">
                                            <img
                                                src={product.image}
                                                alt={product.image}
                                                className="flex-none w-40 h-40 object-center object-cover bg-gray-200 rounded-md"
                                            />
                                            <div
                                                className="flex flex-col justify-between space-y-4">
                                                <div
                                                    className="text-sm font-medium space-y-1">
                                                    <h3 className="text-gray-900">
                                                        {product.name}
                                                    </h3>
                                                    <p className="text-gray-900">
                                                        ${product.price}
                                                    </p>
                                                    <p className="text-gray-900">
                                                        Qty: {product.quantity}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>)) : ""}
                                </ul>

                                <dl className="text-sm font-medium text-gray-500 mt-10 space-y-6">
                                    <div className="flex justify-between">
                                        <dt>Subtotal</dt>
                                        <dd className="text-gray-900">{subtotal}</dd>
                                    </div>
                                    <div className="flex justify-between">
                                        <dt className="flex">
                                            Discount
                                            <span
                                                className="ml-2 rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 tracking-wide">
                          {discount.code}
                        </span>
                                        </dt>
                                        <dd className="text-gray-900">-{discount.amount}</dd>
                                    </div>
                                    <div className="flex justify-between">
                                        <dt>Taxes</dt>
                                        <dd className="text-gray-900">{taxes}</dd>
                                    </div>
                                    <div className="flex justify-between">
                                        <dt>Shipping</dt>
                                        <dd className="text-gray-900">{shipping}</dd>
                                    </div>
                                </dl>
                            </Disclosure.Panel>

                            <p className="flex items-center justify-between text-sm font-medium text-gray-900 border-t border-gray-200 pt-6 mt-6">
                                <span className="text-base">Total</span>
                                <span className="text-base">{total}</span>
                            </p>
                        </>)}
                    </Disclosure>
                </section>

                <section
                    aria-labelledby="summary-heading"
                    className="hidden bg-gray-50 w-full max-w-md flex-col lg:flex"
                >
                    <h2 id="summary-heading" className="sr-only">
                        Order summary
                    </h2>

                    <ul
                        role="list"
                        className="flex-auto overflow-y-auto divide-y divide-gray-200 px-6"
                    >
                        {products.length ? (products.map((product) => (
                            <li key={product.id}
                                className="flex py-6 space-x-6">
                                <img
                                    src={product.image}
                                    alt={product.image}
                                    className="flex-none w-40 h-40 object-center object-cover bg-gray-200 rounded-md"
                                />
                                <div
                                    className="flex flex-col justify-between space-y-4">
                                    <div
                                        className="text-sm font-medium space-y-1">
                                        <h3 className="text-gray-900">{product.name}</h3>
                                        <p className="text-gray-900">${product.price}</p>
                                        <p className="text-gray-900">Qty: {product.quantity}</p>
                                    </div>
                                </div>
                            </li>))) : (<span
                            className={`text-gray-500 font-bold capitalize`}>
                No items, continue shopping.
              </span>)}
                    </ul>

                    <div
                        className="sticky bottom-0 flex-none bg-gray-50 border-t border-gray-200 p-6">
                        <dl className="text-sm font-medium text-gray-500 mt-10 space-y-6">
                            <div className="flex justify-between">
                                <dt>Subtotal</dt>
                                <dd className="text-gray-900">{subtotal}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="flex">
                                    Discount
                                    <span
                                        className="ml-2 rounded-full bg-gray-200 text-xs text-gray-600 py-0.5 px-2 tracking-wide">
                    {discount.code}
                  </span>
                                </dt>
                                <dd className="text-gray-900">-{discount.amount}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt>Taxes</dt>
                                <dd className="text-gray-900">{taxes}</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt>Shipping</dt>
                                <dd className="text-gray-900">{shipping}</dd>
                            </div>
                            <div
                                className="flex items-center justify-between border-t border-gray-200 text-gray-900 pt-6">
                                <dt className="text-base">Total</dt>
                                <dd className="text-base">{total}</dd>
                            </div>
                        </dl>
                    </div>
                </section>

                <section
                    aria-labelledby="payment-heading"
                    className="flex-auto justify-center items-center overflow-y-auto"
                >
                    <div className="max-w-lg mx-auto" id={`stripe`}>
                        {clientSecret && (
                            <Elements options={options} stripe={stripePromise}>
                                <CheckoutForm items={products}/>
                            </Elements>)}
                    </div>
                </section>
            </main>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <NavLink to={`/shop`}>
                    or{" "}
                    <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                    </button>
                </NavLink>
            </div>
        </>
    </>);
}

let mapStateToProps = (state) => {
    return {cart: state.cart};
};

export default connect(mapStateToProps)(CheckOut);
