import React from "react";
import { createRoot } from "react-dom/client";
import '../assets/tailwind.css'
import Popup from "./popup";
import Todo from "./todo";

function init() {
    const appContainer = document.createElement('div')
    document.body.appendChild(appContainer)
    if (!appContainer) {
        throw new Error("Can not find AppContainer");
    }
    const root = createRoot(appContainer)
    console.log(appContainer)
    root.render(

        <div className="">
            <Popup />
            <Todo />
        </div>
    );
}

init();