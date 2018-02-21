import React from "react";

class DeleteModal extends React.Component {
  handleClose(e) {
    e.preventDefault();
  }
  render() {
    const { isActive, domain, onConfirm } = this.props;
    return (
      <div class="modal">
        <div class="modal-background" />
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">请确认</p>
            <a class="delete" aria-label="close">
              {" "}
            </a>
          </header>
          <section class="modal-card-body">
            {"确认要删除 " + domain + "这个域名吗？"}
          </section>
          <footer class="modal-card-foot">
            <button class="button is-danger">删除</button>
            <button class="button">取消</button>
          </footer>
        </div>
      </div>
    );
  }
}
