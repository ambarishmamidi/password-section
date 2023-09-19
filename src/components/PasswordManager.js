import React from "react"

import {TbWorld} from "react-icons/tb"

import {FaUser} from "react-icons/fa"

import {RiLockPasswordFill} from "react-icons/ri"

import { useState} from "react"

import {v4 as uuidv4} from "uuid"



import InputSection from "./InputSection"

import "./PasswordManager.css"


const colorClasses = [
  "blue",
  "green",
  "yellow",
  "red",
  "orange",
]

const PasswordManager = () => {
  const [website,setWebsite] = useState("")
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [userData,setUserData] = useState([])
  const [isChecked,setCheckValue] = useState(false)
  const [searchInput,setSearchInput] = useState("")
  const getWebsite = (event) => setWebsite(event.target.value)
  const getUsername = (event) => setUsername(event.target.value)
  const getPassword = (event) => setPassword(event.target.value)
  const getCheckboxValue = () => setCheckValue((prevBool) => (!prevBool))
  const getSearchInput = (event) => setSearchInput(event.target.value)


  const formSubmit = event => {
    event.preventDefault()

    const randomColor = colorClasses[Math.ceil(Math.random() * colorClasses.length-1)]
    const newItem = {
      id:uuidv4(),
      website,
      username,
      password,
      randomColor
    };
    setUserData((prevData) => [...prevData,newItem])
    setWebsite("")
    setUsername("")
    setPassword("")
  }

  const deleteItem = id => {
    const updatedData = userData.filter(each => each.id !== id)
    setUserData(updatedData)
  }

  const formattedData = userData.filter(each => each.username.toLowerCase().includes(searchInput.toLowerCase()))


  
  const count = userData.length
  const renderNoPasswords = () => (
    <div className="no-passwords-container">
      <h1 className="no-password-heading">No Passwords</h1>
    </div>
  )

    return (
        <div className="bg-container">
            <h1 className="password-heading-2">PASSWORD <br/>MANAGER</h1>
        <div className="top-container">
          <form
            className="add-password-container"
            onSubmit={formSubmit}
          >
            <h1 className="password-heading">Add New Password</h1>
            <div className="input-container">
              <TbWorld size={20} color="#28416b" className="icons"/>
              <input
                type="text"
                placeholder="Enter Website"
                className="input-item"
                value={website}
                onChange={getWebsite} 
              />
            </div>
            <div className="input-container">
              <FaUser size={20} color="#28416b" className="icons"/>
              <input
                type="text"
                placeholder="Enter Username"
                className="input-item"
                value={username}
                onChange={getUsername}  
              />
            </div>
            <div className="input-container">
             <RiLockPasswordFill size={20} color="#28416b" className="icons"/>
              <input
                type="password"
                placeholder="Enter Password"
                className="input-item"  
                value={password}   
                onChange={getPassword}
              />
            </div>
              <button type="submit" className="add-button">
                Add
              </button>
          </form>
          <div className="image-container">
          <img
            src="https://i.ibb.co/RPcLn3x/240-F-547514800-x-K5-VOe5-Je-J9-Epm-Lz40pmr-VHQJh-CIM7rj-1.jpg"
            alt="password manager"
            className="password-manager-image"
          />
          </div>
        </div>
        <div className="bottom-container">
          <div>
            <div className="your-password-container">
              <div className="your-password-text-cont">
                <h1 className="password-heading">Your Passwords</h1>
                <p className="count">{count}</p>
              </div>
              <div className="search-input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-logo"
                />
                <input
                  type="search"
                  placeholder="Search"
                  className="input-item"
                  value={searchInput}
                  onChange={getSearchInput}
                />
              </div>
            </div>
            <hr />
            <div className="show-password-container">
              <input
                type="checkbox"
                id="showPassword"
                checked={isChecked}
                onChange={getCheckboxValue}
              />
              <label htmlFor="showPassword">Show passwords</label>
            </div>
            {userData.length === 0 ? (renderNoPasswords()) : 
            (<ul className="user-password-container">
            {formattedData.map(each => (
                    <InputSection key={each.id} data={each} checked={isChecked} deleteItem={deleteItem}/>
            ))}
            </ul>)
            }
          </div>
        </div>
      </div>
    )
}
export default PasswordManager