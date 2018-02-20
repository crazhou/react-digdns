import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {fetchDomains} from '../actions'
import DomainList from '../components/DomainList'
import  {CLOSE_ZONEFILE} from '../actions'

/*
 * token "ca83505718c2ef26858e04a7adc35587c6140b40550c99a7e0cbc5104e926866"
 */
class AsyncApp extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchDomains('ca83505718c2ef26858e04a7adc35587c6140b40550c99a7e0cbc5104e926866'))
  }

  // 在接收到Props 变化时触发 
  componentWillReceiveProps(nextProps) {}

  handelNewDomain(e) {
    e.preventDefault();
  }

  handleCloseModel(e) {
    const { dispatch } = this.props;

    dispatch({type:CLOSE_ZONEFILE})
  }

  render() {
    const { domains,dispatch } = this.props;
    const {modalZonefile:{isActive,zone_file}} = this.props;
    return (
      <div className="container">
        <nav className="level">
          <div className="level-left">
            <button className="button is-primary">新增域名</button>
          </div>
        </nav>
        <div className={isActive?'modal is-active':'modal'}>
          <div className="modal-background"></div>
          <div className="modal-content">
          <div className="field">
          <p className="control">
            <textarea className="textarea" rows="10" cols="10" value={zone_file}/>
          </p>
        </div>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={(e)=>{this.handleCloseModel(e)}}></button>
        </div>
        { domains.isFetching ? (<div className='notification'>请求中...</div>):<DomainList domains={domains.list} dispatch={dispatch}/>}
      </div>
    );
  }
}

AsyncApp.propTypes = {
  domains: PropTypes.object.isRequired,
  modalZonefile : PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    domains: state.domains,
    modalZonefile: state.modalZonefile
  };
}

export default connect(mapStateToProps)(AsyncApp);
