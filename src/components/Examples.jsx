import { useState } from "react";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  function handleSelect(selectedButton) {
    // selectedTopic = selectedButton;
    setselectedTopic(selectedButton); // react will use this function will and schedule the update, not synchronous
    console.log(selectedTopic); // will log the old value as rendering is still in progress triggered by setTabContent function on useState
  }

  // It is constant because the app function is executed on each state change, and new variable tabContent is created everytime, hence we can keep it as a constant!
  const [selectedTopic, setselectedTopic] = useState(); // use state returns array of 2 elements, hence using array destructing

  let tabContent = <p>Please select a topic</p>; // can define jsx code in a variable also

  console.log("Examples component executing ...");

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        {!selectedTopic ? <p>Please select a topic.</p> : null}
        {selectedTopic && (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <Section title="Examples" id="examples">
        <Tabs
          // buttonsContainer={Section} custom component
          ButtonsContainer="menu" // built in html component
          buttons={
            <>
              <TabButton
                isActive={selectedTopic === "components"}
                onClick={() => handleSelect("components")}
              >
                Components
              </TabButton>
              <TabButton
                isActive={selectedTopic === "jsx"}
                onClick={() => handleSelect("jsx")}
              >
                Jsx
              </TabButton>
              <TabButton
                isActive={selectedTopic === "props"}
                onClick={() => handleSelect("props")}
              >
                Props
              </TabButton>
              <TabButton
                isActive={selectedTopic === "state"}
                onClick={() => handleSelect("state")}
              >
                State
              </TabButton>
            </>
          }
        >
          {tabContent}
        </Tabs>
      </Section>
    </>
  );
}
