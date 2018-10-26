import React from 'react';
import gql from 'graphql-tag';
import {graphql, compose} from 'react-apollo';
import Loader from '../Shared/Loader/Loader';
import {Banner,BannerTitle} from './Home.style';
import MoneyBag from './Money - icon.png';
import {NumberFormat} from '../../Utils/CommonUtils';
import { Subscription } from "react-apollo";

// const query = gql`{
//     donationTotal{
//         total
//     },
//   }`

const subscriptionQuery = gql`  
  subscription{
    donationTotal{
        total
    }
  }
`

class Home extends React.Component {    

    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Banner>
                    <BannerTitle>
                        <div className="col">
                            <div className="row-md-auto text-center">
                                <h5>We'v raised:</h5>
                                <br/>

                                <Subscription subscription={subscriptionQuery}>
                                    {(data) => {
                                        if(data != undefined) {
                                            if(data.loading) {
                                                return <h1>Loading...</h1>
                                            }else{
                                                return <h1>
                                                    <img src={MoneyBag} alt={''}/>
                                                        {data.data.donationTotal.total}
                                                    </h1>
                                            }
                                        }else {
                                            return <h1><img src={MoneyBag} alt={''}/>0</h1>
                                        }
                                        return <h1><img src={MoneyBag} alt={''}/>0</h1>
                                    }}
                                </Subscription>
                            </div>
                        </div>
                    </BannerTitle>
                </Banner>
        )
    }
}

export default Home;