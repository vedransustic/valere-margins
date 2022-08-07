import {
	MainHeader,
	NormalHeader,
	NormalText,
	Button,
	HorizontalDivide,
	Image,
	VerticalDivide,
	Logo,
} from '../../components';
import Img1 from '../../assets/img/HeroImg1.png';
import Img2 from '../../assets/img/HeroImg2.png';
import Img3 from '../../assets/img/HeroImg3.png';
import {
	heroHeader,
	heroText,
	discoverText,
	heroFunctionalityText,
	streamingSubtitle,
	streamingHeader,
	streamingText,
	searchSubtitle,
	searchHeader,
	searchText,
	listSubtitle,
	listHeader,
	listText,
	homeBottomHeader,
	availableHeader,
	availableCountries,
} from '../../constants';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getDataFromRequests, requests } from '../../api/requests';
import { useEffect } from 'react';
import { addMovies } from '../../redux/slice/movieSlice';

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const getData = async () => {
			return await new Promise(async (resolve, reject) => {
				return await getDataFromRequests(requests)
					.then((data) => resolve(data))
					.catch((err) => reject(err));
			});
		};
		getData()
			.then((res: any) => {
				const data = requests.map((item, idx) => {
					return res[idx].data.results.map((item: any) => {
						return {
							id: item.id,
							title: item.original_title,
							overview: item.overview,
							language: item.original_language,
							adult: item.adult,
							genre: item.genre_ids,
							vote: item.vote_average,
							poster_path: item.poster_path,
							release_date: item.release_date,
							favorite: false,
						};
					});
				});
				dispatch(addMovies(data));
			})
			.catch((err: any) => console.error(err));
	}, []);

	//const navigate = useNavigate();
	// const loading: any = useSelector<any>((state) => state.movies.loading);
	// const movies: any = useSelector<any>((state) => state.movies.movieList);
	// const error: any = useSelector<any>((state) => state.movies.error);
	//const moviesToDisplay = movies.sort(() => 0.5 - Math.random()).slice(0, 10);

	// if (loading) {
	// 	<div className='loading' />;
	// }

	// if (error) {
	// 	<div className='error'>{JSON.stringify(error)}</div>;
	// }

	return (
		<div className='home_container'>
			<HorizontalDivide>
				<div className='home_container__left_side'>
					<MainHeader text={heroHeader} />
					<NormalText text={heroText} />
					<div className='home_container__left_side__buttons'>
						<Button
							text={discoverText}
							route={'/movies/discover'}
						/>
						<Button
							text={heroFunctionalityText}
							variant='outlined'
						/>
					</div>
				</div>
				<div className='home_container__right_side'>
					<div className='home_container__right_side__tv'>
						{/* {moviesToDisplay.map(
							(item: { id: number; poster_path: string }) => {
								return (
									<img
										key={item.id}
										src={`${
											import.meta.env.VITE_API_POSTER_URL
										}${item.poster_path}`}
										alt='poster_404'
										onClick={() =>
											navigate(`/movies/${item.id}`)
										}
									/>
								);
							}
						)} */}
					</div>
				</div>
			</HorizontalDivide>
			<HorizontalDivide>
				<Image width={'100%'} height={'auto'} url={Img1} />
				<VerticalDivide
					subtitle={streamingSubtitle}
					header={streamingHeader}
					text={streamingText}
				/>
			</HorizontalDivide>
			<HorizontalDivide>
				<VerticalDivide
					subtitle={searchSubtitle}
					header={searchHeader}
					text={searchText}
				/>
				<Image width={'100%'} height={'auto'} url={Img2} />
			</HorizontalDivide>
			<HorizontalDivide>
				<Image width={'100%'} height={'auto'} url={Img3} />
				<VerticalDivide
					subtitle={listSubtitle}
					header={listHeader}
					text={listText}
				/>
			</HorizontalDivide>
			<section className='home_container__bottom'>
				<div className='center_div'>
					<Logo />
					<NormalHeader text={homeBottomHeader} />
					<Button text={discoverText} route={'/movies/discover'} />
				</div>
			</section>
			<section className='available'>
				<NormalHeader text={availableHeader} />
				<div className='available__region'>
					{availableCountries.map((regionItem, rdx) => (
						<div key={rdx} className='continent-list'>
							<h3>{regionItem.region}</h3>
							<hr />
							{regionItem.countries.map((country, cid) => (
								<h4 key={cid}>{country}</h4>
							))}
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default Home;
