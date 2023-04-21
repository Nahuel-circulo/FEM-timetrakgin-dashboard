import exerciseIcon from './assets/icon-exercise.svg';
import playIcon from './assets/icon-play.svg';
import selfCareIcon from './assets/icon-self-care.svg';
import socialIcon from './assets/icon-social.svg';
import studyIcon from './assets/icon-study.svg';
import workIcon from './assets/icon-work.svg';

function App() {

  return (
    <main>
      <div className="dashboard">

        <div className="card" id="profile-card">
          <h1>Profile</h1>
          <div className="card-body"></div>
        </div>

        <div className="card" id="work-card">
          <img src={workIcon} alt="work-icon" />
          <div className="card-body">

            
          </div>
        </div>

        <div className="card" id="play-card">
          <img src={playIcon} alt="play-icon" />
          <div className="card-body">

            
          </div>
        </div>

        <div className="card" id="study-card">
          <img src={studyIcon} alt="study-icon" />
          <div className="card-body">

            
          </div>
        </div>

        <div className="card" id="exercise-card">
          <img src={exerciseIcon} alt="exercise-icon" />
          <div className="card-body">

            
          </div>
        </div>

        <div className="card" id="social-card">
          <img src={socialIcon} alt="social-icon" />
          <div className="card-body">

            
          </div>
        </div>

        <div className="card" id="self-care-card">
          <img src={selfCareIcon} alt="self-care-icon" />
          <div className="card-body">

            
          </div>
        </div>

      </div>
    </main>
  )
}

export default App
