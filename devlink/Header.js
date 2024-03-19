import React from "react";
import * as _Builtin from "./_Builtin";

export function Header({
  as: _Component = _Builtin.NavbarWrapper,
  headingText = {},
  cartItems = {},
}) {
  return (
    <_Component
      className="navbar"
      tag="div"
      config={{
        animation: "default",
        collapse: "medium",
        docHeight: false,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
      {...cartItems}
    >
      <_Builtin.NavbarContainer className="container-large" tag="div">
        <_Builtin.Block className="navbar-main-wrapper" tag="div">
          <_Builtin.Block className="navbar-wrapper" tag="div">
            <_Builtin.NavbarBrand
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block className="logo-text" tag="div">
                {"House of Plants"}
              </_Builtin.Block>
            </_Builtin.NavbarBrand>
            <_Builtin.NavbarMenu
              className="nav-menu"
              tag="nav"
              role="navigation"
            >
              <_Builtin.Block className="cart" tag="div">
                <_Builtin.NavbarLink
                  className="nav-link"
                  options={{
                    href: "#",
                  }}
                >
                  {"Cart"}
                </_Builtin.NavbarLink>
                <_Builtin.Block className="text-block" tag="div" {...cartItems}>
                  {"(0)"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.NavbarMenu>
          </_Builtin.Block>
          <_Builtin.NavbarButton tag="div">
            <_Builtin.Icon
              widget={{
                type: "icon",
                icon: "nav-menu",
              }}
            />
          </_Builtin.NavbarButton>
          <_Builtin.Block className="header-content-wrapper" tag="div">
            <_Builtin.Block
              className="header-text-wrapper position-relative"
              id="w-node-c01342e7-b077-84b1-dfd3-6afa2051ed8f-2051ed82"
              tag="div"
            >
              <_Builtin.Heading className="heading-1" tag="h1" {...headingText}>
                {"Shop from our "}
                <br />
                {"exclusive collection"}
              </_Builtin.Heading>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.NavbarContainer>
    </_Component>
  );
}
