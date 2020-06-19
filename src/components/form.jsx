import React from "react";
import { Button, Form, FormGroup, Label, Input, Table } from "reactstrap";

class FormTugas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          nama: "Gilang",
          umur: 24,
          gender: "Pria",
          job: "Student",
          agama: "Islam",
          alamat: "Depok",
          pendidikan: "S1",
        },
        {
          nama: "Steven",
          umur: 25,
          gender: "Pria",
          job: "Engineer",
          agama: "Katolik",
          alamat: "Bandung",
          pendidikan: "S2",
        },
      ],
      editrow: null,
    };
  }

  submitData = () => {
    let nama = this.nama.value;
    let umur = this.umur.value;
    let gender = this.gender.value;
    let job = this.job.value;
    let agama = this.agama.value;
    let alamat = this.alamat.value;
    let pendidikan = this.pendidikan.value;
    let arr = this.state.data;
    arr.push({ nama, umur, gender, job, agama, alamat, pendidikan });
    this.setState({ data: arr });
    console.log(this.state.data);
  };

  showData = () => {
    console.log("show");
    console.log(this.state.editrow);
    return this.state.data.map((item, index) => {
      return index === this.state.editrow ? (
        <tr>
          <td>
            <Input
              type="text"
              innerRef={(nama) => (this.editnama = nama)}
              placeholder="Nama"
            />
          </td>
          <td>
            <Input type="number" innerRef={(umur) => (this.editumur = umur)} />
          </td>
          <td>
            <Input
              type="select"
              innerRef={(gender) => (this.editgender = gender)}
            >
              <option>Pria</option>
              <option>Wanita</option>
            </Input>
          </td>
          <td>
            <Input
              type="textarea"
              innerRef={(job) => (this.editjob = job)}
            ></Input>
          </td>
          <td>
            <Input type="select" innerRef={(agama) => (this.editagama = agama)}>
              <option value="Islam">Islam</option>
              <option value="Kristen">Kristen</option>
              <option value="Katolik">Katolik</option>
              <option value="Budhha">Buddha</option>
              <option value="Hindu">Hindu</option>
            </Input>
          </td>
          <td>
            <Input
              type="textarea"
              name="text"
              innerRef={(alamat) => (this.editalamat = alamat)}
            />
          </td>
          <td>
            <Input
              type="select"
              innerRef={(pendidikan) => (this.editpendidikan = pendidikan)}
            >
              <option value="SD">SD</option>
              <option value="SMP">SMP</option>
              <option value="SMA">SMA</option>
              <option value="D3">D3</option>
              <option value="S1">S1</option>
              <option value="S2">S2</option>
            </Input>
          </td>
          <td>
            <Button type="button" onClick={() => this.change(index)}>
              ✔
            </Button>
            <Button type="button" onClick={() => this.cancel(index)}>
              ➖
            </Button>
          </td>
        </tr>
      ) : (
        <tr>
          <td>{item.nama}</td>
          <td>{item.umur}</td>
          <td>{item.gender}</td>
          <td>{item.job}</td>
          <td>{item.agama}</td>
          <td>{item.alamat}</td>
          <td>{item.pendidikan}</td>
          <td>
            <Button type="button" onClick={() => this.edit(index)}>
              🔧
            </Button>
            <Button type="button" onClick={() => this.delete(index)}>
              ❌
            </Button>
          </td>
        </tr>
      );
    });
  };

  delete = (index) => {
    let arr = this.state.data;
    arr.splice(index, 1);
    this.setState({ data: arr });
  };
  edit = (index) => {
    let rowindex = index;
    this.setState({ editrow: rowindex });
  };
  change = (index) => {
    let editnama = this.editnama.value;
    let editumur = this.editumur.value;
    let editgender = this.editgender.value;
    let editjob = this.editjob.value;
    let editagama = this.editagama.value;
    let editalamat = this.editalamat.value;
    let editpendidikan = this.editpendidikan.value;
    // temp array
    let arr = this.state.data;

    // push input value to temp array
    arr[index].nama = editnama;
    arr[index].umur = editumur;
    arr[index].gender = editgender;
    arr[index].job = editjob;
    arr[index].agama = editagama;
    arr[index].alamat = editalamat;
    arr[index].pendidikan = editpendidikan;

    // change state data to updated value & editrow to default
    this.setState({ data: arr, editrow: null });
    console.log(this.state.data);
  };
  cancel = () => {
    this.setState({ editrow: null });
  };
  render() {
    return (
      <div id="tugas-2-content">
        <div>
          <Form size="sm" className="mb-5 mr-5">
            <h3>Input Data</h3>
            <FormGroup>
              <Label for="nama">Nama</Label>
              <Input
                type="text"
                innerRef={(nama) => (this.nama = nama)}
                placeholder="Nama"
              />
            </FormGroup>
            <FormGroup>
              <Label for="umur">Umur</Label>
              <Input type="number" innerRef={(umur) => (this.umur = umur)} />
            </FormGroup>
            <FormGroup>
              <Label for="gender">Jenis Kelamin</Label>
              <Input
                type="select"
                innerRef={(gender) => (this.gender = gender)}
              >
                <option>Pria</option>
                <option>Wanita</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="job">Pekerjaan</Label>
              <Input
                type="textarea"
                innerRef={(job) => (this.job = job)}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="agama">Agama</Label>
              <Input type="select" innerRef={(agama) => (this.agama = agama)}>
                <option value="Islam">Islam</option>
                <option value="Kristen">Kristen</option>
                <option value="Katolik">Katolik</option>
                <option value="Budhha">Buddha</option>
                <option value="Hindu">Hindu</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="alamat">Alamat</Label>
              <Input
                type="textarea"
                name="text"
                innerRef={(alamat) => (this.alamat = alamat)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="pendidikan">Pendidikan</Label>
              <Input
                type="select"
                innerRef={(pendidikan) => (this.pendidikan = pendidikan)}
              >
                <option value="SD">SD</option>
                <option value="SMP">SMP</option>
                <option value="SMA">SMA</option>
                <option value="D3">D3</option>
                <option value="S1">S1</option>
                <option value="S2">S2</option>
              </Input>
            </FormGroup>
            <Button onClick={this.submitData} color="primary">
              Submit
            </Button>
          </Form>
        </div>

        <div>
          <h3>Tabel Data</h3>
          <Table size="sm" dark bordered>
            <thead>
              <tr>
                <th>Nama</th>
                <th>Umur</th>
                <th>Jenis Kelamin</th>
                <th>Pekerjaan</th>
                <th>Agama</th>
                <th>Alamat</th>
                <th>Pendidikan</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.showData()}</tbody>

            {/* <TableBody database={this.state.data} /> */}
          </Table>
        </div>
      </div>
    );
  }
}
// function Col(props) {
//   return <td>{props.item}</td>;
// }
// function Row(props) {
//   let row = [];
//   for (let key in props.items) {
//     row.push(<Col item={props.items[key]} />);
//   }
//   row.push(
//     <td>
//       <Button type="button" onClick={() => this.edit(props.items.index)}>
//         🔧
//       </Button>
//       <Button type="button" onClick={() => this.delete(props.items.index)}>
//         ❌
//       </Button>
//     </td>
//   );
//   return <tr>{row}</tr>;
// }
// function TableBody(props) {
//   return (
//     <tbody>
//       {props.database.map((data) => (
//         <Row items={data} />
//       ))}
//     </tbody>
//   );
// }
export default FormTugas;
