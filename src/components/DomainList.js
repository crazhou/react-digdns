import React from "react";
import DomainItem from "./DomainItem";
import PropTypes from "prop-types";

class DomainList extends React.Component {
  render() {
    return (
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th width="40%">域名</th>
            <th width="30%">TTL</th>
            <th width="30%">操作</th>
          </tr>
        </thead>
        <tbody>
          {this.props.domains.map(domain => 
            <DomainItem
              key={domain.name}
              name={domain.name}
              ttl={domain.ttl}
              zone_file={domain.zone_file}
            />
          )}
        </tbody>
      </table>
    );
  }
}

DomainList.propTypes = {
  domains: PropTypes.array
};

export default DomainList
