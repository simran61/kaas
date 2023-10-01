import React from "react";
import Motto from "../../components/Motto/Motto";
import Headstart from "../../components/Headstart/Headstart";
import CompanyWorks from "../../components/CompanyWork/CompanyWorks";
import Carousel from "../../components/Carousel/Carousel";

export default function Home() {
  return (
    <>
      <Carousel />
      <CompanyWorks />
      <Headstart />
      <Motto />
    </>
  );
}
