import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCaraousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/men_kurta";

const Homepage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="py-20 space-y-10 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Kurta"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Shoes"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Shirt"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Womens Saree"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Womens Shoes"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Womens Dress"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Womens Suit"} />
      </div>
    </div>
  );
};

export default Homepage;
