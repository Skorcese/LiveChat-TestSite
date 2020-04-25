import React, { Component } from "react";
import Form from "../../components/Form";
import LiveChat from "react-livechat";
import StateDisplay from "../../components/StateDisplay";
import styles from "./Main.module.scss";

class Main extends Component {
  state = {
    visitor: {
      name: null,
      email: null,
    },
    group: 0,
  };

  setVisitor = (e, changedState) => {
    e.preventDefault();

    Number.parseInt(changedState.group);

    this.setState({
      visitor: {
        name: changedState.name,
        email: changedState.email,
      },
      group: changedState.group,
    });
  };

  render() {
    const { visitor, group } = this.state;
    const { name, email } = visitor;

    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Visitor Data</h1>
        <div className={styles.divider}>
          <div>
            <Form setVisitor={this.setVisitor} />
          </div>
          <div>
            <StateDisplay state={this.state} />
          </div>
        </div>
        {name && email ? (
          <LiveChat
            license={11810832}
            visitor={visitor}
            group={Number.parseInt(group)}
          />
        ) : null}
      </div>
    );
  }
}

export default Main;
