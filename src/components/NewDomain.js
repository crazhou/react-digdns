/*
 * 新的域名添加区
 */
import React from "react";
import PropTypes from "prop-types";

class NewDomain extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", hasError: false, errMsg: "" };
  }
  handleChange(event) {
    let value = event.target.value;
    const reg = /^[0-9a-z-]{1,20}\.[a-z]{2,4}$/i;
    if (reg.test(value)) {
      this.setState({ hasError: false, errMsg: "" });
    } else {
      this.setState({ hasError: true, errMsg: "域名格式有误" });
    }
    this.setState({ value });
  }
  render() {
    const { onSubmit } = this.props;
    let input;
    return (
      <div className="level">
        <div className="level-left">
          <div className="level-item field is-grouped u-def">
            <div className="control">
              <input
                className={"input " + (this.state.hasError ? "is-danger" : "")}
                type="text"
                placeholder="请输入域名"
                onChange={e => {
                  this.handleChange(e);
                }}
                ref={node => {
                  input = node;
                }}
              />
            </div>
            <div className="control">
              <button
                className="button is-primary"
                disabled={!this.state.value || this.state.hasError}
                onClick={e => {
                  if (this.state.hasError === false) {
                    onSubmit(this.state.value);
                    input.value = "";
                  }
                }}
              >
                添加域名
              </button>
            </div>
            <p className="help is-danger">{this.state.errMsg}</p>
          </div>
          <div className="level-item has-text-grey-light">
            在这里添加自己注册的域名，就可以使用你的DigitalOcean账号来管理 DNS
            记录了
          </div>
        </div>
      </div>
    );
  }
}

NewDomain.propTypes = {
  value: PropTypes.string
};

export default NewDomain;
