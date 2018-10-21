import React from 'react';
import gql from 'graphql-tag';
import {graphql, compose} from 'react-apollo';
import CarItems from './_CarItems';
import './Cars.scss';


const mutation = gql`
    mutation save($id : String!) {
        addCarItem(id : $id) {
            id,
        }
    }
`

const query = gql`{
    results {
      price,
      agency {
        brandingColors {
          primary
        }
        logo
      }
      id,
      mainImage
    },
    savedResults {
        price,
        agency {
          brandingColors {
            primary
          }
          logo
        }
        id,
        mainImage
      }
  }`


class Cars extends React.Component {    

    constructor(props) {
        super(props);
        this._addToSaved = this._addToSaved.bind(this);
        this._bgStyle = this._bgStyle.bind(this);
        this._deleteItem = this._deleteItem.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            loading: nextProps.data.loading,
            result: nextProps.data.results,
            savedResults:nextProps.data.savedResults
        })
        console.dir(this.state);
    }

    _bgStyle(color){
        return {
          "backgroundColor": color
        }
    }
  
    _addToSaved(e){
        this.props
        .mutate({variables: {id: e.target.id}, refetchQueries: (result) => {
            return [{query: query}];
        }})
        .then(res => {
            //this.props.data.savedResults = res.data.addCarItem
            //this.setState({savedResults: res.data.addCarItem})
        })
    }
     
    _deleteItem(e){
        alert(e.target.id);
    }

    render() {
        const {data} = this.props
        if(data.loading) {
            return <h1>Loading ... </h1>
        }
        return (
            <div className='list-container'>
                <CarItems key="result" items={data.results} _action = {this._addToSaved} _bgStyle = {this._bgStyle} type= 'c'/>
                <CarItems key="savedResult" items={data.savedResults} _action = {this._deleteItem} _bgStyle = {this._bgStyle} type= 'sc'/>
            </div>
        )
    }
}

export default compose(
    graphql(query),
    graphql(mutation)
)(Cars);