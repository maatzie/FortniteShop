import { useEffect, useContext } from "react";
import { ShopContext } from "../context";

function BasketAlert() {
    const {alertName, closeAlert} = useContext(ShopContext);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);
        return () => {
            clearTimeout(timerId);
        }
    }, [alertName]);
    return (
        <div id="toast-container">
            <div className="toast">{alertName} added to basket.</div>
        </div>
    );
}

export {BasketAlert}