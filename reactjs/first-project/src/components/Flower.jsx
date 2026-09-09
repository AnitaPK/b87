import imgFlower from '../assets/flowerImg.jpeg'
import  Button  from './Button'


function Flower(){

    return (
        <>
        <h1 style={{ textAlign: "center", color: "#f00" }}>The Talipot Palm <i className='headingName'>Corypha umbraculifera</i></h1>
      <p className='desccriptionFlower'>
        The Talipot Palm (Corypha umbraculifera) produces the largest branched flowering structure (inflorescence) in India. [1] (https://www.treehugger.com/biggest-flowers-on-earth-4859257)
      </p>

      <p className='desccriptionFlower'>
        While some general trivia sources mistakenly name the Southeast Asian parasitic flower Rafflesia arnoldii as existing in India, that species is native only to rainforests in Indonesia, Malaysia, Thailand, and the Philippines.)
        </p>
        <Button />
        <br />
      <img src={imgFlower} alt="flower name" style={{width:"100%", height:"500px"}}/>

</>
    )
}

export default Flower