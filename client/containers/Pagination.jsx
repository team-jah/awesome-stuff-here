import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Change pageSize default parameter in getPager() to a smaller number to see the pagination in action

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pager: {},
    };
    this.setPage = this.setPage.bind(this);
    this.getPager = this.getPager.bind(this);
  }

  // need this because async fetch
  componentDidUpdate(prevProps) {
    if (this.props.items !== prevProps.items) this.setPage(this.props.initialPage);
  }

  getPager(totalItems, currPage = this.props.initialPage, pageSize = 5) {
    const totalPages = Math.ceil(totalItems / pageSize);

    // set start page and end page
    let startPage = 1;
    let endPage = totalPages;
    if (totalPages > 10) {
      if (currPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currPage - 5;
        endPage = currPage + 4;
      }
    }

    // start index to end index of items
    const start = (currPage - 1) * pageSize;
    const end = Math.min(start + pageSize - 1, totalItems - 1);

    // set pages
    const pages = [];
    for (let i = startPage; i < endPage + 1; i++) {
      pages.push(i);
    }

    return {
      totalItems, currPage, pageSize, totalPages, startPage, endPage, start, end, pages,
    }
  }

  setPage(page) {
    const { items } = this.props;
    const pager = this.getPager(items.length, page);
    const pageOfItems = items.slice(pager.start, pager.end + 1);
    this.setState({ pager });
    this.props.onPageChange(pageOfItems);
  }

  render() {
    const { pager } = this.state;
    if (!pager.pages || pager.pages.length <= 1) return (<div />);
    const pages = pager.pages.map((page, i) => {
      return (
        <li key={i} className={pager.currPage === page ? 'page-item active' : 'page-item'}>
          <a className="page-link" onClick={() => this.setPage(page)}>{page}</a>
        </li>
      );
    });

    return (
      <ul className="pagination">
        <li className={pager.currPage === 1 ? 'page-item disabled' : 'page-item'}>
          <a className="page-link" onClick={() => this.setPage(1)}>First</a>
        </li>
        <li className={pager.currPage === 1 ? 'page-item disabled' : 'page-item'}>
          <a className="page-link" onClick={() => this.setPage(pager.currPage - 1)}>Previous</a>
        </li>
        {pages}
        <li className={pager.currPage === pager.totalPages ? 'page-item disabled' : 'page-item'}>
          <a className="page-link" onClick={() => this.setPage(pager.currPage + 1)}>Next</a>
        </li>
        <li className={pager.currPage === pager.totalPages ? 'page-item disabled' : 'page-item'}>
          <a className="page-link" onClick={() => this.setPage(pager.totalPages)}>Last</a>
        </li>
      </ul>
    );
  }
}

Pagination.defaultProps = {
  initialPage: 1,
};

Pagination.propTypes = {
  items: PropTypes.array.isRequired,
  onPageChange: PropTypes.func.isRequired,
  initialPage: PropTypes.number,
};

export default Pagination;
