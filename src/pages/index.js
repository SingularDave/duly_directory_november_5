import React from "react";
import Meta from "components/Meta";
import NavbarCustom from "components/NavbarCustom";
import HeroSection from "components/HeroSection";
import StatsSection from "components/StatsSection";
import Footer from "components/Footer";
import SearchSection from "../components/SearchSection";


function IndexPage(props) {
    console.log('props', props);
    return (
        <>
            <Meta/>
            <NavbarCustom
                bg="white"
                variant="light"
                expand="md"
                logo="https://imagedelivery.net/68SN6RDwKYb315QTtTsC9w/1ceef14c-fd53-4b76-6152-890ad4652b00/public"
            />
            <HeroSection
                bg="white"
                textColor="white"
                size="md"
                bgImage="https://imagedelivery.net/68SN6RDwKYb315QTtTsC9w/7f633975-86c0-45ac-bd77-3979bb2a4d00/ScaleDown"
                bgImageOpacity={1}
                title="Provider Directory"
                subtitle=""
                image="https://imagedelivery.net/68SN6RDwKYb315QTtTsC9w/733ebe6c-a6d2-4129-58e4-c2da62fccb00/ScaleDown"
            />
            <SearchSection />
            <StatsSection
                bg="light"
                textColor="dark"
                size="md"
                bgImage=""
                bgImageOpacity={1}
            />
            <Footer
                bg="secondary"
                textColor="dark"
                size="md"
                bgImage=""
                bgImageOpacity={1}
                copyright={`© ${new Date().getFullYear()} Duly Health and Care`}
                logo="https://imagedelivery.net/68SN6RDwKYb315QTtTsC9w/c2ec9ec3-bd8f-4c0f-8705-1459b2f1ac00/public"
            />
        </>
    );
}

export default IndexPage;

// getStaticProps() to fetch data from an external API endpoint and pass it into the page via props. Fetch JSON from
// pages/api/get_eomployees.js.
export async function getStaticProps() {
    const res = await fetch('https://localhost:3000/api/get_employees');
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}
