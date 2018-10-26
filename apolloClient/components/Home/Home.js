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

                                <h1><img src={MoneyBag} alt={''}/>
                                <Subscription subscription={subscriptionQuery}>
                                    {(data) => {
                                        console.log(data);
                                        if(data != undefined) {
                                            if(data.loading) {
                                                console.log(data);
                                                return <p>Loading...</p>
                                            }else{
                                                return <p>{data.data.donationTotal.total}</p>

                                            }
                                        }else {
                                            return <p>0</p>
                                        }
                                        return <p>0</p>
                              
                                    }}
                                </Subscription>
                                </h1>
                            </div>
                        </div>
                    </BannerTitle>
                </Banner>
        )
    }
}

export default Home;