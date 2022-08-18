import {Disclosure} from "@headlessui/react";
import {MinusSmIcon, PlusSmIcon} from "@heroicons/react/solid";

const Filters = (props) => {

    const discountRates = props.discountRates;
    const discountRate = props.discountRate;
    const setDiscountRate = props.setDiscountRate;
    const setPage = props.setPage;
    const filters = props.filters;
    const checkIfChecked = props.checkIfChecked;

    return (<form className="hidden lg:block">
        <h3 className="sr-only">Categories</h3>
        {props.isAdmin ? "" : <ul
            role="list"
            className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200"
        >
            {discountRates.map((rate) => (<li
                key={rate.name}
                onClick={() => {
                    setDiscountRate(rate.discount);
                    setPage(1);
                }}
                className={rate.discount == discountRate ? "text-theme-hover" : "text-gray-400"}
            >
                <a href={rate.href}>{rate.name}</a>
            </li>))}
        </ul>}

        {<Disclosure
            as="div"
            key={filters.id}
            className="border-b border-gray-200 py-6"
        >
            {({open}) => (<>
                <h3 className="-my-3 flow-root">
                    <Disclosure.Button
                        className="py-3 w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {filters.name}
                              </span>
                        <span
                            className="ml-6 flex items-center">
                                {open ? (<MinusSmIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />) : (<PlusSmIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />)}
                              </span>
                    </Disclosure.Button>
                </h3>
                <Disclosure.Panel
                    className="pt-6">
                    <div className="space-y-4">
                        {filters.options.map((option, optionIdx) => (<div
                            key={option.name}
                            className="flex items-center"
                        >
                            <input
                                onClick={(event) => checkIfChecked(event, option._id)}
                                id={`filter-${filters.id}-${optionIdx}`}
                                name={`${filters.id}[]`}
                                defaultValue={option._id}
                                type="checkbox"
                                defaultChecked={option.checked}
                                className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                                htmlFor={`filter-${filters.id}-${optionIdx}`}
                                className="ml-3 text-sm text-gray-600"
                            >
                                {option.name}
                            </label>
                        </div>))}
                    </div>
                </Disclosure.Panel>
            </>)}
        </Disclosure>}
    </form>)
}

export default Filters;