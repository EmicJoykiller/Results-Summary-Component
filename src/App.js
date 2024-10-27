
import './App.css';
import reactionIcon from './assets/images/icon-reaction.svg';
import memoryIcon from './assets/images/icon-memory.svg';
import verbalIcon from './assets/images/icon-verbal.svg';
import visualIcon from './assets/images/icon-visual.svg';


function App() {
  return (
    <div className="App">
      <main class="container">
      <div class="wraper">
        <section class="left-section">
          <h1>Your Result</h1>
          <div class="circle">
            <h1>76</h1>
            <p>of 100</p>
          </div>
          <h2>Great</h2>
          <p>
            You scored higher than 65% of<br />
            the people who have taken<br />
            these tests.
          </p>
        </section>
        <section class="right-section">
          <h1>Summary</h1>
          <div class="cards-holder">
            <div class="cards card1">
            <img src={reactionIcon} alt="Reaction Icon" />
              <h1>Reaction</h1>
              <p>80 <span>/ 100</span></p>
            </div>
            <div class="cards card2">
            <img src={memoryIcon} alt="Memory Icon" />
              <h1>Memory</h1>
              <p>92 <span>/ 100</span></p>
            </div>
            <div class="cards card3">
            <img src={verbalIcon} alt="Verbal Icon" />
              <h1>Verbal</h1>
              <p>61 <span>/ 100</span></p>
            </div>
            <div class="cards card4">
            <img src={visualIcon} alt="Visual Icon" />
              <h1>Visual</h1>
              <p>72 <span> / 100</span></p>
            </div>
          </div>
          <button class="btn">Continue</button>
        </section>
      </div>
    </main>
    </div>
  );
}

export default App;
