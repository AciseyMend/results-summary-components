import images from './data/images';
import './App.css';


function App() {




  return (
    <div className="App ">

      <div className='cards'>
        <div className='card-left'>
          <h1 style={{ color: 'white', fontWeight: '900' }}>Your Results</h1>



          <div className='elipce'>
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="100" fill="url(#paint0_radial_1_242)" />
              <defs>
                <radialGradient id="paint0_radial_1_242" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(88 -34) rotate(87.0643) scale(234.307)">
                  <stop stop-color="#1125D6" />
                  <stop offset="0.579283" stop-color="#322BEA" />
                  <stop offset="1" stop-color="#FEFEFE" stop-opacity="0.66" />
                </radialGradient>
              </defs>
            </svg>
            <span>
              <p className='elipce-title'>76</p>
              <p className='elipce-subtitle'>of 100</p>
            </span>
          </div>

          <div className='para-left'>
          <h3 >Great</h3>
            <p>Your scored higher that 65% of the people who have taken these tests. </p>
          </div>
        </div>



        <div className='card-rigth'>
          <h1>Summary</h1>
          <div className='reaction'>
            <img src={images.iconReaction} />
            <p>Reaction</p>
            <span className='text'>80 / <p>100</p></span>

          </div>

          <div className='memory'>
            <img src={images.iconMemory} />
            <p>Memory</p>
            <span className='text'>92 / <p>100</p></span>


          </div>

          <div className='verbal'>
            <img src={images.iconVerbal} />
           <p>Verbal</p>
            <span className='text'>61 / <p>100</p></span>

          </div>

          <div className='visual'>
            <img src={images.iconVisual} />
            <p>Visual</p>
            <span className='text'>72 / <p>100</p></span>


          </div>

          <button className='btn-continue'>Continue</button>


        </div>
      </div>


    </div>
  );
}

export default App;
