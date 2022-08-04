import {
	MainHeader,
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

const Home = () => {
	return (
		<div className='home_container'>
			<HorizontalDivide>
				<div className='home_container__left_side'>
					<MainHeader text={heroHeader} />
					<NormalText text={heroText} />
					<div className='home_container__left_side__buttons'>
						<Button text={discoverText} />
						<Button
							text={heroFunctionalityText}
							variant='outlined'
						/>
					</div>
				</div>
				<div className='home_container__right_side'></div>
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
					<MainHeader text={homeBottomHeader} />
					<Button text={discoverText} />
				</div>
			</section>
			<section className='available'>
				<MainHeader text={availableHeader} />
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
