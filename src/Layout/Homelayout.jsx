import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import Letestnews from "../Components/Letestnews";
import Navbar from "../Components/Navbar";

const Homelayout = () => {
  return (
    <div>
      <header>

      </header>
      <main>
        <section className="left-side">
            <Header></Header>
            <section>
                <Letestnews></Letestnews>
            </section>
            <section>
                <Navbar></Navbar>
            </section>
        </section>
        
        <section className="mian">
            <Outlet></Outlet>

        </section>
        <section className="right-side">

        </section>

      </main>
    </div>
  );
};

export default Homelayout;
