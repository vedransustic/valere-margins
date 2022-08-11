import { useState } from 'react';
import { SelectIcon } from '../../assets/img';
import { MainHeader } from '../../components';
import { Poster } from '../../containers';
import { loadFromLocalStorage } from '../../utils';
import './index.scss';

const Favorites = () => {
	const { loading, movies, error }: any = loadFromLocalStorage();

	const data = movies.filter(
		(x: { favorite: boolean }) => x.favorite === true
	);
	const [filterdData, setFilterdData] = useState(data);

	const handleSort = (option: string) => {
		switch (option) {
			case 'title-alp':
				setFilterdData([
					...filterdData.sort(
						(a: { title: string }, b: { title: string }) =>
							a.title
								.toLowerCase()
								.localeCompare(b.title.toLowerCase())
					),
				]);
				break;
			case 'title-alp-rev':
				setFilterdData([
					...filterdData.sort(
						(a: { title: string }, b: { title: string }) =>
							b.title
								.toLowerCase()
								.localeCompare(a.title.toLowerCase())
					),
				]);
				break;
			default:
				break;
		}
	};

	if (loading)
		return (
			<div className='loading'>
				<MainHeader text='Loading...' />
			</div>
		);

	if (error) return <MainHeader text={error} />;

	return (
		<div className='favorite__container'>
			<div className='favorite__container__filters__select'>
				<select
					name='select-filter'
					id='select-filter'
					className='favorite__container__filters__select__filter'
					onChange={(e) => handleSort(e.target.value)}>
					<option value=''>-- Sorting options--</option>
					<option value='title-alp'>Title</option>
					<option value='title-alp-rev'>Title (rev)</option>
				</select>
				<img
					src={SelectIcon}
					alt='select-icon'
					className='favorite__container__filters__select__selectIcon'
				/>
			</div>
			<div className='favorite__container__favorites'>
				{filterdData &&
					filterdData.map((item: { id: any }) => (
						<div key={item.id}>
							<Poster movie={item} />
						</div>
					))}
			</div>
		</div>
	);
};

export default Favorites;
