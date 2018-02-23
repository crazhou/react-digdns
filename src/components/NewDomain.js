/*
 * 新的域名添加区
 */
import React from "react";
import PropTypes from "prop-types";

class NewDomain extends React.Component {
  render() {
    return (
      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <input className="input" type="text" placeholder="请输入域名" />
          </div>
          <div className="level-item">
            <button className="button is-primary">添加域名</button>
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

export default NewDomain;
