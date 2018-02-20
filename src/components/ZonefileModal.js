import React from "react";
import PropTypes from "prop-types";
import { CLOSE_ZONEFILE } from "../actions";

class ZonefileModal extends React.Component {
  handleCloseModel(e) {
    const { dispatch } = this.props;
    dispatch({ type: CLOSE_ZONEFILE });
  }

  render() {
    const { isActive, zone_file } = this.props;
    return (
      <div className={isActive ? "modal is-active" : "modal"}>
        <div className="modal-background" />
        <div className="modal-content">
          <div className="field">
            <p className="control">
              <textarea
                className="textarea"
                rows="10"
                cols="10"
                value={zone_file}
              />
            </p>
          </div>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={e => {
            this.handleCloseModel(e);
          }}
        />
      </div>
    );
  }
}

ZonefileModal.propTypes = {
  isActive: PropTypes.bool.isRequired,
  zone_file: PropTypes.string.isRequired,
  dispatch: PropTypes.string.isRequired
};

export default ZonefileModal;
