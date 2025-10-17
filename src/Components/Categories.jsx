import React, { use } from "react";
import { NavLink } from "react-router";

const CategoriesPromis = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const Categoriess = use(CategoriesPromis);
  //  console.log(Categoriess)

  
  return (
    <div>
      <h3 className="font-semibold">All Categories</h3>
      {Categoriess.map((Categori) => ( 
        <div className="py-3 ">
          <NavLink
            to={`/categorisnews/${Categori.id}`}
            key={Categori.id}
            
            className={
              "btn w-full  bg-base-100 border-0 text-left justify-start px-9"
            }
          >
            {" "}
            <h3>{Categori.name}</h3>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Categories;
