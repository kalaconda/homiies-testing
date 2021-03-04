import React from 'react';

export default class AutoCompleteText extends React.Component {
    construcotr (props) {
        super(props);
        this.items = [
            'Task out trash'
            'Clean the floors'
            'Wash dishes'
            'Empty Dishwasher'
        ];
    }

    render () {
        return (
        <div>
            <input type="text" />
            <ul>
                {this.items.map((item) => <li>{item}</li>)}
            </ul>
        </div>
            
        )
    }
}