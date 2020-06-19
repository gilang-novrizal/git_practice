import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

class Tugas3 extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <h2>Tugas 3</h2>
        <MDBBtn color="primary">Primary</MDBBtn>
        <div id="card-container" className="mt-5">
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                waves
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn color="primary" href="#">
                  MDBBtn
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                waves
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn color="primary" href="#">
                  MDBBtn
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard>
              <MDBCardImage
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                waves
              />
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn color="primary" href="#">
                  MDBBtn
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>
      </div>
    );
  }
}

export default Tugas3;
