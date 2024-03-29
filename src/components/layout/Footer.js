import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div className="container-fluid">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <Link to ="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
      <i class="bi bi-house"></i>
      </Link>
      <span className="text-muted">&copy; Art Gallery </span>
    </div>

    {/* <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><Link className="text-muted" to="#"><i class="bi bi-facebook"></i></Link></li>
      <li className="ms-3"><Link className="text-muted" to="#"><i class="bi bi-twitter"></i></Link></li>
      <li className="ms-3"><Link className="text-muted" to="#"><i class="bi bi-instagram"></i></Link></li>
    </ul> */}
  </footer>
</div>
    </>
  )
}

export default Footer;