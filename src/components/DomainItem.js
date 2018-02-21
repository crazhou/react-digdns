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
          <div className="buttons">
            <button
              className="button is-info is-small"
              onClick={() => {
                this.handleMange(this.props.name);
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
    const { showZonefile } = this.props;
    showZonefile(text);
  }

  handleMange() {}

  handleDelete(domain) {
    const { showDeleteDomain } = this.props;
    showDeleteDomain(domain);
  }
}

DomainItem.propTypes = {
  name: PropTypes.string.isRequired,
  ttl: PropTypes.number.isRequired,
  zone_file: PropTypes.string.isRequired
};

export default DomainItem;
