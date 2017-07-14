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
            <h1>This is react-redux</h1>
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