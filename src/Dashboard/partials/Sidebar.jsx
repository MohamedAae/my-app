import React, {useEffect, useRef, useState} from 'react';
import {NavLink, useLocation} from 'react-router-dom';

const Sidebar = ({sidebarOpen, setSidebarOpen}) => {

    const location = useLocation();
    const {pathname} = location;

    const trigger = useRef(null);
    const sidebar = useRef(null);

    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
    const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

    // close on click outside
    useEffect(() => {
        const clickHandler = ({target}) => {
            if (!sidebar.current || !trigger.current) return;
            if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
            setSidebarOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({keyCode}) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    useEffect(() => {
        localStorage.setItem('sidebar-expanded', sidebarExpanded);
        if (sidebarExpanded) {
            document.querySelector('body').classList.add('sidebar-expanded');
        } else {
            document.querySelector('body').classList.remove('sidebar-expanded');
        }
    }, [sidebarExpanded]);

    return (<div>
        {/* Sidebar backdrop (mobile only) */}
        <div
            className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-hidden="true"></div>

        {/* Sidebar */}
        <div
            id="sidebar"
            ref={sidebar}
            className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-background p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}
        >

            {/* Sidebar header */}
            <div className="flex justify-between mb-10 pr-3 sm:px-2">
                {/* Close button */}
                <button
                    ref={trigger}
                    className="lg:hidden text-slate-500 hover:text-slate-400"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-controls="sidebar"
                    aria-expanded={sidebarOpen}
                >
                    <span className="sr-only">Close sidebar</span>
                    <svg className="w-6 h-6 fill-current"
                         viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z"/>
                    </svg>
                </button>
                {/* Logo */}
                <NavLink end to="/" className="block">
                    <img
                        width={150}
                        src={`/logo.png`}
                        alt={`Book Store`}
                    />
                </NavLink>
            </div>

            {/* Links */}
            <div className="space-y-8">
                {/* Pages group */}
                <div>
                    <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
                            <span
                                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                                aria-hidden="true">•••</span>
                        <span
                            className="lg:hidden lg:sidebar-expanded:block 2xl:block">Pages</span>
                    </h3>
                    <ul className="mt-3">
                        {/* Dashboard */}
                        <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname === '/dashboard' && 'bg-theme-hover'}`}>
                            <NavLink end to="/dashboard"
                                     className={`block text-slate-200 hover:text-white truncate transition duration-150 ${pathname === '/dashboard' && 'hover:text-slate-200'}`}>
                                <div className="flex items-center">
                                    <svg className="shrink-0 h-6 w-6"
                                         viewBox="0 0 24 24">
                                        <path
                                            className={`fill-current text-slate-400 ${pathname === '/' && '!text-indigo-500'}`}
                                            d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"/>
                                        <path
                                            className={`fill-current text-slate-600 ${pathname === '/' && 'text-indigo-600'}`}
                                            d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"/>
                                        <path
                                            className={`fill-current text-slate-400 ${pathname === '/' && 'text-indigo-200'}`}
                                            d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"/>
                                    </svg>
                                    <span
                                        className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Dashboard</span>
                                </div>
                            </NavLink>
                        </li>
                        {/* Products */}
                        <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('products') && 'bg-theme-hover'}`}>
                            <NavLink end to="/dashboard/products"
                                     className={`block truncate transition duration-150 ${pathname.includes('products') ? 'text-background' : 'text-white'}`}>
                                <div className="flex items-center">
                                    <svg
                                        className="shrink-0 h-6 w-6"
                                        viewBox="0 0 24 24">
                                        <path
                                            className={`fill-current text-slate-400 ${pathname.includes('products') && 'text-indigo-300'}`}
                                            d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"/>
                                        <path
                                            className={`fill-current text-slate-700 ${pathname.includes('products') && '!text-indigo-600'}`}
                                            d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"/>
                                        <path
                                            className={`fill-current text-slate-600 ${pathname.includes('products') && 'text-indigo-500'}`}
                                            d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"/>
                                    </svg>
                                    <span
                                        className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Products</span>
                                </div>
                            </NavLink>
                        </li>
                        {/* Campaigns */}
                        <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('orders') && 'bg-slate-900'}`}>
                            <NavLink end to="/dashboard/orders"
                                     className={`block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes('orders') && 'hover:text-slate-200'}`}>
                                <div className="flex items-center">
                                    <svg className="shrink-0 h-6 w-6"
                                         viewBox="0 0 24 24">
                                        <path
                                            className={`fill-current text-slate-600 ${pathname.includes('orders') && 'text-indigo-500'}`}
                                            d="M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z"/>
                                        <path
                                            className={`fill-current text-slate-400 ${pathname.includes('orders') && 'text-indigo-300'}`}
                                            d="M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z"/>
                                    </svg>
                                    <span
                                        className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Orders</span>
                                </div>
                            </NavLink>
                        </li>
                        {/* Messages */}
                        <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('reviews') && 'bg-slate-900'}`}>
                            <NavLink end to="/dashboard/reviews"
                                     className={`block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes('reviews') && 'hover:text-slate-200'}`}>
                                <div className="flex items-center">
                                    <svg className="shrink-0 h-6 w-6"
                                         viewBox="0 0 24 24">
                                        <path
                                            className={`fill-current text-slate-600 ${pathname.includes('reviews') && 'text-indigo-500'}`}
                                            d="M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z"/>
                                        <path
                                            className={`fill-current text-slate-400 ${pathname.includes('reviews') && 'text-indigo-300'}`}
                                            d="M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z"/>
                                    </svg>
                                    <span
                                        className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Reviews</span>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Expand / collapse button */}
            <div
                className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
                <div className="px-3 py-2">
                    <button
                        onClick={() => setSidebarExpanded(!sidebarExpanded)}>
                            <span
                                className="sr-only">Expand / collapse sidebar</span>
                        <svg
                            className="w-6 h-6 fill-current sidebar-expanded:rotate-180"
                            viewBox="0 0 24 24">
                            <path className="text-slate-400"
                                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"/>
                            <path className="text-slate-600"
                                  d="M3 23H1V1h2z"/>
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    </div>);
}

export default Sidebar;