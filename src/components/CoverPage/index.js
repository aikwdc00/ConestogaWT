import React from 'react'
import classes from './index.module.css';


const teamMembers = ['Fu-Ting, Li', 'Harmanpreet Singh, Harmanpreet Singh', 'Prit Sudhirbhai, Patel', 'Stuti Dilipbhai, Jayswal']

function CoverPage() {

  const renderTeamMembers = teamMembers.map((member, index) => {
    return <li key={index}>{member}</li>
  })

  return (
    <div className={classes.coverPage}>
      <h1>Trends in Web Technology</h1>
      <h2>PROG8780 - Fall 2023 - Section 8</h2>

      <ul>{renderTeamMembers}</ul>
    </div>
  )
}

export default CoverPage
