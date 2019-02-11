import React, { Component } from "react";

class Footer extends Component {
  render() {
    const { filter, setVisiblityFilter } = this.props;
    return (
      <div>
        <span>Show:</span>
        <button
          disabled={filter === "all"}
          onClick={() => setVisiblityFilter("all")}
        >
          All
        </button>
        <button
          disabled={filter === "active"}
          onClick={() => setVisiblityFilter("active")}
        >
          Active
        </button>
        <button
          disabled={filter === "completed"}
          onClick={() => setVisiblityFilter("completed")}
        >
          Completed
        </button>
      </div>
    );
  }
}
export default Footer;
