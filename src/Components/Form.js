import React, { useState } from "react";

const Form = () => {

    const [userRegister,setUserRegister] = useState({
        username:"",
        gmail:"",
        phone:"",
        password:"",
        gender : "",
        skill:[]
      
    })
    console.log(userRegister)

const [records , setRecords] =useState([])    

const handleInput=(e)=>{
   const name = e.target.name;
   const value = e.target.value;
  //  console.log(name,value) 

   setUserRegister({...userRegister,[name]:value})

}

const handleSubmit = (e) => {
  e.preventDefault();
 
  const newRecord = { ...userRegister , id:new Date().getTime().toString() }
  console.log(records)
  setRecords([...records,newRecord])

  localStorage.setItem('records',JSON.stringify([...records, newRecord]))
  console.log(records)

  setUserRegister({username:"",gmail:"",phone:"",password:"",gender:"",skill:""})

}

const item = JSON.parse(localStorage.getItem('records'))
console.log(item)

  return (
    <>
      <div className="App">
        <div className="main">
          <h1>Student Registration</h1>
          <div className="entry-detl">
            <form  >

              <div className="name">
                <p>Name :</p>
                <input
                  type="text"
                  className="text-name"
                  placeholder="Enter your Name"
                  name="username"
                  value={userRegister.username}
                  onChange={handleInput}
                ></input>
              </div>

              <div className="name">
                <p>Email :</p>
                <input
                  type="email"
                  className="text-name"
                  placeholder="Enter your email"
                  name="gmail"
                  value={userRegister.gmail}
                  onChange={handleInput}
                ></input>
              </div>

              <div className="name">
                <p>Phone :</p>
                <input
                  type="number"
                  className="text-name"
                  placeholder="mobile number"
                  name="phone"
                  value={userRegister.phone}
                  onChange={handleInput}
                ></input>
              </div>

              <div className="name-choose">
                <p>Skills :</p>
                
                <div className="input-box">
                  <input
                    type="checkbox"
                    id="language-1"
                    name="HTML"
                    onChange={()=>{userRegister.skill.push('HTML')}}
                  ></input>
                  <label for="language-1">HTML</label>

                  <input
                    type="checkbox"
                    id="language-2"
                    name="CSS"
                    onChange={()=>{userRegister.skill.push('CSS')}}
                  ></input>
                  <label for="language-2"> CSS</label>

                  <input
                    type="checkbox"
                    id="language-3"
                    name="JavaScript"
                    onChange={()=>{userRegister.skill.push('Java Script')}}
                  ></input>
                  <label for="language-3"> JavaScript</label>

                </div>
              </div>
            </form>

            <div className="name-gender">
              <p>Gender :</p>
                <input type="radio" id="male" name="gender" value='male' onChange={handleInput} />
                <label for="male">Male</label>
                <input type="radio" id="female" name="gender" value='female' onChange={handleInput}/>
                <label for="female">Female</label>
                <input type="radio" id="other" name="gender" value='others' onChange={handleInput}/>
                <label for="other">Other</label>
            </div>
            <div className="name">
                <p>Password :</p>
                <input
                  type="password"
                  className="text-name"
                  placeholder="123***"
                  name="password"
                  value={userRegister.password}
                  onChange={handleInput}
                ></input>
              </div>
   
            <div className="btns">
                <button type="submit" id="submit" onClick={handleSubmit} >Submit</button>
                {/* <button type="reset" id="reset"  >Reset</button> */}
            </div>

          </div>
        </div>
        

           {/* {
            item.map((items) => {
              return(
        <div className="student">
          <h2>Student Info</h2>
              <div className="dashboard" >
                <p>Name: {items.username}</p>
                <p>Gmail: {items.gmail}</p>
                <p>Phone: {items.phone}</p>
                <p>Gender: {items.gender}</p>
                <p>Skill: {items.skill.length && items.skill.map((item,idx)=>{<li>{item}</li>})}</p>
                <p>Password: {items.password}</p>
              </div>
        </div>
            )
           }) 
           } */}
         <div className="column">
           {records && records.map((item,idx)=>{
            return(
              <>
              <div className="student">
              <h2>Student Info</h2>
              <div className="dashboard" >
                <p>Name: {item.username}</p>
                <p>Gmail: {item.gmail}</p>
                <p>Phone: {item.phone}</p>
                <p>Gender: {item.gender}</p>
                <p>Password: {item.password}</p>
                <ul> 
                    Skill: <li> {item.skill && item.skill.map((skills,idx)=>{
                    return(
                      <>
                      <p className="listItem"> {skills},</p>
                      </>
                    )
                  })}</li>
                </ul>
                </div>
              </div>
              </>
            )
           })}
        </div>

      </div>
    </>
  );
};

export default Form;

// {elem.username}
{/* <p>{elem.gmail}</p>
<p>{elem.phone}</p>
<p>{elem.gender}</p>
<p>{elem.skill}</p>
<p>{elem.password}</p> */}