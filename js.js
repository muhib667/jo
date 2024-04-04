import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Software Engineer"
      },
      show: false,
      mountedTime: new Date()
    };
  }

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  componentDidMount() {
    this.interval = setInterval(this.updateMountedTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateMountedTime = () => {
    this.setState({
      mountedTime: new Date()
    });
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountedTime } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <h2>{fullName}</h2>
            <img src={imgSrc} alt={fullName} />
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Time since mounted: {(new Date() - mountedTime) / 1000} seconds</p>
      </div>
    );
  }
}

export default App;
