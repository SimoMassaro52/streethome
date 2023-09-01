import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Whatsapp from "./Whatsapp";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
	return (
		<>
			<Header />
			<ScrollToTop />
			<Outlet />
			<Whatsapp />
			<Footer />
		</>
	);
}
