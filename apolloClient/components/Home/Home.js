import React from 'react';
import gql from 'graphql-tag';
import {graphql, compose} from 'react-apollo';
import Loader from '../Shared/Loader/Loader';
import {Banner,BannerTitle} from './Home.style';
import MoneyBag from './Money - icon.png';
import {NumberFormat} from '../../Utils/CommonUtils';
const query = gql`{
    donationTotal{
        total
    },
  }`

class Home extends React.Component {    

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            loading: nextProps.data.loading,
            total: NumberFormat(nextProps.data.donationTotal.total),
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
                            <div className="row-md-auto text-center">
                                <h5>We'v raised:</h5>
                                <br/>

                                <h1><img src={MoneyBag} alt={''}/> {this.state.total} </h1>
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