import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchDomains } from "../actions";
import DomainList from "../components/DomainList";
import ZonefileModal from "../components/ZonefileModal";
/*
 * token "ca83505718c2ef26858e04a7adc35587c6140b40550c99a7e0cbc5104e926866"
 */
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
    const { domains, dispatch } = this.props;
    const { modalZonefile: { isActive, zone_file } } = this.props;
    return (
      <div className="container">
        <nav className="level">
          <div className="level-left">
            <button className="button is-primary">新增域名</button>
          </div>
        </nav>
        <ZonefileModal
          isActive={isActive}
          zone_file={zone_file}
          dispatch={dispatch}
        />
        {domains.isFetching ? (
          <div className="notification">请求中...</div>
        ) : (
          <DomainList domains={domains.list} dispatch={dispatch} />
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

export default connect(mapStateToProps)(AsyncApp);
