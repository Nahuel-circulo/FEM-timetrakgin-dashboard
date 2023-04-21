import exerciseIcon from './assets/icon-exercise.svg';
import playIcon from './assets/icon-play.svg';
import selfcareIcon from './assets/icon-self-care.svg';
import socialIcon from './assets/icon-social.svg';
import studyIcon from './assets/icon-study.svg';
import workIcon from './assets/icon-work.svg';

import data from './data/data.js';
interface dashboardData {
  title: string,
  timesframe: {
    dayly: {
      current: number
      previus: number
    },
    weekly: {
      current: number
      previus: number
    },
    monthly: {
      current: number
      previus: number
    },
  }
}

function App() {

  const iconReturn = (word: string) => {

    switch (word) {
      case 'Work':
        return workIcon

      case 'Study':
        return studyIcon

      case 'Play':
        return playIcon

      case 'Exercise':
        return exerciseIcon

      case 'Social':
        return socialIcon

      case 'Self Care':
        return selfcareIcon


      default:
        return workIcon

    }
  }


  return (
    <main>
      <div className="dashboard">

        <div className="card" id="profile-card">
          <h1>Profile</h1>
          <div className="card-body"></div>
        </div>

        {
          data.map((item: dashboardData) => (



            <div className="card" id={`${item.title.replace(/\s+/g, '').toLowerCase()}-card`}>
              <img src={iconReturn(item.title)} alt="work-icon" />
              <div className="card-body">
                <h3>{item.title}</h3> <button>...</button>
                <h2>32</h2> <p>asd asd asd</p>

              </div>
            </div>
          )

          )
        }



      </div>
    </main>
  )
}




export default App
