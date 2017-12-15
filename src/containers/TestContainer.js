import { connect } from 'react-redux';
import TestScreen from '../components/Test';

function mapStateToProps(state) {
    return {
        testValue: state.testValue.testValue
    }
}

export default connect(mapStateToProps, null)(TestScreen);