import DomainList from "../components/DomainList";
import { connect } from "react-redux";
import { showZonefile, showDeleteDomain } from "../actions";

function mapStateToProps(state) {
  return {
    domains: state.domains.list
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showZonefile: text => {
      dispatch(showZonefile(text));
    },
    showDeleteDomain: domain => {
      dispatch(showDeleteDomain(domain));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DomainList);
