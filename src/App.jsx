import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";

import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import TabButton from "./components/TabButton.jsx";

function App() {
  // let selectedTopic = 'Please click a button';
  function handleSelect(selectedButton) {
    // selectedTopic = selectedButton;
    setselectedTopic(selectedButton); // react will use this function will and schedule the update, not synchronous
    console.log(selectedTopic); // will log the old value as rendering is still in progress triggered by setTabContent function on useState
  }

  // It is constant because the app function is executed on each state change, and new variable tabContent is created everytime, hence we can keep it as a constant!
  const [selectedTopic, setselectedTopic] = useState(); // use state returns array of 2 elements, hence using array destructing

  console.log("App component executing");

  let tabContent = <p>Please select a topic</p>; // can define jsx code in a variable also
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept key={item.title} {...item} />
            ))}
          </ul>
        </section>
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
      </main>
    </div>
  );
}

export default App;
