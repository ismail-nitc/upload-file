import React from 'react';

const tabular = (props) => {

    if (props.content !== null && props.content !== undefined) {
        return (<div>
            <br></br><br></br>
            <table className="table table-bordered table-dark" id="myTable">
                <tbody>
                    {props.content.split("\n").slice(0, props.lines).map((el) => {
                        return (<tr>
                            {el.split(props.delimiter).slice(0, 4).map((c) => {
                                return (<td>{c}</td>)
                            })}
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
        )
    }
    else return (<div></div>)
}

export default tabular;