import React from 'react'

const LeaderBoardEntry = (props) => {
    const { user } = props
    const avatarURL = user.avatarURL
    const name = user.name
    const aQ = Object.keys(user.answers).length
    const cQ = user.questions.length
    const score = aQ + cQ
    return(
        <div className="leaderboard-grid-container">
            {/* <span className="nameHeader">John Edo</span>
            <span className="avatarImg">
                <img src={avatarURL} alt={name}></img>
            </span>

            <span className="questionsInfodGrid">
            Answered questions {aQ}
            </span> */}


            <span className="nameHeader">{name}</span>
            <img className="avatarImg" src={avatarURL} alt={name}/>
           
            <span className="questionsAnsweredGrid">
            Answered questions: {aQ}
            </span>
            <span className="questionsCreatedGrid">
            Created questions: {cQ}
            </span>
            <span className="score">
            Score: {score}
            </span>

            {/* <img src={avatarURL} alt={name}></img>
            <h2>
                {name}
            </h2>
            <p>
                Answered questions {aQ}
            </p>
            <p>
                Created questions {cQ}
            </p>
            <h3>
                Score
            </h3>
            <h3>
                {score}
            </h3> */}




        </div>

        // <span className="grid-container-question">
        //     <span className="name-entry">John Edo asks</span>

        //     <span className="nameHeader">Would you rather:</span>
        //     <img src='https://randomuser.me/api/portraits/men/35.jpg' className="avatarImg"/>

        //     <div className="optionOneSelect">
        //         <label >
        //             <input  type="radio" value="optionOne" checked={true === false}/>
        //             <span className = "temp-padding">
        //                 question.optionOne.text
        //             </span>
        //         </label>
        //     </div>

        //     <span className="orBreak">OR</span>
        //     <div className="optionTwoSelect">
        //         <label >
        //             <input  type="radio" value="optionOne" checked={true === false}/>
        //             <span className = "temp-padding">
        //                 question.optionTwo.text
        //             </span>
        //         </label>
        //     </div>
        //     <button className="submitButton"> 
        //         Submit
        //     </button>
        // </span> 
    )
}

export default LeaderBoardEntry