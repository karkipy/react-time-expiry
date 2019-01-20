import React, { Component } from 'react';

let timeoutId;
let animationTime;
let animationStyle;


class SessionAlertModal extends Component {
  constructor(props) {
    super(props);
    this.timeLoop = this.timeLoop.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleOk = this.handleOk.bind(this);

    this.state = {
      seconds: props.time ? 60 * parseInt(props.time, 10) : 60,
      warningTime: props.time ? 60 * parseInt(props.time, 10) : 60,
      Message: props.Message || "",
      show: true,
    };
    animationTime = 0;
    animationStyle = { height: 10, backgroundColor: '#00FF00', width: '100%' };
  }

  componentDidMount() {
    this.timeLoop();
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    this.handleHide();
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.handleHide();
    }
  }

  timeLoop() {
    const { seconds, warningTime } = this.state;

    timeoutId = setTimeout(() => {
      if (seconds === 0) {
        this.handleHide();
      }
      animationTime += 1;

      this.setState({
        seconds: seconds - 1,
      });

      const width = (seconds) / warningTime * 100;

      if (width < 75) {
        animationStyle = {
          height: 10,
          backgroundColor: '#00cc00',
          width: `${width}%`,
        };
      } else if (width < 50) {
        animationStyle = {
          height: 10,
          backgroundColor: '#009900',
          width: `${width}%`,
        };
      } else if (width < 25) {
        animationStyle = {
          height: 10,
          backgroundColor: '#990000',
          width: `${width}%`,
        };
      } else {
        animationStyle = {
          height: 10,
          backgroundColor: '#00FF00',
          width: `${width}%`,
        };
      }
      this.timeLoop();
    }, 1000);
  }

  handleHide() {
    clearTimeout(timeoutId);
    this.setState({
      show: false,
    });
  }

  handleCancel() {
    const { onClickCancel } = this.props;
    if (onClickCancel) {
      onClickCancel();
    }
    this.handleHide();
  }

  handleOk() {
    const { onClickOk } = this.props;
    if (onClickOk) {
      onClickOk();
    }
    this.handleHide();
  }

  render() {
    const { show, Message, seconds } = this.state;

    if (!show) {
      return null;
    }

    return (
      <div>
        <div className="modal-container">
          <div className="modal-content">
            <div ref={this.setWrapperRef}>
              <div className="modal-header">
                <button
                  type="button"
                  style={{
                    backgroundColor: 'Transparent',
                    backgroundRepeat: 'no-repeat',
                    border: 'none',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    position: 'absolute',
                    top: '2%',
                    right: '2%',
                    fontSize: '18px',
                  }}
                  onClick={this.handleHide}
                >
                  X
                </button>
                <h4>Session Expiring !</h4>
              </div>
              <div className="modal-body">
                Your Session is about to expire in {seconds} seconds.
                {Message}
                <br /> <br />
                <div className="sessionTimer" style={animationStyle} />
              </div>
              <div className="modal-footer">
                <div className="modal-buttons">
                  <button
                    className="modal-button-ok"
                    type="button"
                    onClick={this.handleOk}
                  >
                    Ok
                  </button>
                  <button
                    className="modal-button-cancel"
                    type="button"
                    onClick={this.handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionAlertModal;
