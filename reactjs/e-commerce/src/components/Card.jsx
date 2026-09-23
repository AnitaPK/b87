import React from 'react'

const Card = ({prod}) => {
  return (
     <div className="card" style={{width: "18rem"}}>
                                    <img src={prod.thumbnail} className="card-img-top" alt={prod.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{prod.title}</h5>
                                        <p className="card-text">{prod.description.slice(0, 55) + '...'}</p>
                                        <div>{prod.tags.map((t) => (
                                            <span className="badge text-bg-warning">{t}</span>
                                        ))}</div>
                                        <p>Price:$ {prod.price}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
  )
}

export default Card