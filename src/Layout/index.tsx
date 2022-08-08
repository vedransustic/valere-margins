import { Outlet } from 'react-router-dom';
import { Footer } from '../components';
import { Navigation } from '../components';

const Layout = () => {
	return (
		<>
			<Navigation />
			<main className='app-content'>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default Layout;
