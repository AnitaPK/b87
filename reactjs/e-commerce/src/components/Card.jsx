import React from 'react'

const Card = ({prod}) => {
  return (
     <div className="card" style={{width: "18rem"}}>
                                    <img src={prod.thumbnail} className="card-img-top" alt={prod.title} />
                                    <div className="card-body">
                                        <div className='text-end'>
                                            <span className={`badge ${prod.availabilityStatus == "In Stock" ? "text-bg-success" : "text-bg-warning"}`}>
                                                {prod.availabilityStatus}</span>
                                        </div>
                                        <h5 className="card-title">{prod.title}</h5>
                                        <p className="card-text">{prod.description.slice(0, 55) + '...'}</p>
                                        <div>{prod.tags.map((t) => (
                                            <span className="badge text-bg-warning me-1">{t}</span>
                                        ))}</div>
                                        <p>Price:$ {prod.price}</p>
                                        <button className="btn btn-primary">Add To Cart</button>
                                        <span>More Info</span>

                                    </div>
                                </div>
  )
}

export default Card