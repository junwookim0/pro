//nav 바의 home
import Nav from '../components/Nav/Nav';
import SubMainBannerHome from '../components/banner/SubMainBannerHome';
import CarouselReview from '../components/banner/CarouselReview';
import CarouselDealList from '../components/banner/CarouselDealList';

const Home = ( {reviewRepository}) => {

    return (
        <div>
            <Nav/>
            <SubMainBannerHome/>
            <CarouselReview reviewRepository={reviewRepository}/>
            <CarouselDealList />
        </div>
    )
};

export default Home;