import React, { Component } from 'react' 
import Buttoncomponent from '../button/buttonComponent';
import { HeaderComponent } from '../header/headerComponent';
import ButtonComponent from '../button/buttonComponent';

export class MainComponent extends Component {

    constructor (props) {
        super(props)

        this.state = {
            showHeader: false
        }
    }

    toggleHeader = () => {
        this.setState({ showHeader: !this.state.showHeader });
    }

    render() {

        return (
            <div>
         
                <ButtonComponent methodToRun={this.toggleHeader} name="hide/show"></ButtonComponent>
            
            { this.state.showHeader ? <HeaderComponent title="Header"></HeaderComponent> : null }
            </div>
        );
    }

}