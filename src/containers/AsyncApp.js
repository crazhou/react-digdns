import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import DomainList from "../components/DomainList";
import ZonefileModal from "../components/ZonefileModal";

import {
  CLOSE_ZONEFILE,
  showZonefile,
  showDeleteDomain,
  fetchDomains
} from "../actions";

class AsyncApp extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(
      fetchDomains(
        "ca83505718c2ef26858e04a7adc35587c6140b40550c99a7e0cbc5104e926866"
      )
    );
  }

  // 在接收到Props 变化时触发
  componentWillReceiveProps(nextProps) {}

  handelNewDomain(e) {
    e.preventDefault();
  }

  render() {
    const { domains, modalZonefile } = this.props;
    return (
      <div className="container">
        <nav className="level">
          <div className="level-left">
            <button className="button is-primary">
              <span className="icon">
                <i className="fas fa-plus" />
              </span>
              <span>新增域名</span>
            </button>
          </div>
        </nav>
        <ZonefileModal {...modalZonefile} />
        {domains.isFetching ? (
          <div className="notification">请求中...</div>
        ) : (
          <DomainList domains={domains.list} />
        )}
      </div>
    );
  }
}

AsyncApp.propTypes = {
  domains: PropTypes.object.isRequired,
  modalZonefile: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    domains: state.domains,
    modalZonefile: state.modalZonefile
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    showZonefile: text => {
      dispatch(showZonefile(text));
    },
    closeZonefile: () => {
      dispatch({ type: CLOSE_ZONEFILE });
    },
    showDeleteDomain: domain => {
      dispatch(showDeleteDomain(domain));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AsyncApp);
