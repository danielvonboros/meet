import React from "react";

class Alert extends React.Component {
  constructor(props, color) {
    super(props);
    this.color = color;
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  };

  render() {
    return (
      <div className={`Alert Alert-Background ${this.props.className}`}>
        <p style={{ color: this.color }}>
          <strong>{this.props.text}</strong>
        </p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props, "lightblue");
    this.color = "lightblue";
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props, "yellow");
  }
}

export { InfoAlert, ErrorAlert };
