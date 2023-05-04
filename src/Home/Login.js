import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const obj1 = {
    email: 'cs1912316@szabist.pk',
    password: 'Yousuf0332'
}

const obj2 = {
    email: 'cs1912312@szabist.pk',
    password: '28october'
}

function Login() {

    const [inputFields, setinputFields] = useState({
        email:'',
        password:''
    })

    const navigate = useNavigate();

    const {email, password} = inputFields

    const handleOnChange = (e) => {
        setinputFields({...inputFields, [e.target.name]:e.target.value});
    }

    const onSubmit = () => {

        if (obj1.email === email && obj1.password === password ) {
            alert("Logged In Successfully")
            navigate('/dashboard')
        } else if (obj2.password === email && obj2.password === password) {
            alert("Logged In Successfully")
            navigate('/dashboard')
        } else {
            alert("Wrong Credentials")
        }

    }

    console.log(inputFields);

    return (
        <>
            <div className='loginPage'>
                <img src="img/Szabist.png" alt="" />
                <h1 className='my-5 text-white'>LOGIN</h1>

                <div>
                    <div class="mb-3">
                        <input type="text" class="form-control-lg" onChange={handleOnChange} value={email} name='email'  placeholder="Email" />
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control-lg" value={password} onChange={handleOnChange} name='password'  placeholder="Password" />
                    </div>

                    <div className='text-center mt-5'>
                        <button className='btn btn-lg' onClick={onSubmit}>
                            LOGIN
                        </button>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Login