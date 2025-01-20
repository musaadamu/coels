import React from "react";

export default function Cards() {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Card 1 */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card">
            <img src="images/image3.jpg" className="card-img-top" alt="Example Card" />
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>

        {/* Repeat for additional cards */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card">
            <img src="images/image3.jpg" className="card-img-top" alt="Example Card" />
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-body">
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>

        {/* Add more cards */}
      </div>
    </div>
  );
}
