import React from "react";
import PropTypes from "prop-types";

class ZonefileModal extends React.Component {
  render() {
    const { isActive, zone_file, handleClose } = this.props;
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
          onClick={handleClose}
        />
      </div>
    );
  }
}

ZonefileModal.propTypes = {
  isActive: PropTypes.bool.isRequired,
  zone_file: PropTypes.string.isRequired
};

export default ZonefileModal;
