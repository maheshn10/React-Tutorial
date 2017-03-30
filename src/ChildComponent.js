import React from 'react';

export default class ChildComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            "content": "This is my Child Component",
            "Inputtext": "Hello"
        }
    }

    updateContent(e) {
        this.setState({"content": "Updated Child State."})
    }

    forceUpdate() {
        this.forceUpdate();
        console.log('tets');
    };

    onChange(e) {
        this.setState({"Inputtext": this.refs.myInput.value})
    }

    showContent(e) {
    //    this.refs.myInput.value='';
       this.setState({"Inputtext": ""})
    }

    //componentWillMount is executed before rendering
    componentWillMount() {
        console.log('Component WILL MOUNT!')
    }

    //componentDidMount is executed after first render
    componentDidMount() {
        console.log('Component DID MOUNT!')
    }

    //componentWillReceiveProps is executed when the props are updated
    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!')
    }

    //shouldComponentUpdate will determine if component will be updated or not.
    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    //componentWillUpdate is called just before rendering.
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
    }

    // componentDidUpdate is called just after rendering.
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
    }

    // componentWillUnmount is called after the component is unmounted from the dom.
    componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
    }

    render() {
        return (
            <div>
                <h2>Child</h2>
                <p>{this.state.content}</p>
                <p>{this.props.headrertext.Title}</p>
                <button
                    onClick={this
                    .updateContent
                    .bind(this)}>SET STATE</button>
                <button
                    onClick={this
                    .forceUpdate
                    .bind(this)}>FORCE UPDATE</button>

                <h2>{this.state.Inputtext}</h2>
                <input
                    value={this.state.Inputtext}
                    onChange={this
                    .onChange
                    .bind(this)}
                    ref="myInput"></input>

                <button
                    onClick={this
                    .showContent
                    .bind(this)}>Clear Content</button>
            </div>
        );
    }
}