import React from 'react'
import imag from '../assets/projectImage.png'
import './Project.css'
import { FaGithub, FaLocationArrow } from "react-icons/fa";

const Projects = ({ projects }) => {
    return (
        <div>
            <h2 className='HeadingSec'>
                My Projects
            </h2>
            <div>
                {
                    projects.map((pro, i) => (
                        <div className="card">
                            <img src={imag} alt="" />
                            <h4>{pro.title}<br />
                                <i>{pro.category}</i>
                            </h4>
                            <p>{pro.description}</p>
                            <div className="linksWithRole">
                                <div>
                                <a href={pro.github} class="icons" title='github link' target='_blank'><FaGithub /></a>
                                <a href={pro.liveDemo} class="icons" title="Live demo" target='_blank'><FaLocationArrow /></a>
                                </div>
                                <span>{pro.role}</span>
                            </div>
                            <div className="features">
                                {pro.features.map((e,i)=>(<span> {e},&nbsp;&nbsp; </span>))}
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Projects