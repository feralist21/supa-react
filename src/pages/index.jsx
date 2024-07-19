import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/Home";
import LoginPage from "@/pages/Login";

const Router = () => {
    const routes = [
        {
            url: "/",
            page: <HomePage />,
        },
        {
            url: "/login",
            page: <LoginPage />,
        },
    ];

    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route, i) => (
                    <Route key={`route${i}`} path={route.url} element={route.page} />
                ))}
            </Routes>
        </BrowserRouter>
    );
};

export { Router };
