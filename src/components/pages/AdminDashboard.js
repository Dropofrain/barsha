import React from 'react'
import Adminsidebar from '../layout/adminsidebar'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const AdminDashboard = () => {
  return (
    <>
      <Navbar />

      <div classname='container-fluid'>
        <div className='row'>
          <div className='col-md-3'>
            <Adminsidebar />
          </div>
          <div className='col-md-9'>
            <h1>Hello welcome to dashboard</h1>
            <img src="../images/12image.jpg" alt="" width="900" height="300" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default AdminDashboard