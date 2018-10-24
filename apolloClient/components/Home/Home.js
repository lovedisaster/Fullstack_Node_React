import React from 'react';
import gql from 'graphql-tag';
import {graphql, compose} from 'react-apollo';
import Loader from '../Shared/Loader/Loader';
import {Banner} from './Home.style';

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


class Home extends React.Component {    

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            loading: nextProps.data.loading,
            result: nextProps.data.results,
            savedResults:nextProps.data.savedResults
        })
    }

    render() {
        const {data} = this.props
        if(data.loading) {
            return <Loader/>
        }
        return (
            <div className='home-page'>
                <Banner className='banner'>
                    Banner
                </Banner>
            </div>
        )
    }
}

export default compose(
    graphql(query)
)(Home);