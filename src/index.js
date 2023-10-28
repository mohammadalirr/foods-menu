import React from "react";
import ReactDom from 'react-dom/client';
import App from '././App'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Irani from "./Components/Menus/Irani";
import Arabi from "./Components/Menus/Arabi";
import Italian from "./Components/Menus/Italian";
import Foods from "./Components/Foods";

import All from "./Components/Menus/All";
// import MashPolo from "./Components/Menus/Foods-components.jsx/Iran/MashPolo";
// import AdasPolo from "./Components/Menus/Foods-components.jsx/Iran/AdasPolo";
// import DamiGoge from "./Components/Menus/Foods-components.jsx/Iran/DamiGoge";
// import HavigPolo from "./Components/Menus/Foods-components.jsx/Iran/HavigPolo";
// import GheymeNesar from "./Components/Menus/Foods-components.jsx/Iran/GheymeNesar";
import IraniFoods from "../src/Components/Menus/Foods-components.jsx/Iran/IraniFoods";
import ItalianFoods from "./Components/Menus/Foods-components.jsx/Italy/ItalianFoods";
import ArabiFoods from "./Components/Menus/Foods-components.jsx/Arabia/ArabiFoods";

// import BabaGhanoosh from "./Components/Menus/Foods-components.jsx/Arabia/BabaGhanoosh";
// import Mohammare from "./Components/Menus/Foods-components.jsx/Arabia/Mohammare";
// import Balbaki from "./Components/Menus/Foods-components.jsx/Arabia/Balbaki";
// import Felafel from "./Components/Menus/Foods-components.jsx/Arabia/Felafel";
// import Homos from "./Components/Menus/Foods-components.jsx/Arabia/Homos";

// import Brosketa from "./Components/Menus/Foods-components.jsx/Italy/Brosketa";
// import Pasta from "./Components/Menus/Foods-components.jsx/Italy/Pasta";
// import Margarita from "./Components/Menus/Foods-components.jsx/Italy/Margarita";

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/Menu" element={<Foods />}>
                        <Route path="/Menu/Irani" element={<Irani />}>
                            <Route path="/Menu/Irani/:foodId" element={<IraniFoods />} />
                        </Route>
                        <Route path="/Menu/Arabi" element={<Arabi />}>
                            <Route path="/Menu/Arabi/:foodId" element={<ArabiFoods />} />
                        </Route>

                        <Route path="/Menu/Italian" element={<Italian />}>
                            <Route path="/Menu/Italian/:foodId" element={<ItalianFoods />} />
                        </Route>
                    </Route>

                </Route>

                <Route path="/Menu/All" element={<All />} />


                {/* <Route path="/Menu/Irani/mashPolo" element={<MashPolo/>} />
                <Route path="/Menu/Irani/adasPolo" element={<AdasPolo/>} />
                <Route path="/Menu/Irani/havigPolo" element={<HavigPolo/>} />
                <Route path="/Menu/Irani/damiGoge" element={<DamiGoge/>} />
                <Route path="/Menu/Irani/gheymeNesar" element={<GheymeNesar/>} /> */}




                {/* <Route path="/Menu/Arabi/babaghanoosh" element={<BabaGhanoosh />} />
                <Route path="/Menu/Arabi/felafel" element={<Felafel />} />
                <Route path="/Menu/Arabi/mohammare" element={<Mohammare />} />
                <Route path="/Menu/Arabi/homos" element={<Homos />} />
                <Route path="/Menu/Arabi/balbaki" element={<Balbaki />} /> */}


                {/* <Route path="/Menu/Italian/brosketa" element={<Brosketa />} />
                <Route path="/Menu/Italian/pasta" element={<Pasta />} />
                <Route path="/Menu/Italian/margarita" element={<Margarita />} /> */}



                <Route path="*" element={
                    <main style={{ textAlign: "center" }}>
                        <p>چنین صفه ای وجود ندارد.</p>
                    </main>
                } />


            </Routes>
        </React.StrictMode>
    </BrowserRouter>
)
