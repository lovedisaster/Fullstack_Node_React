import React from 'react';
import gql from 'graphql-tag';
import {graphql, compose} from 'react-apollo';
import Loader from '../Shared/Loader/Loader';
import {Banner,BannerTitle} from './Home.style';
import MoneyBag from './Money - icon.png';

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
                <Banner>
                    <BannerTitle>
                        <div className="col">
                            <div className="row-md-auto">
                                <h1><img src={MoneyBag} alt={''}/>$ 20,000 </h1>
                            </div>
                            <br/>
                            <div className="row-md-auto text-center">
                                <h5>We've collected</h5>
                            </div>
                        </div>
                    </BannerTitle>
                </Banner>
        )
    }
}

export default compose(
    graphql(query)
)(Home);