import { useState } from "react"

const RegisterationForm = ()=>{

    const [userName,setUserName] = useState('')
    const [userPassword,setUserPassword] = useState('')
    const [userPhone,setUserPhone] = useState()
    const [userBatch,setUserBatch] = useState('DSA')

    const [form,setForm] = useState(
        {
            userName:'',
            userPassword:'',
            userPhone:'',
            userBatch:'',
        }
        )

    const handleUsername =(e)=>{
        console.log(e)
        setUserName(e.target.value)
    }

    const handlePassword =(e)=>{
        console.log(e)
        setUserPassword(e.target.value)
    }

    const handlePhone =(e)=>{
        console.log(e)
        setUserPhone(e.target.value)
    }

    const handleBatch =(e)=>{
        console.log(e)
        setUserBatch(e.target.value)
    }

    const handleForm = (e)=>{
console.log(e)
    }


    const handleOnSubmit =(e)=>{
        console.log(userName,userPassword,userPhone,userBatch)
        e.preventDefault();
        
    }
    return(
        <form onSubmit={handleOnSubmit}>
            <div>
                <label>UserName</label>
                <input type="text" name="user" placeholder="Username" onChange={handleForm('username')} />
            </div>

            <div>
                <label>Password</label>
                <input type="password" name="user" placeholder="User password" onChange={handlePassword} />
            </div>

            <div>
                <label>Phone</label>
                <input type="tel" name="user" placeholder="phone" onChange={handlePhone}/>
            </div>

            <div>
                <label>Batch</label>
                <select onChange={handleBatch}>
                    <option>DSA</option>
                    <option>Frontend</option>
                    <option>Backend</option>
                    <option>Full Stack</option>
                </select>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default RegisterationForm