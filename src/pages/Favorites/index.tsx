import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { SelectIcon } from '../../assets/img';
import { Poster } from '../../components';
import { getAllMovies } from '../../redux/slice/movieSlice';
import './index.scss';

const Favorites = () => {
	const movies: any = useSelector<any>(getAllMovies);

	useEffect(() => {
		const moviesToDisplay = movies.filter(
			(x: { favorite: boolean }) => x.favorite === true
		);
		setFilterdData(moviesToDisplay);
	}, [movies]);

	const [filterdData, setFilterdData] = useState([]);

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
