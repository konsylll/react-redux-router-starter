import { connect } from 'react-redux';
import ChangeScreen from '../components/Change';
import { changeTestValue } from "../actions/index";
import { bindActionCreators } from 'redux';

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeTestValue }, dispatch);
}

function mapStateToProps(state){
    return {
        testValue: state.testValue.testValue
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeScreen);