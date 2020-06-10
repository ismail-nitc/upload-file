import React from 'react';

export default function filters(props) {
    return (
        <div>
            <form className="form-inline">
                <label className="mb-2 mr-sm-2">Delimiter:</label>
                <input type="text" className="form-control mb-2 mr-sm-2" id="delimiter" defaultValue="," onChange={props.onDelimiterChange}></input>
                <label className="mb-2 mr-sm-2">Lines:</label>
                <input type="text" className="form-control mb-2 mr-sm-2" id="lines" defaultValue="2" onChange={props.onLinesChange}></input>
            </form>
        </div>
    )
}

