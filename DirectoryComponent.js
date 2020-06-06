import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


function RenderDirectoryItem({campsite}) {
    return (
        <Card>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
                <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function Directory(props) {
    //now getting campsites array out of object called campsites, hence "campsites.campsites"
    const directory = props.campsites.campsites.map(campsite => {
        return (
            <div key={campsite.id} className = "col-md-5 m-1">
                <RenderDirectoryItem campsite={campsite} />
            </div>
        );
    });



    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Directory</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;