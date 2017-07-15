import React from 'react';
import * as propertyAction from '../../actions/propertyActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class PropertyList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.props = props;
    }

    render() {
        return (
            <div className="list-container">
              <h1>This is property page</h1>
              <div className="properites pull-left col-6">
                <h2>Properties</h2>
                <ul className='properites-list'>
                  {
                    this.props.properties.data ? this.props.properties.data.map(p => 
                    <li>
                      <span>{p.price}</span>
                    </li>) : ''
                  }
                </ul>
              </div>
              <div className="saved-properties pull-right col-6">
                <h2>Saved Properties</h2>
                <ul className='properites-list'>
                </ul>
              </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
  return {
    properties: state.properties,
    savedProperties: state.savedProperties
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(propertyAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyList);