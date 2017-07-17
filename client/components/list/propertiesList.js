import React from 'react';
import * as propertyActions from '../../actions/propertyActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import PropertiesList from './_listComponent';
injectTapEventPlugin();

class PropertyList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.props = props;
        this._addToSaved = this._addToSaved.bind(this);
        this._bgStyle = this._bgStyle.bind(this);
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
                <PropertiesList properties={this.props.properties} _bgStyle={this._bgStyle} _addToSaved={this._addToSaved}/>
              </div>
              <div className="saved-properties pull-right col-6">
                <h2>Saved Properties</h2>
                <PropertiesList properties={this.props.savedProperties} _bgStyle={this._bgStyle} _addToSaved={this._addToSaved}/>
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