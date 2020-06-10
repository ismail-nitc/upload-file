import React, { Component } from 'react';
import './main.css';
import Tabular from './tabular';
import Filters from './filters';
import Uploads from './uploads';

export default class Upload extends Component {
    fileReader;
    constructor(props) {
        super(props);
        this.state = {
            fileContent: null,
            delimiter: ',',
            lines: '2',
            hasError: false
        }
    }

    componentDidCatch(error, info) {
         this.setState({ hasError: true });
      }

    handleFileRead = event => {
        const content = this.fileReader.result;
        console.log('Contnet :', content);
        this.setState({
            fileContent: content
        })
    }

    onChangeHandler = event => {
        const file = event.target.files[0];
        this.fileReader = new FileReader();
        this.fileReader.onloadend = this.handleFileRead;
        this.fileReader.readAsText(file);
    }

    onDelimiterChange = event => {
        this.setState(
            {
                delimiter: event.target.value
            }
        )
    }

    onLinesChange = event => {
        this.setState(
            {
                lines: event.target.value
            }
        )
    }


    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
          }
        return (<div className="container" >
            <Uploads onChangeHandler={this.onChangeHandler} />
            <Filters onDelimiterChange={this.onDelimiterChange} onLinesChange={this.onLinesChange} />
            <Tabular content={this.state.fileContent} delimiter={this.state.delimiter} lines={this.state.lines} />
        </div>);
    }
}