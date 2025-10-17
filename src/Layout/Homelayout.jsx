import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import Letestnews from "../Components/Letestnews";
import Navbar from "../Components/Navbar";
import Leftaside from "../Components/homelayout/Leftaside";
import Rightaside from "../Components/homelayout/Rightaside";

const Homelayout = () => {
  return (
    <div>
      <header></header>
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

        <div className="max-w-10/12 mx-auto grid gap-y-1 grid-cols-12">
          <section className="col-span-3">
            <Leftaside></Leftaside>
          </section>

          <section className="mian col-span-6">
            <Outlet></Outlet>
          </section>
          <section className="right-side col-span-3">
            <Rightaside></Rightaside>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Homelayout;
