import React from "react";
import Motto from "../../components/Motto/Motto";
import Headstart from "../../components/Headstart/Headstart";
import CompanyWorks from "../../components/CompanyWork/CompanyWorks";

export default function Home() {
  return (
    <>
      <CompanyWorks />
      <Headstart />
      <Motto />
    </>
  );
}
