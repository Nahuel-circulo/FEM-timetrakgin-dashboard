import exerciseIcon from '/icon-exercise.svg';
import playIcon from '/icon-play.svg';
import selfcareIcon from '/icon-self-care.svg';
import socialIcon from '/icon-social.svg';
import studyIcon from '/icon-study.svg';
import workIcon from '/icon-work.svg';
import ellipsisIcon from '/icon-ellipsis.svg';
//@ts-ignore
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
            <img src="/image-jeremy.png" alt="profile picture" />
            <p>Report for</p>
            <h3 className='profile-card__username'>Jeremy Robson</h3>
          </div>
          <div className='profile-card__actions'>
            <button className={`${period === 'Day' ? 'active' : ''} btn`} onClick={() => setPeriod('Day')}>Daily</button>
            <button className={`${period === 'Week' ? 'active' : ''} btn`} onClick={() => setPeriod('Week')}>Weekly</button>
            <button className={`${period === 'Month' ? 'active' : ''} btn`} onClick={() => setPeriod('Month')}>Monthly</button>
          </div>
        </div>
        {
          data.map((item: dashboardData) => (
            <div key={item.title} className="card" id={`${item.title.replace(/\s+/g, '').toLowerCase()}-card`}>
              <img className='card-image' src={iconReturn(item.title)} alt="work-icon" />
              <div className="card-body">
                <h3 className='card-body__title'>{item.title}</h3>
                <img src={ellipsisIcon} alt="dots" />

                {(period === 'Day') && (
                  <>
                    <h2 className='card-body__currently'>{item.timeframes.daily.current}hrs</h2>
                    <p className='card-body__last'>Last {period}-{item.timeframes.daily.previous}hrs</p>
                  </>
                )}

                {(period === 'Week') && (
                  <>
                    <h2 className='card-body__currently'>{item.timeframes.weekly.current}hrs</h2>
                    <p className='card-body__last'>Last {period}-{item.timeframes.weekly.previous}hrs</p>
                  </>
                )}

                {(period === 'Month') && (
                  <>
                    <h2 className='card-body__currently'>{item.timeframes.monthly.current}hrs</h2>

                    <p className='card-body__last'>Last {period}-{item.timeframes.monthly.previous}hrs</p>
                  </>
                )}
              </div>
            </div>
          ))
        }
      </div>
    </main>
  )
}




export default App
