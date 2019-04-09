import React from 'react';

import lists from '../components/lists';

import { addList, removeList }   from '../actions/lists';

import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        lists: state.lists
    }
}

export default connect(mapStateToProps,{addList, removeList})(lists)

