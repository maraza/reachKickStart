
import React from 'react';
export const AlbumList = (props) => {

    let toRender = "Please click Fetch Data to view the latest albums.....";
    if (props.albums.length > 0) {
        toRender = <div>
            <table className="table-striped">                
                <tbody>

                    {props.albums.map((option, index) => {
                        return (
                            <tr key={index}><td>
                                <div >
                                    <img src={option.thumbnailUrl} />
                                </div>
                            </td>
                                <td>{option.title}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>;
            </div>;
    }
    return (
        <div>
            {toRender}
        </div>
    );
}