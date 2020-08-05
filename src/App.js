import React from 'react';
import Card from './components/Card'
import axios from 'axios'
import './App.css';
import styled from 'styled-components'
// import './myStyles.css'

let userInfo = 'https://api.github.com/users/jacevedo21'
let followers = 'https://api.github.com/users/jacevedo21/followers'
const userRequest = axios.get(userInfo)
const followerRequest = axios.get(followers)

const StyledDiv = styled.div`
display: flex;
/* background-color: lightblue; */
align-items: center;
flex-direction: column;
border: 2px solid black;
border-radius: 25px;
width: 75%;
margin: 100px 200px;
height: 50%;
background-color: lightcoral;
/* box-sizing: content-box; */
`
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      github: [],
      followers: [],
    }
  }

  componentDidMount() {
    // axios.get('https://api.github.com/users/jacevedo21')
    // .then(res => {
    //   console.log('res data', res.data)
    //   this.setState({
    //     github: res.data 
    //   })
    // })
    // .catch(err => {
    //   debugger
    // })
    axios.all([userRequest, followerRequest])
      .then(axios.spread((...res) => {
        const resUser = res[0].data
        console.log(resUser, 'resUser')
        const resFollowers = res[1].data
        console.log(resFollowers, 'followers data')
        this.setState({
          github: resUser,
          followers: resFollowers,
        })
      }))
      .catch(err => {
        debugger
      })

  }





  render() {
    return (
        <div className="App">
          <StyledDiv>
            <Card
              user={this.state.github}
              followers={this.state.followers}
            />
          </StyledDiv>
        </div>
    );
  }
}

export default App;
