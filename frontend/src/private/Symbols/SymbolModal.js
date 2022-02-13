import React from "react";


function SymbolModal() {

    function onSubmit(event) {

    }

    return (
        <div className="modal fade" id="modalSymbol" tabIndex="-1" role="dialog" aria-labelledby="modalTitleNotify" aria-hidden="true" >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <p className="modal-title" id="modalTitleNotify">Edit Symbol</p>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="modal-body">
                            <div className="py-3">
                                <div className="form-group mb-4">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group mb-4">
                                                <label htmlFor="symbol">Symbol</label>
                                                <div className="input-group">
                                                    <input className="form-control" id="symbol" type="text" placeholder="BTCUSD" required />
                                                    <button type="button" className="btn btn-secondary d-inline-flex align-items-center me-2" >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-xs" viewBox="0 0 20 20" fill="white">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="basePrecision">Base Precision:</label>
                                                <input type="number" className="form-control" id="basePrecision" placeholder="8" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="quotePrecision">Quote Precision:</label>
                                                <input type="number" className="form-control" id="quotePrecision" placeholder="8" required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="minNotional">Min Notional:</label>
                                                <input type="text" className="form-control" id="minNotional" placeholder="0.1" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="minLotSize">Min Lot Size:</label>
                                                <input type="text" className="form-control" id="minLotSize" placeholder="0.1" required />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#modalSymbol">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SymbolModal;