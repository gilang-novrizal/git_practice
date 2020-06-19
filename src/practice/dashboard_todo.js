import React from "react";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ["Learn React JS", "Eat", "Sleep"],
    };
  }

  showTodo = () => {
    return this.state.data.map((value, index) => (
      <tr>
        <td>{value}</td>
        <td>
          <button color="danger" onClick={() => this.delete(index)}>
            ❌
          </button>
        </td>
      </tr>
    ));
  };
  addTodo = () => {
    let newArr = this.state.data;
    newArr.push(this.refs.list.value);
    this.setState({ data: newArr });
    console.log(this.state.data);
    this.refs.list.value = "";
  };
  delete = (index) => {
    let newArr = this.state.data;
    newArr.splice(index, 1);
    this.setState({ data: newArr });

    console.log(`Delete ${index}`);
  };

  render() {
    return (
      <div>
        <h1>Your todoList</h1>
        <input ref="list" />
        <button type="button" onClick={this.addTodo}>
          add
        </button>

        <table>
          <thead>
            <tr>
              <td>Kegiatan</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>{this.showTodo()}</tbody>
        </table>
      </div>
    );
  }
}
export default Dashboard;
