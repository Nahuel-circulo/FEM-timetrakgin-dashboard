import exerciseIcon from './assets/icon-exercise.svg';
import playIcon from './assets/icon-play.svg';
import selfcareIcon from './assets/icon-self-care.svg';
import socialIcon from './assets/icon-social.svg';
import studyIcon from './assets/icon-study.svg';
import workIcon from './assets/icon-work.svg';
import ellipsisIcon from './assets/icon-ellipsis.svg';

import data from './data/data.js';
import { useState } from 'react';

interface Timeframe {
  current: number
  previous: number
}
interface dashboardData {
  title: string,
  timeframes: {
    daily: Timeframe,
    weekly: Timeframe,
    monthly: Timeframe
  },
}


function App() {

  const [period, setPeriod] = useState('Week');


  /*   const periodReturn = (period: string) => {
  
      switch (period) {
        case :
          
          break;
      
        default:
          break;
      }
    } */

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
        <div className="profile-card">
          <div className="profile-card__body">
            <img src="/public/image-jeremy.png" alt="profile picture" />
            <p>Report for</p>
            <h3 className='profile-card__username'>Jeremy Robson</h3>
          </div>
          <div className='profile-card__actions'>
            <button className={`${period === 'Day' ? 'active' : ''} btn`}>Daily</button>
            <button className={`${period === 'Week' ? 'active' : ''} btn`}>Weekly</button>
            <button className={`${period === 'Month' ? 'active' : ''} btn`}>Monthly</button>
          </div>
        </div>
        {
          data.map((item: dashboardData) => (
            <div key={item.title} className="card" id={`${item.title.replace(/\s+/g, '').toLowerCase()}-card`}>
              <img className='card-image' src={iconReturn(item.title)} alt="work-icon" />
              <div className="card-body">
                <h3 className='card-body__title'>{item.title}</h3>
                <img src={ellipsisIcon} alt="dots" />
                <h2 className='card-body__currently'>{item.timeframes.daily.current}hrs</h2>
                <p className='card-body__last'>Last {period}-{item.timeframes.daily.previous}hrs</p>
              </div>
            </div>
          ))
        }
      </div>
    </main>
  )
}




export default App
