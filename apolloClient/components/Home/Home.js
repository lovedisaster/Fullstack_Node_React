import React from 'react';
import gql from 'graphql-tag';
import {graphql, compose, Subscription} from 'react-apollo';
import Loader from '../Shared/Loader/Loader';
import {Banner} from './Home.style';

const total = gql`
    subscription {
        getTotal
    }
`

class Home extends React.Component {    

    constructor(props) {
        super(props);
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({
    //         loading: nextProps.data.loading,
    //         getTotal: nextProps.data.getTotal.total
    //     })
    // }

    render() {
        return (
            <Subscription subscription={total}>
               {({ data: {getTotal}, loading }) => {
                   if(loading) {
                       return  <Loader/> 
                   }
                   else {
                    return 
                   <div className='home-page'>
                        <Banner className='banner'>
                            Banner {getTotal.total}
                        </Banner>
                    </div>
                   }
                }}
            </Subscription>
        )
    }
}

export default Home;