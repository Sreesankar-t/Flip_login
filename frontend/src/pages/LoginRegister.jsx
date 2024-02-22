import  { useState } from 'react';
import './loginregister.css';

export default function LoginRegister() {
    const [flipped, setFlipped] = useState(false);

    const handleToggleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <div className='wrapper'>
            <div className={`main ${flipped ? 'flipped' : ''}`}>
                
                <div className="register">
                    <h2 onClick={handleToggleFlip}>Register</h2>
                    <input type="text" placeholder="Enter the email" />
                    <input type="text" placeholder="Phone number" />
                    <input type="text" placeholder="Enter the password" />
                    <input type="text" placeholder="Confirm-password" />
                    <p className="a" onClick={handleToggleFlip}>already have an account</p>
                    <button className="btn">Submit</button>
                </div>
                <div className="login">
                    <h2 onClick={handleToggleFlip}>Login</h2>
                    <input type="text" placeholder="Enter the email" />
                    <input type="text" placeholder="Enter the password" />
                    <p className="a" onClick={handleToggleFlip}>haven't an account</p>
                    <button className="btn">Login</button>
                </div>
            </div>
        </div>
    );
}
