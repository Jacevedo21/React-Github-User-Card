import React from 'react'
import Info from './Info'
import styled from 'styled-components'


 const Card = props => {

    const StyledDiv = styled.div`
    display: flex;
    /* background-color: lightblue; */
    align-items: center;
    flex-direction: column;
    /* border: 2px solid black;
    border-radius: 25px; */
    /* width: 75%;
    margin: 100px 200px; */
    /* box-sizing: content-box; */
    `
    return (

        <StyledDiv>

            <Info 
            user={props.user}
            />

            {
                props.followers.map(follower => 
                    <p>{follower.login}</p>
                )
            }

            {/* <p>Ooga to the Booga</p> */}
            {/* <Followers /> */}
        </StyledDiv>
    )
}
export default Card