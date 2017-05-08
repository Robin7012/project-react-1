import React from 'react';
class Welcome extends React.Component {
    constructor() {
        super();
        console.log('我已经在 constructor 里将 props 和 state 初始化好了');
    }
    componentWillMount() {
        console.log('运行到这里的话，说明马上就要运行 render 了')
    }
    render() {
        console.log('嗯，这里是 render');
        return <h1>React 生命周期</h1>;
    }
    componentDidMount() {
        console.log('已经挂载到页面里了')
    }
}

export default Welcome