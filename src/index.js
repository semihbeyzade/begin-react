import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './component/component';
import Collapse from './component/collapse';

const App2 = () => {

  return (
    <div className='container'>
      <div className='row'>
        <div  className="card-group w-100">
          <div className='col'>
            <Collapse id='collapseExample1' >
            <Card cardTitle='Card Title I' 
           cardText='Lorem Ipsum Text I' 
           updatedTime='Last updated 1 min ago' 
           image='https://picsum.photos/id/1036/200/300'  
            />
            </Collapse>
          </div>

          <div className='col'>
            <Collapse id='collapseExample2'>
            <Card cardTitle='Card Title II' 
            cardText='Lorem Ipsum Text II' 
            updatedTime='Last updated 2 min ago' 
            image='https://picsum.photos/id/1044/200/300' 
            />
            </Collapse>
          </div>

          <div className='col'>
            <Collapse id='collapseExample3'>
            <Card cardTitle='Card Title III' 
            cardText='Lorem Ipsum Text III' 
            updatedTime='Last updated 3 min ago' 
            image='https://picsum.photos/id/1045/200/300' 
            />
            </Collapse>
          </div>

        </div>
      </div>
  </div>
  )
}

ReactDOM.render(
  
    <App2 />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
