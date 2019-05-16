import TodoFooter from '../components/todofooter';
import {connect} from 'react-redux';
import {filterTodo} from '../actions/index';
import {withRouter} from 'react-router-dom';
 const mapStateToProps = (state, ownProps) => {
    return {
        activeFilter: state.setFilter
    }
}
export default withRouter(connect(mapStateToProps, {filterTodo})(TodoFooter));