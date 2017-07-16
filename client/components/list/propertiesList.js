import React from 'react';
import * as propertyActions from '../../actions/propertyActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class PropertyList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.props = props;
        this._addToSaved = this._addToSaved.bind(this);
    }

    _bgStyle(color){
      return {
        "backgroundColor": color
      }
    }

    _addToSaved(e){
      this.props.actions.addProperty(e.target.id)
        .then(
          result => {console.log('success');}
        )
        .catch(
          error => {console.log('error');}
        )
    }

    render() {
        return (
            <div className="list-container clearfix">
              <h1>This is property page</h1>
              <div className="properites pull-left col-6">
                <h2>Properties</h2>
                <ul className='properites-list'>
                  {
                    this.props.properties.data ? this.props.properties.data.map(p => 
                    <li key={'li-' + p.id}>
                      <span className="agency" style={this._bgStyle(p.agency.brandingColors.primary)}>
                        <img src={p.agency.logo} alt=''/>
                      </span>
                      <span className="property-img" >
                        <img src={p.mainImage} alt='' id={p.id} onClick={this._addToSaved}/>
                      </span>
                      <span className="price">
                        Price: {p.price}
                      </span>
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
    actions: bindActionCreators(propertyActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyList);