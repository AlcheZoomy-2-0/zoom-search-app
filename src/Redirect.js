import React from 'react';
import { userStateStore } from "./StoreProvider"



export const Redirect = (props) => {
    const store = userStateStore();
    const [userType, setUserType] = React.useState("");

    let code = new URLSearchParams(window.location.search);
    store.changeCode(code);

    if (userType === 'teacher') {
        this.props.history.push('/teacher');
    } else {
        this.props.history.push('/student');
    }
}

export default Redirect;