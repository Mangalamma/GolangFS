import Cars_View from "./Car/Cars_View"
import CarsList from "./Car/CarsList"
import CarsCreate from "./Car/CarsCreate"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<CarsList />} />
                    <Route path="/Car/list" element={<CarsList />} />
                    <Route path="/Car/create" element={<CarsCreate />} />
                    <Route path="/Car/view" element={<Cars_View />} />
                </Routes>

            </BrowserRouter>
        </>
    );
}