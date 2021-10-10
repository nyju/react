import { Axios } from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_action/user_actions'

function LoginPage(props) {
    const dispatch = useDispatch();


    // state 생성
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    // onChange 이벤트로 state 변경 => value 변경됨
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        
        let body = {
            email: Email,
            password: Password
        }

        dispatch(loginUser(body))
            .then(response => {
                if (response.payload.loginSuccess) {
                    props.history.push('/') // 성공시 페이지 이동
                } else {
                    alert('Error')
                }
            })

    }

    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height: '100vh'}}>
            
            <form style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler}/>
                <label>Password</label>
                <input type="Password" value={Password} onChange={onPasswordHandler}/>

                <br />
                <button>
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginPage
