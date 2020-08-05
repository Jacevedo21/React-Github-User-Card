import React from 'react'
import styled from 'styled-components'


const Styledimg = styled.img`
display:flex;
padding-right: 20px;
width: 40%;
height: 50;
`
const Styleddiv = styled.div`
    display: flex;
    /* width: 40%; */
    flex-wrap: wrap;
    flex-direction: 'column';
`

const Info = props => {



    return (
        <div>
            <h1>Jumbo's Alpha Business Card</h1>
            <Styleddiv>
            <Styledimg src={props.user.avatar_url} />
                <p>GitHub Info:</p>
                <p>{props.user.login}</p>
                <a href={props.user.html_url}>{props.user.html_url}</a>
            </Styleddiv>
            <p>Followers:</p>
        </div>
    )
}
export default Info