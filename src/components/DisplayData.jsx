import React from 'react';
import "../css/DisplayData.css";

const DisplayData = ({data}) => {
    if(!data) return null;
    return (
        <div className="showdata">
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>SR. NO</th>
                        <th>RESULTS</th>
                        <th>STUDENT SAFE</th>
                        <th>COMMERCIAL</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((record, index) => (
                            <tr key={record?.url}>
                                <td>{index+1}</td>
                                <td>
                                  <a href={record?.url} target="_blank" rel="noreferrer">{record?.url}</a>
                                </td>
                                <td data-status={record?.child_safe}>{record?.child_safe.toUpperCase()}</td>
                                <td data-status={record?.is_commercial}>{record?.is_commercial.toUpperCase()}</td>                                
                            </tr>
                        ))
                    }                                   
                </tbody>
            </table>
        </div>
    )
}

export default DisplayData
