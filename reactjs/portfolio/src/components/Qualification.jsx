import React from 'react'
import './Qualification.css'

const Qualification = ({qua}) => {
    console.log(qua)

  return (
    <section>
    <h2 className='HeadingSec'>Qualification</h2>
    <table >
        <thead>
            <tr>
                <th>Degree</th>
                <th>Institution</th>
                <th>Duration</th>
                <th>Grade</th>
            </tr>
        </thead>
        <tbody>
            {qua.map((quaRow,i)=>(
                <tr key={i}>
                    <td>{quaRow.title}
                        <br />
                        <i>{quaRow.subtitle}</i>

                    </td>
                    <td>{quaRow.institution}</td>
                    <td>{quaRow.duration}</td>
                    <td>{quaRow.grade}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </section>
  )
}

export default Qualification