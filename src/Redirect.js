import { useObserver } from 'mobx-react';
import React, { useEffect } from 'react';
import { useStateStore } from "./StoreProvider"
import { useHistory } from "react-router-dom";


export const AutoRedirect = (props) => {
    const store = useStateStore();
    const history = useHistory();

    let code = new URLSearchParams(props.location.search);
    store.changeCode(code.get('code'));

    async function retrieveTeacherInfo() {
        const returnedObject = await fetch
            .post(store.serverUrl + '/teacher/oauth')
            .send({ code: store.code });

        store.changeTeacherInfo(returnedObject.body);

    }

    async function retrieveTeacher() {

        if (store.teacherInfo.new_user) {
            store.changeMeetingsObj(await fetch
                .post(store.serverUrl + '/teacher/new')
                .send({ teacher_info: store.teacherInfo }));
        } else {
            store.changeMeetingsObj(await fetch
                .post(store.serverUrl + '/teacher/meetings')
                .send({ teacher_info: store.teacherInfo }));
        }
    }


    useEffect(() => {
        return retrieveTeacherInfo()
    });


    if (store.userType === 'teacher') {
        history.push('/teacher');
    } else {
        history.push('/student');
    }


    return useObserver(() =>
        <p>REDIRECTING!</p>
    )

}

export default AutoRedirect