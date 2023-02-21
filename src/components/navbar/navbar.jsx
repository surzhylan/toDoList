import React, {useEffect, useState} from 'react';
import './navbar.css'
import PetImages from "../../images/pet_images";
import { Button } from 'react-bootstrap';

const Navbar = ({coins}) => {
    const savedUser = localStorage.getItem('user')

    const [user, setUser] = useState({
        petName: '',
        userName: '',
        petImageId: 0
    })

    const [petNameInput, setPetNameInput] = useState(user.petName)
    const [userNameInput, setUserNameInput] = useState(user.userName)
    const [petImageInputId, setPetImageInputIdId] = useState(0)

    const [isEditMode, setEditMode] = useState(false)

    useEffect(() => {
        setUser(savedUser ? JSON.parse(savedUser) : {
            petName: 'Pet',
            userName: 'user',
            petImageId: 0
        });
        setUserNameInput(user.userName)
        setPetNameInput(user.petName)
        setPetImageInputIdId(user.petImageId)
    }, [])

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user])

    const handleUserEdit = () => {
        if (userNameInput && petNameInput && petImageInputId) {
            const newUser = {
                petName: petNameInput,
                userName: userNameInput,
                petImageId: petImageInputId
            }
            setUser(newUser)
            setEditMode(false)
        } else {
            window.alert("Fields can not be null")
        }
    }

    const handleCancel = () => {
        setUserNameInput(user.userName)
        setPetNameInput(user.petName)
        setPetImageInputIdId(user.petImageId)

        setEditMode(false)
    }

    return (
        <div className="menubar">
            {
                isEditMode ? <div className='avatarStatus'>
                                <div className='avatarEdit'>
                                    <img src={PetImages[petImageInputId]} alt='Your Pet'/>
                                    <Button className='btn-sm' variant="light" value={petImageInputId} onClick={()=> {setPetImageInputIdId((petImageInputId + 1) % PetImages.length)}}>Change Image</Button>
                                </div>
                                <div className='statusEdit'>
                                    <div className='profileEdit'>
                                        <input type="text" placeholder="Enter new pet name" value={petNameInput.toString()}
                                            onChange={(e) => {
                                                setPetNameInput(e.target.value)
                                            }}/>
                                        <div className='prof-small-text'>
                                            <span>@ <input type="text" placeholder="Enter new pet name"
                                                        value={userNameInput.toString()} onChange={(e) => {
                                                setUserNameInput(e.target.value)
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
                            <img src={PetImages[user.petImageId]} alt=''/>
                        </div>
                        <div className='status'>
                            <div className='status_info'>
                                <div className='profile'>
                                    <h3>{user.petName}</h3>
                                    <div className='prof-small-text'>
                                        <span>@{user.userName}</span>
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
                                }}>Edit
                                </Button>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Navbar;