import {useState} from 'react';
import data from './lessonMetaData'

import LayoutPicker from '../Layouts/LayoutPicker';

const ChooseLesson = () => {

  const [lesson] = useState([data])
  const [introState, setIntroState] = useState(true)

  return (
    <main className="dark-mode">
      {introState ? (<div className="content">
        <div className="flex-box flex-center">
          {lesson.map((lesson, i) => {
            return (
              <div
                key={i}
                className="lesson-div-whole"
              >
                     <div className="button-title-holder">
                  <h3 className="lesson-title-picker">{lesson.title}</h3>
                
                  </div>
                  <div className="flex-box flex-center">
                    <div className="lesson-div flex-box flex-column column-lg-6 column-sm-12 column-md-12">
                  <img
                    src={lesson.image}
                    alt={lesson.name}
                    className="lesson-image-picker"
                  />
                  <div className="flex-box flex-center">
                  <button
                        className="button button-dark"
                        onClick={() => setIntroState(false)}
                      >   
                        Start 
                      </button>
                  </div>
             
                  
                </div>
              </div>
             
              </div>
            );
          })}
        </div>
      </div>):(<div><LayoutPicker/></div>)}
    
  </main>
  )
  
  }
  export default ChooseLesson;

  


