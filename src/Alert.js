import React from 'react';

class Alert extends React.Component {
    constructor(props) {
        super(props);
        this.color = null;
    }

    getStyle = () => {
        return {
            color: this.color,
        };
    }

    render() {
        return(
            <div className="Alert Alert-Background">
                <p style={this.getStyle()}>
                    <strong>{this.props.text}</strong>
                </p>
            </div>
        );
    }
}

class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color='lightblue';
    }
}

class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color='yellow';
    }
}

export {InfoAlert, ErrorAlert};