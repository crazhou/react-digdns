import React from "react";
import PropTypes from "prop-types";
// 单个域名项目
class DomainItem extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.ttl}</td>
        <td>
          <button
            className="button is-primary"
            onClick={() => {
              this.handelMange(this.props.name);
            }}
          >
            管理
          </button>
          <button
            className="button is-danger"
            onClick={() => {
              this.handleDelete(this.props.name);
            }}
          >
            删除
          </button>
          <button
            className="button is-primary"
            onClick={() => {
              this.showZonefile(this.props.zone_file);
            }}
          >
            查看Zone文件
          </button>
        </td>
      </tr>
    );
  }

  showZonefile() {}

  handelMange() {}

  handleDelete() {}
}

DomainItem.propTypes = {
  name: PropTypes.string.isRequired,
  ttl: PropTypes.number.isRequired,
  zone_file: PropTypes.string.isRequired
};

export default DomainItem;
