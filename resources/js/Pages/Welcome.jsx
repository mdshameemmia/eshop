import BestSelling from "@/Components/frontend/BestSelling";
import CallForQuery from "@/Components/frontend/CallForQuery";
import Feature from "@/Components/frontend/Feature";
import KidsProduct from "@/Components/frontend/KidsProduct";
import ManProduct from "@/Components/frontend/ManProduct";
import NewArrival from "@/Components/frontend/NewArrival";
import ProductFeature from "@/Components/frontend/ProductFeature";
import Review from "@/Components/frontend/Review";
import Footer from "@/Layouts/frontend/Footer";
import FooterBottom from "@/Layouts/frontend/FooterBottom";
import MainMenu from "@/Layouts/frontend/MainMenu";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";

export default function Welcome() {
    return (
        <>
            <GuestLayout>
                <Head title="Shameem" />
                <MainMenu />
                <Feature />
                <ProductFeature />

                <CallForQuery />

                <BestSelling />
                <NewArrival />

                <CallForQuery />

                <KidsProduct />
                <ManProduct />
                <Review />
                
                <Footer />
                <FooterBottom />
            </GuestLayout>
        </>
    );
}
