import { useState } from "react";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";

export default function Examples() {

  function handleSelect(selectedButton) {
    // selectedTopic = selectedButton;
    setselectedTopic(selectedButton); // react will use this function will and schedule the update, not synchronous
    console.log(selectedTopic); // will log the old value as rendering is still in progress triggered by setTabContent function on useState
  }

  // It is constant because the app function is executed on each state change, and new variable tabContent is created everytime, hence we can keep it as a constant!
  const [selectedTopic, setselectedTopic] = useState(); // use state returns array of 2 elements, hence using array destructing

  let tabContent = <p>Please select a topic</p>; // can define jsx code in a variable also

  console.log("Examples component executing ...")

  return (
    <>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton
            isActive={selectedTopic === "components"}
            onSelect={() => handleSelect("components")}
          >
            Components
          </TabButton>
          <TabButton
            isActive={selectedTopic === "jsx"}
            onSelect={() => handleSelect("jsx")}
          >
            Jsx
          </TabButton>
          <TabButton
            isActive={selectedTopic === "props"}
            onSelect={() => handleSelect("props")}
          >
            Props
          </TabButton>
          <TabButton
            isActive={selectedTopic === "state"}
            onSelect={() => handleSelect("state")}
          >
            State
          </TabButton>
        </menu>
      </section>
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
    </>
  );
}
