import React from 'react'

export const Dashboard = (props) => {
    return (
        <div>
            {/* {
                props.loggedInData.map((user)=>{

                    return user.name
                })
            } */}

            {
                props.loggedInData.name
            }
        </div>
    )
}
