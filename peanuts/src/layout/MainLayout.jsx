import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import WhatsAppBadge from "../components/WhatsAppBadge";
import WhatsAppButton from "../components/WhatsAppBadge";

function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <WhatsAppBadge /> */}
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default MainLayout;
