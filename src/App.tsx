import { useState } from 'react';
import { LoginPage } from './layout/pages/LoginPage';
import { ChannelFeed } from './layout/pages/ChannelFeed';

function App() {

	const [isLogged, setIsLogged] = useState(false);

	return (
		<div className='content'>
			{
				!isLogged
					? <LoginPage onLogin={() => setIsLogged(true)} />
					: <ChannelFeed />
			}
		</div>
	)
}

export default App
