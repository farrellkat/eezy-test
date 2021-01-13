import React from 'react'
import Dropdown from './RadioDropdown/RadioDropdown'

class Home extends React.Component {
    state = {
        permissions: [
            {name: 'All', value: 0},
            {name: 'Free', value: 1},
            {name: 'Pro', value: 2}
        ],
        selected: 0
    }

    updateSelection(selection) {
        this.setState({
            selected: selection
        })
    }
    render() {
        return (
            <div className="appContainer">
                <Dropdown options={this.state.permissions} selected={this.state.selected} onSelect={(selection) => this.updateSelection(selection)}/>
            </div>
        );
    }
}

export default Home;