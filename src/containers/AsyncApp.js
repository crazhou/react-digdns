import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import DomainList from ".//DomainListF";
import ZonefileModal from "../components/ZonefileModal";
import DeleteModal from "../components/DeleteModal";
import NewDomain from "../components/NewDomain";

import {
  fetchDomains,
  CLOSE_ZONEFILE,
  CANCEL_DELETE_DOMAIN,
  deleteDomain
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
    const {
      domains,
      modalZonefile,
      modalDeleteDomain,
      deleteDomainInfo,
      dispatch
    } = this.props;

    const closeZonefile = () => {
      dispatch({ type: CLOSE_ZONEFILE });
    };
    return (
      <div className="container">
        <NewDomain
          onSubmit={(a, b) => {
            console.log("A->B", a, b);
          }}
        />
        <DeleteModal
          {...modalDeleteDomain}
          isFetching={deleteDomainInfo.isFetching}
          onConfirm={domain => {
            dispatch(deleteDomain(domain));
          }}
          onCancel={e => {
            dispatch({ type: CANCEL_DELETE_DOMAIN });
          }}
        />
        <ZonefileModal {...modalZonefile} handleClose={closeZonefile} />
        {domains.isFetching ? (
          <div className="notification">请求中...</div>
        ) : (
          <DomainList />
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
    ...state
  };
}

export default connect(mapStateToProps)(AsyncApp);
