import { useState } from "react";
import { loginService } from "../../data/services/loginService";

export const LoginPage = ({ onLogin }: { onLogin: () => void }) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await loginService(username, password);
            localStorage.setItem('token', response.token);
            onLogin();
        } catch (error) {
            alert('Invalid username or password');
        }
    };

    const animateInput = (event: React.FocusEvent<HTMLInputElement>) => {
        event.target.classList.toggle('animated');
    }

    return (
        <div className="login-body">
            <form onSubmit={handleSubmit} className="login-form">
                <h2 className="login-body__title">Login</h2>
                <div className="login-body__form-group">
                    <label>Username</label>
                    <input type="text" id="username" onFocus={animateInput} onBlur={animateInput} placeholder="Ceo Ceinson" className="login-body__input" value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div className="login-body__form-group">
                    <label>Password</label>
                    <input type="password" id="password" onFocus={animateInput} onBlur={animateInput} placeholder="Pass1234" className="login-body__input" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button className="login-body__button">Submit</button>
            </form>
        </div>
    );
}
