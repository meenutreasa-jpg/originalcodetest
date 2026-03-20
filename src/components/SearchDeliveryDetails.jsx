import React from 'react'

const SearchDeliveryDetails = () => {
  return (
<div>
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12">
                        <label htmlFor="" className="form-label">Order ID</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12">
                        <button className="btn btn-primary">Search</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default SearchDeliveryDetails