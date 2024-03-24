"use client";
import "../../devlink/global.css";
import { useState, useContext } from "react";
import { Header } from "../Components/Header";
import MainContainer from "../Components/MainContainer";
import { ProductCardList } from "../Components/ProductCardList";
import { Footer } from "../Components/Footer";
import { HeaderContext, HeaderProvider } from "@/Helpers/headerContext";
import "../globalStyling.css";
import { ProductContext } from "@/Helpers/ProductContext";

export default function Home() {
  return (
    <div className="page-wrapper">
      <HeaderProvider>
        <Header></Header>
        <MainContainer>
          <ProductCardList></ProductCardList>
        </MainContainer>
      </HeaderProvider>
      <Footer></Footer>
    </div>
  );
}
