import React from 'react';
import "../css/Loading.css";

const Loading = ({loading}) => {
    
    return (
        <div className="loader" data-loader={loading}>
            {
                loading && (
                    <span>Processing results</span>
                )
            }
        </div>
    )
}

export default Loading
