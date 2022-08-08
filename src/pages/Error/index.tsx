import { MainHeader } from '../../components';
import './index.scss';

const Error = () => (
	<div className='error_content'>
		<div className='error_content__mid'>
			<MainHeader text='404 !' />
			<MainHeader text='PAGE NOT FOUND...' />
		</div>
	</div>
);

export default Error;
