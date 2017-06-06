
import React from 'react';
export const GetAlbum = (props) =>
    <div>
        <input type="button" className="btn btn-success" value={props.btnName} onClick={props.getData} />
    </div>
