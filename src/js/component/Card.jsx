import React from "react";


const Card = (props) => {
    return (
        <>
            <div className="card-group col-md-3">                
                <div className="card">
                    <img className="card-img-top" src={props.src} alt="Card image cap" style={{"height" : "40%", "width" : "100%"}}/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div className="col card-footer">
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;