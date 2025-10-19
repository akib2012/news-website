import React from "react";
import Header from "../Components/Header";
import Sociallogin from "../Components/Sociallogin";
import Findus from "../Components/homelayout/Findus";
import Qzone from "../Components/Qzone";
import { useLoaderData, useParams } from "react-router";
import NewsdetilsCard from "../Components/NewsdetilsCard";

const Newsdetils = () => {

    const allnews = useLoaderData();
    // console.log(datas);
    const {id} = useParams();
    console.log(id)

  const news = allnews.find(data => String(data.id) === id)
  return (
    <div className="max-w-6/12 mx-auto">
      <header>
        <Header></Header>
      </header>
      <div className="grid grid-cols-12 gap-5 mt-7">
        <div className="col-span-9">
           {
            <NewsdetilsCard news={news}></NewsdetilsCard>
           }

        </div>
        <div className="col-span-3">
          <div>
            <Sociallogin></Sociallogin>
          </div>
          <div>
            <Findus></Findus>
          </div>
          <div>
            <Qzone></Qzone>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsdetils;
