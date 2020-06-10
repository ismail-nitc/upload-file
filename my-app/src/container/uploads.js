import React from 'react';

export default function uploads(props) {
    return (<div>
    <div className="row">
        <div className="col-md-6">
            <form method="post">
                <div className="form-group files">
                    <label>Upload Your File </label>
                    <input type="file" className="form-control" onChange={props.onChangeHandler} />
                </div>
            </form>
        </div>
    </div>
    </div>
    )
}

