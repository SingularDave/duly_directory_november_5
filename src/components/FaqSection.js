import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";

function FaqSection(props) {
  // Object to store expanded state for all items
  const [expanded, setExpanded] = useState({});
  // Set an item's expanded state
  const setExpandedItem = (index, isExpanded) => {
    setExpanded({
      ...expanded,
      [index]: isExpanded,
    });
  };

  const items = [
    {
      question: "Why do only a few providers exist in this application?",
      answer: "This is just a prototype.",
    },
    {
      question: "Why is the application so basic?",
      answer: "It is a prototype. Also, a PT made it, so ...¯|_(ツ)_/¯ ",
    },
    {
      question: "Is this application mobile compatible?",
      answer:
        "Yes, but it is not specifically a mobile application. It could be used on a mobile device, but it is not optimized for mobile. A mobile application could be built using the same backend and UI, but it would require many more steps.",
    },
  ];

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />

        {items.map((item, index) => (
          <article
            className="FaqSection__faq-item py-4"
            onClick={() => {
              setExpandedItem(index, !expanded[index]);
            }}
            key={index}
          >
            <h4>
              <span className="text-primary mr-3">
                <i
                  className={
                    "fas" +
                    (expanded[index] ? " fa-minus" : "") +
                    (!expanded[index] ? " fa-plus" : "")
                  }
                />
              </span>
              {item.question}
            </h4>

            {expanded[index] && <div className="mt-3">{item.answer}</div>}
          </article>
        ))}
      </Container>
    </Section>
  );
}

export default FaqSection;
