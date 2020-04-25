import React, { Component } from "react";
import styles from "./Form.module.scss";
import Input from "./Input";

export default class Form extends Component {
  state = {
    name: "",
    email: "",
    group: 0,
  };

  handleInputChange = (e) => {
    // console.log(e.target.value);
    // console.log(this.state);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
  };

  render() {
    const { name, email, group } = this.state;
    const { setVisitor } = this.props;

    return (
      <div className={styles.wrapper}>
        <form
          className={styles.form}
          autoComplete="off"
          onSubmit={(e) => setVisitor(e, this.state)}
        >
          <Input
            name="name"
            placeholder="Your name..."
            label="Name"
            value={name}
            onChange={this.handleInputChange}
            type="text"
          />
          <Input
            name="email"
            placeholder="Your e-mail..."
            label="E-Mail"
            value={email}
            onChange={this.handleInputChange}
            type="text"
          />
          <Input
            name="group"
            // placeholder="Talk with"
            label="Talk with:"
            value={group}
            onChange={this.handleInputChange}
            type="select"
          />
          <button className={styles.button}>Start chat</button>
        </form>
      </div>
    );
  }
}
