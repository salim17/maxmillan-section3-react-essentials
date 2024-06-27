import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';

import { CORE_CONCEPTS } from './data.js';
import TabButton from './components/TabButton.jsx';



function App() {

  // let tabContent = 'Please click a button';
  function handleSelect(selectedTab) {
    // tabContent = selectedTab;
    setTabContent(selectedTab); // react will use this function will and schedule the update, not synchronous
    console.log(tabContent); // will log the old value as rendering is still in progress triggered by setTabContent function on useState
  }

  // It is constant because the app function is executed on each state change, and new variable tabContent is created everytime, hence we can keep it as a constant!
  const [tabContent, setTabContent] = useState('Please click a button'); // use state returns array of 2 elements, hence using array destructing

  console.log("App component executing");
  return (
    <div>
      <Header></Header>
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept image={CORE_CONCEPTS[0].image} title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('Jsx')}>Jsx</TabButton>
            <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
          </menu>
        </section>
        {tabContent}
      </main>
    </div>
  );


}

export default App;
