import React from "react";
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom"
import Main from "../components/Main/Main";
import Aboutme from "../components/Aboutme/Aboutme";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Work from "../components/Work/Work"
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";

const Routes_Portfolio = () =>{
    return(
        <BrowserRouter>
        {/*Layout*/}
        <Header></Header>


        {/*Contenido central*/}
        <section id="content" className="content">
            <Routes>
                <Route path="/" element={<Main></Main>}/>
                <Route path="/main" element={<Main></Main>}/>
                <Route path="/aboutme" element={<Aboutme></Aboutme>}/>
                <Route path="/projects" element={<Projects></Projects>}/>
                <Route path="/skills" element={<Skills></Skills>}/>
                <Route path="/work" element={<Work></Work>}/>
                <Route path="/contact" element={<Contact></Contact>}/>

            </Routes>
        </section>

        <Footer></Footer>
        </BrowserRouter>   
    )
}
export default Routes_Portfolio;