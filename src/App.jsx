import React, { Component } from "react";
import "./App.css";
import img from "./assets/you.jpeg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Sunny jacob",
        bio: "A passionate web developer.",
        imgSrc: img,
        profession: "Web Developer",
      },
      show: false,
      intervalId: null,
      timeSinceMount: 0,
       
    };
  }

  componentDidMount() {
    this.setState({
      intervalId: setInterval(this.updateTimeSinceMount, 1000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  updateTimeSinceMount = () => {
    this.setState((prevState) => ({
      timeSinceMount: prevState.timeSinceMount + 1,
    }));
  };

  toggleProfile = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, timeSinceMount } = this.state;

    return (
      <div className="App">
        <h1>Profile App</h1>
        <button onClick={this.toggleProfile} style={{ marginBottom: "20px" }}>
          {show ? "Hide Profile" : "Show Profile"}
        </button>

        {show && (
          <div className="profile">
            <img
              src={person.imgSrc}
              alt={person.fullName}
              style={{ width: "200px", height: "250px" }}
            />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p>Profession: {person.profession}</p>
          </div>
        )}

        <p>Time since mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
