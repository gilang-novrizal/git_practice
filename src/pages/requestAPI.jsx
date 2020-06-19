import React from "react";
import Axios from "axios";
import {
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

const KEY = "&apiKey=9aad61ffded440ba98c05d75f1edac4e";
const URL = "http://newsapi.org/v2/top-headlines?country=id";

class RequestAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    Axios.get(URL + KEY)
      .then((response) => {
        this.setState({ data: response.data.articles });
        console.log(this.state.data);
      })
      .catch((error) => console.log(error));
  }

  dropdownTitle() {
    return (
      <UncontrolledButtonDropdown>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu>
          {this.state.data.map((item) => (
            <DropdownItem>{item.title}</DropdownItem>
          ))}
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    );
  }
  renderCard() {
    return this.state.data.map((item) => {
      return (
        <Card
          style={{ flexBasis: "30%", background: "black", color: "white" }}
          className="mb-5"
        >
          <CardImg
            height="250px"
            src={item.urlToImage}
            alt="article-img"
          ></CardImg>
          <CardBody>
            <CardTitle style={{ fontWeight: "700" }}>{item.title}</CardTitle>
            <CardText>{item.description}</CardText>
            <Button type="button" href={item.url}>
              Read more...
            </Button>
          </CardBody>
        </Card>
      );
    });
  }
  render() {
    return (
      <div>
        <h1>Request API</h1>
        {this.dropdownTitle()}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {this.renderCard()}
        </div>
      </div>
    );
  }
}

export default RequestAPI;
