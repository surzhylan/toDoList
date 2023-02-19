import React, {useEffect, useState} from 'react';
import './navbar.css'
import PetImages from "../../images/pet_images";

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
                isEditMode ? <div>
                        <div className='avatar'>
                            <img src={PetImages[petImageInputId]} alt='Your Pet'/>
                            <button value={petImageInputId} onClick={()=> {setPetImageInputIdId((petImageInputId + 1) % PetImages.length)}}>Change Image</button>
                        </div>
                        <div className='status'>
                            <div className='profile'>
                                <input type="text" placeholder="Enter new pet name" value={petNameInput.toString()}
                                       onChange={(e) => {
                                           setPetNameInput(e.target.value)
                                       }}/>
                                <div className='prof-small-text'>
                                    <span>@<input type="text" placeholder="Enter new pet name"
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
                        <button onClick={handleCancel}>Cancel
                        </button>
                        <button onClick={handleUserEdit}>Save
                        </button>
                    </div>

                    : <div>
                        <div className='avatar'>
                            <img src={PetImages[user.petImageId]} alt=''/>
                        </div>
                        <div className='status'>
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
                            <button onClick={() => {
                                setEditMode(true)
                            }}>Edit
                            </button>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Navbar;