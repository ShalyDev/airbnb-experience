import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import Card from './components/Card';
import Journal from './components/Journal';
import data from './data';
import journalData from './journalData';
import earthIcon from './images/earthIcon.png';

function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  const journals = journalData.map(journal => {
    return (
      <Journal
        key={journal.id}
        {...journal}
      />
    )
  })

  return (
    < div className="App" >
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
      <div className='journal--header'>
        <img src={earthIcon} className='earth-icon' />
        <h1 className='j-header-txt'>My Travel Journal</h1>
      </div>
      <section className='journal-list'>
        {journals}
      </section>
    </div>
  );
}

export default App;
