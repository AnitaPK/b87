import React from 'react'


const AboutMe = ({myInfo, myName}) => {

  return (
    <div>
      <h2 className='HeadingSec'> About Me</h2>
      <p ><span style={{color:"yellow"}}>Name :</span> {myName.name}</p>
      <div> <span style={{color:"yellow"}}>Skills :</span> {myInfo.skills.map((s,i)=>(<span> {s},&nbsp;&nbsp; </span>))}</div>
      <br />
<div> <span style={{color:"yellow"}}>Technologies:</span>{
  Object.entries(myInfo.technologies).map(([cate, v])=>(
    <>
    <h3 key={cate}>
      {cate} :
    </h3>
    <div>
    {v.map((e)=>(<span>{e},&nbsp;&nbsp;</span>))}
    </div>
    </>
  ))
  }</div>
      <br />

<div><span style={{color:"yellow"}}>DevelopmentAreas :</span> {
  myInfo.developmentAreas.map((e,i)=>(<span> {e},&nbsp;&nbsp; </span>))
}</div>      
<div><span style={{color:"yellow"}}>interests :</span>  {
  myInfo.interests.map((e,i)=>(<span> {e},&nbsp;&nbsp; </span>))
}</div>
    </div>
  )
}

export default AboutMe