import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../RadioDropdown/RadioDropdown.css'

import Caret from "../downArrow.svg"

class radioDropdown extends Component {
    state = {
        showMenu: false,
    }

    showMenu() {
        this.setState({
            showMenu: !this.state.showMenu,
        })
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }

    handleClickOutside = event => {
        const domNode = ReactDOM.findDOMNode(this);

        if (!domNode || !domNode.contains(event.target)) {
            this.setState({
                showMenu: false
            });
        }
    }


    render() {
        const options = this.props.options
        const selected = this.props.selected
        return (
            <div className="dropdown">
                <div className="header-toggle" onClick={() => this.setState({ showMenu: !this.state.showMenu })}>
                    <span className="header-toggle__header">{options[selected].name} Vectors</span>
                    <img className={`header-toggle__caret ${this.state.showMenu ? "is--rotated180 is--orange" : ""}`} src={Caret}></img>
                </div>
                <div className={`drawer ${this.state.showMenu ? "" : "is--hidden"}`}>
                    {
                        options.map(selected => (
                            <div className={`drawer__selectionHolder ${this.state.showMenu ? "" : "is--hidden"}`} onClick={() => this.props.onSelect(selected.value)}>
                                <label className="drawer__container">
                                    <input type="radio" 
                                        checked={this.props.selected === selected.value} 
                                        key={selected.value} value={selected.name} 
                                        onChange={() => this.props.onSelect(selected.value)} />
                                        {selected.name}
                                    <span class="drawer__radio"/>
                                </label>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default radioDropdown;