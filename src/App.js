import React, { useState } from 'react';
import data from './data';
import List from './List';
const [people, setPeople] = useState(data)
function App() {
  return (
  <main>
  <section className="container">
    <h3>{people.length} Birthdays today</h3>
    <List people={people}/>
    <button onClick={()=> setPeople([])}>
      Clear All
    </button>
  </section>
  </main>
  );
}

export default App;
