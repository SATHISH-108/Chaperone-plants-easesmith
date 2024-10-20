import "./Pagination.css";
const Pagination = () => {
  return (
    <div className="pagination-buttons-container">
      <button className="button button-inactive"> Prev</button>
      <button className="button button-active"> 1 </button>
      <button className="button"> 2 </button>
      <button className="button"> 3 </button>
      <button className="button"> 4 </button>
      <button className="button"> 5 </button>
      <button className="button"> 6 </button>
      <button className="button">Next </button>
    </div>
  );
};
export default Pagination;
