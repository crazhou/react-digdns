import React from "react";
import PropTypes from "prop-types";
import  { showZonefile } from '../actions'
// 单个域名项目
class DomainItem extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.ttl}</td>
        <td>
          <div className="buttons">
          <button
            className="button is-info is-small"
            onClick={() => {
              this.handelMange(this.props.name);
            }}
          >
            管理
          </button>
          <button
            className="button is-danger is-small"
            onClick={() => {
              this.handleDelete(this.props.name);
            }}
          >
            删除
          </button>
          <a
            className="button is-text is-small"
            onClick={() => {
              this.showZonefile(this.props.zone_file);
            }}
          >
            查看Zone文件
          </a>
          </div>
        </td>
      </tr>
    );
  }

  showZonefile(text) {
    const {dispatch} = this.props;
    dispatch(showZonefile(text));
  }

  handelMange() {}

  handleDelete() {}
}

DomainItem.propTypes = {
  name: PropTypes.string.isRequired,
  ttl: PropTypes.number.isRequired,
  zone_file: PropTypes.string.isRequired,
  dispatch : PropTypes.func.isRequired
};

export default DomainItem;
