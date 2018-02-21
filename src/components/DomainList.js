import React from "react";
import DomainItem from "./DomainItem";
import PropTypes from "prop-types";

class DomainList extends React.Component {
  render() {
    const { showZonefile, showDeleteDomain } = this.props;
    return (
      <table className="table is-fullwidth is-hoverable">
        <thead>
          <tr>
            <th width="40%">域名</th>
            <th width="30%">TTL</th>
            <th width="30%">操作</th>
          </tr>
        </thead>
        <tbody>
          {this.props.domains.map(domain => (
            <DomainItem
              key={domain.name}
              {...domain}
              showZonefile={showZonefile}
              showDeleteDomain={showDeleteDomain}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

DomainList.propTypes = {
  domains: PropTypes.array.isRequired
};

export default DomainList;
