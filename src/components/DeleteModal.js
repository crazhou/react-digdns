import React from "react";

class DeleteModal extends React.Component {
  render() {
    const { isActive, domain, onConfirm, onCancel, isFetching } = this.props;
    return (
      <div className={"modal " + (isActive ? "is-active" : "")}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">请确认</p>
            <button className="delete" aria-label="close" onClick={onCancel} />
          </header>
          <section className="modal-card-body">
            确认要删除域名 {domain} 吗？<span className="has-text-danger">
              这个操作不可以恢复。
            </span>
          </section>
          <footer className="modal-card-foot">
            <button
              className={
                "button is-danger is-small" + (isFetching ? " is-loading" : "")
              }
              onClick={() => {
                onConfirm(domain);
              }}
            >
              删除
            </button>
            <button className="button is-small" onClick={onCancel}>
              取消
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

export default DeleteModal;
