import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";

const useQuery = () => {
    const { search } = useLocation();

     return React.useMemo(() => new URLSearchParams(search), [search]);
}

const postToDB = async (paymentId, paymentStatus, items) => {
    try {
        const res = axios.post(`http://127.0.0.1:5003/orders`, {paymentId, paymentStatus, items: items});
    } catch (e) {
        throw new Error(e);
    }
}

const getOrderItems = () => {
    const items = localStorage.getItem("order");
    return items;
}

let sentRequests = 0;

const ThankYou = () => {

    let query = useQuery();
    const paymentId = query.get("payment_intent");
    const paymentStatus = query.get("redirect_status");

    useEffect(() => {
        if( sentRequests === 1 ) return;
        postToDB(paymentId, paymentStatus, getOrderItems());
        ++sentRequests;
        // localStorage.removeItem("order");
    }, []);

    return (<>
            <div
                className="relative flex flex-1 flex-col items-center justify-center pt-12 pb-16">
                <img
                    src={`/logo.jpeg`}
                    className="mx-auto mb-8 h-12 w-auto"
                />
                <div className="max-w-2xl text-center"><h1
                    className="text-3xl font-extrabold text-theme-hover sm:text-4xl">Thank
                    you! Now check your email…</h1>
                    <div className="mt-6 text-base leading-7 text-slate-600">We have received your Order and we will start <strong className="font-semibold text-slate-900">processing</strong> it soon.
                    </div>
                    <a className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 mt-6"
                       href="/"><span>Track Your Order</span></a></div>
            </div>
        </>)
}

export default ThankYou;
