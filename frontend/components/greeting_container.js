import { connect } from 'react-redux';
import { logout } from './actions/session_actions';
import Greeting from './greeting';

const mstp = ({ session, entities: { users } }) => 
    {return {currentUser: users[session.id]};
};

const mdtp = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mstp,mdtp)(Greeting);