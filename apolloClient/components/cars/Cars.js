import React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

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
    }
  }`

class Cars extends React.Component {    
    render() {
        let {data} = this.props
        if(data.loading) {
            return <h1>Loading ... </h1>
        }
        return (
            <div>
                <h1>{data.results[0].mainImage}</h1>
            </div>
        )
    }
}

export default graphql(query)(Cars);