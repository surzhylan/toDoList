import React, {useEffect, useState} from 'react';
import './navbar.css'
import { Button } from 'react-bootstrap';
import AvatarImages from "../../utils/avatar-images";
import { FaUserEdit } from "react-icons/fa";

const Navbar = ({coins}) => {
    const savedUser = localStorage.getItem('user')

    const [user, setUser] = useState({
        userName: '',
        userLogin: '',
        userImageId: 0
    })

    const [userNameInput, setUserNameInput] = useState('')
    const [userLoginInput, setUserLoginInput] = useState('')
    const [userImageInputId, setUserImageInputIdId] = useState(0)

    const [isEditMode, setEditMode] = useState(false)

    useEffect(() => {
        setUser(savedUser ? JSON.parse(savedUser) : {
            userName: 'User',
            userLogin: 'user',
            userImageId: 0
        });
        setUserLoginInput(user.userLogin)
        setUserNameInput(user.userName)
        setUserImageInputIdId(user.userImageId)
    }, [])

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user])

    const handleUserEdit = () => {
        if (userLoginInput && userNameInput && userImageInputId) {
            const newUser = {
                userName: userNameInput,
                userLogin: userLoginInput,
                userImageId: userImageInputId
            }
            setUser(newUser)
            setEditMode(false)
        } else {
            window.alert("Fields can not be null")
        }
    }

    const handleCancel = () => {
        setUserLoginInput(user.userLogin)
        setUserNameInput(user.userName)
        setUserImageInputIdId(user.userImageId)


        setEditMode(false)
    }

    return (
        <div className="menubar">
            <div>
                {
                    isEditMode ? <div className='avatarStatus'>
                                    <div className='avatarEdit'>
                                        <img src={AvatarImages[userImageInputId]} alt='Your avatar'/>
                                        <Button className='btn-sm' variant="light" value={userImageInputId} onClick={()=> {setUserImageInputIdId((userImageInputId + 1) % AvatarImages.length)}}>Change Image</Button>
                                    </div>
                                    <div className='statusEdit'>
                                        <div className='profileEdit'>
                                            <input type="text" placeholder="Enter new user name" value={userNameInput.toString()}
                                                onChange={(e) => {
                                                    setUserNameInput(e.target.value)
                                                }}/>
                                            <div className='prof-small-text'>
                                                <span>@ <input type="text" placeholder="Enter new user name"
                                                            value={userLoginInput.toString()} onChange={(e) => {
                                                    setUserLoginInput(e.target.value)
                                                }}/></span>
                                            </div>
                                        </div>
                                        <div className='prof-money'>
                                            <img src="coin.png" alt=""/>
                                            <span className='prof-small-text money-text'>{coins}</span>
                                        </div>
                                    </div>
                                    <div className='status_editBtn'>
                                        <Button className='btn-sm' variant="light" onClick={handleCancel}>Cancel
                                        </Button>
                                        <Button className='btn-sm' variant="success" onClick={handleUserEdit}>Save
                                        </Button>
                                    </div>
                                </div>

                        : <div className='avatarStatus'>
                            <div className='avatar'>
                                <img src={AvatarImages[user.userImageId]} alt=''/>
                            </div>
                            <div className='status'>
                                <div className='status_info'>
                                    <div className='profile'>
                                        <h3>{user.userName}</h3>
                                        <div className='prof-small-text'>
                                            <span>@{user.userLogin}</span>
                                        </div>
                                    </div>
                                    <div className='prof-money'>
                                        <img src="coin.png" alt=""/>
                                        <span className='prof-small-text money-text'>{coins}</span>
                                    </div>
                                </div>
                                <div className='status_edit'>
                                    <Button className='btn-sm statusBtn' variant="light" onClick={() => {
                                        setEditMode(true)
                                    }}><FaUserEdit size={28} />
                                    </Button>
                                </div>
                            </div>
                            <div className='welcomeTitle'>
                                <h2>Welcome to To Do List!</h2>
                            </div>
                        </div>
                }
            </div>
            
        </div>
    )
}

export default Navbar;