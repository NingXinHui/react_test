// 异步加载
import { Component } from "react";
let Async = (fn) => {
  return class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        AsyncCom: null,
      };
    }
    componentDidMount() {
      fn().then((module) => {
        this.setState({ AsyncCom: module.default });
      });
    }

    render() {
      let { AsyncCom } = this.state;
      return (
        <div>{AsyncCom ? <AsyncCom {...this.props}></AsyncCom> : null}</div>
      );
    }
  };
};
export default Async;
