import React from "react";
import Meta from "components/Meta";
import NavbarCustom from "components/NavbarCustom";
import FaqSection from "components/FaqSection";
import Footer from "components/Footer";

function FaqPage(props) {
  return (
    <>
      <Meta title="Faq" />
      <NavbarCustom
        bg="white"
        variant="light"
        expand="md"
        logo="https://imagedelivery.net/68SN6RDwKYb315QTtTsC9w/1ceef14c-fd53-4b76-6152-890ad4652b00/public"
      />
      <FaqSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Frequently Asked Questions"
        subtitle=""
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

export default FaqPage;
