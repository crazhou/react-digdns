import React from "react";
import DomainItem from "./DomainItem";
import PropTypes from "prop-types";

class DomainList extends React.Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>域名</th>
            <th>TTL</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {this.props.doamins.map(domain => (
            <DomainItem
              name={domain.name}
              ttl={domain.ttl}
              zone_file={domain.zone_file}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

DomainList.propTypes = {
  domains: PropTypes.array
};
