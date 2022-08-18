const Notification = (props) => {
    return(
        <header className={`w-full fixed top-0 left-0 bg-${props.bg}-500 text-white z-50 py-2 text-center font-medium animate-notification ${props.show ? "" : "hidden"}`}>
            {props.message ? props.message : "Nothing Left To Do!"}
        </header>
    )
}

export default Notification;
