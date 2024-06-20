import './App.css'
import {createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider} from "react-router-dom";
import ProductPage from "./views/pages/products/ProductPage.tsx";
import MasterPage from "./views/pages/templates/MasterPage.tsx";
import AddProductPage from "./views/pages/products/AddProductPage.tsx";
import LoginPage from "./views/pages/auth/LoginPage.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={"/"}>
            <Route path={"/"} element={<Navigate to={"/products"}/>}/>
            <Route path={"/login"} element={<LoginPage />} />
            <Route element={<MasterPage />}>
                <Route path={"products"}>
                    <Route index element={<ProductPage/>}/>
                    <Route path={"add"} element={<AddProductPage />} />
                </Route>
            </Route>
        </Route>
    )
)

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
