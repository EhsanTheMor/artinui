import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import Layout from "./components/Layout";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <App />
                </Layout>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
