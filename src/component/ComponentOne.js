import React from "react";

class ComponentOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }
  //Write function to display Hot product
  show_featured = (featured) => {
    if (featured === true) {
      return <span className="tang">Hot</span>;
    }
  };

  //Write function format money product
  format_curency = (price) => {
    return price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };

  //Write display events
  show_infor = (msg) => {
    alert(msg);
  };


   //Write fucntion to display input edit
  renderForm = () => {
    return (
      <div className="Form">
        <div className="typeInput">
          <input
            ref = {(input) => {this.txtName = input}}
            type="text"
            className="textInput"
            defaultValue={this.props.children}
          />
          <button className="Save" onClick={() => this.buttonSave()}>
            Save
          </button>
        </div>
      </div>
    );
  };

   //Write function to check True and display input Edit
  show_button = () => {
    if (this.state.editing === true) {
      return this.renderForm();
    }
  };

  //dont make 
  buttonEdit = () => {
    this.setState({ editing : true});
  };

 
  buttonDelete = () => {
    this.props.delete(this.props.index); //index xác thực các phần tử component
  }

  buttonSave = () => {
    this.setState({ editing: false });
    this.props.edit(this.props.index, this.txtName.value); //truyền 
    ///console.log(this.txtName.value);  // use to talke and change value trong artribute
  };

  render() {
    return (
      <div className="chi">
        <div className="Wrapper">
          <img src={this.props.image} alt="anhlatop" />
          {this.show_featured(this.props.hot)}
          <h2>{this.props.children}</h2>
          <p>Mẫu laptop đẹp và sang trọng</p>
          <p>Giá: {this.format_curency(this.props.price)} VNĐ</p>
          <div className="ButtonX">
            <button
              // onClick = {() => this.show_infor(this.props.children)} //arow function
              onClick={this.show_infor.bind(this, this.props.children)}
              className="ButtonAdd"
            >
              Thêm
            </button>
            <button className="ButtonDel" onClick={() => this.buttonDelete()}>Xóa</button>
            <button className="ButtonEdit" onClick={() => this.buttonEdit()}>
              Sửa
            </button>
          </div>
          <div className="btnEdit">{this.show_button()}</div>
        </div>
      </div>
    );
  }
}
export default ComponentOne;
