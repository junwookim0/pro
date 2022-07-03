// 소개 페이지 about
import './IntroList.css';
import Nav from '../Nav/Nav';
import SubMainBanner from "../banner/SubMainBannerContents";


const IntroList = () => {
    return (
    <div className='homebody'>
        <Nav/>
        <SubMainBanner />
        <div className="cInnerContent">
            {/*1단 나누기 */}
            <div className="cInnerContent_1" id='about_upcycling'>
                <div className="cInnerContent_1_left">
                        <h1 className='intro_point'>다시 한 번, </h1> 
                        <h3>지구를 되살리기 위해...</h3>
                        <p>
                            대한민국에서 버려지는 생수 페트병은 연간 49억개.<br/>
                            다 쓴 페트병을 모두 연결하면 지구를 10바퀴도 넘게 돌 수 있는 양입니다.<br/>
                            <br/>
                            전세계 1인당 일회용 플라스틱 폐기물 배출량 3위를 기록한 <br/>
                            우리나라가 할 수 있는 일은 과연 무엇이었을까요?<br/>
                            <br/></p>
                            <p>분류 배출을 넘어 쓰레기를 새로운 방법으로 재탄생시키는<br/>
                            <div className='sub_point'>Upcycling!</div>
                            저희는 이 단어로부터 출발했습니다.</p>
                            
                    </div>
                <div className="cInnerContent_1_right">
                    <img className="intro01"src="../../images/intro01(수정).PNG" alt='intro01'></img>
                </div>
            </div>
            <div className='cInnerContent_2'>
                <div className='cInnerContent_2_title'>
                    <p> 가치를 더욱더 높이는, UPCYCLING! </p>
                    <h1><span>업타운</span>은 <span>여러분</span>과 함께 합니다.</h1>
                </div>
                <ul className='cInnerContent_2_1'>
                    <li className='cInnerContent_list'>
                    <i className="fab fa-envira"></i>
                        <h3>Food Upcycling</h3>
                        <p>업사이클링이 제품으로만 가능할 거로 생각하셨다면
                            큰 오산이에요! 
                            식품에 적용할 수도 있는데,
                            이를 우리는 ‘푸드 업사이클링’이라고 합니다. </p>
                    </li>
                    <li className='cInnerContent_list'>
                    <i className="fas fa-exchange-alt"></i>
                        <h3>서로를 구하다, 119 REO</h3>
                        <p>업사이클링을 통해 폐소방복이 새로운 제품으로 탄생합니다! 
                            19REO가 무상으로 수거하여 깨끗하게 세탁 후 임가공 자활을 통해 방화복을 분해합니다.</p>
                    </li>
                    <li className='cInnerContent_list'>
                    <i className="fas fa-oil-can"></i>
                        <h3>Conscious Fashion</h3>
                        <p>
                            의류로 인한 환경 오염 문제를 인식하고, 
                            이를 개선하기 위해 환경을 생각하는 패션 트렌드까지 생겨났죠! 
                            이를 우리는 ‘컨셔스 패션(conscious fashion)’이라고 합니다.</p>
                    </li>
                    <li className='cInnerContent_list'>
                    <i className="fas fa-recycle"></i>
                        <h3>쓸모를 부여하다</h3>
                        <p>
                            업사이클링은 낭비라고 생각되는 것을 재활용하는 것입니다.
                            업사이클링된 아이템은 종종 이전보다 더 기능적이거나 아름다워집니다.
                            그래서 아이템의 가치가 높아졌다고 해서 업사이클링이라고 해요!</p>
                    </li>
                </ul>
            </div>
            <div className='about_page' id='about_upctown'>
                {/* <div className='about_page_title'>
                    <h1 className='about_logo'>UPCYCLE TOWN</h1>
                    <p>업사이클링 아이디어와 영감</p>
                </div> */}
                <div className='about_page_box_odd'>

                    <img className='about_intro_img' src="../../images/ocean.jpg" alt='소개img1'></img>
                    <div className='about_intro_card'>
                        <h2 className='about_intro_title'>ABOUT UPTOWN</h2>
                        <p className='about_intro_text'>
                            대한민국에서 버려지는 생수 페트병은 연간 49억개. <br/>
                            다 쓴 페트병을 모두 연결하면 <br/>지구를 10바퀴도 넘게 돌 수 있는 양입니다.<br/><br/>
                            전세계 1인당 일회용 플라스틱 폐기물 배출량 3위를 기록한
                            우리나라가 할 수 있는 일은 과연 무엇이었을까요? <br/><br/>
                                    
                            분류 배출을 넘어 쓰레기를 새로운 방법으로 재탄생시키는
                            Upcycling!<br/>저희는 이 단어로부터 출발했습니다.
                        </p>
                    </div>
                </div>
                <div className='about_page_box_even'>
                    <img className='about_intro_img' src="../../images/forest.jpg" alt='소개img1'></img>
                    <div className='about_intro_card'>
                        <h2 className='about_intro_title'>DISCOVER OUR PURPOSE</h2>
                        <p className='about_intro_text'>오늘도 어김없이 버려지는 수많은 쓰레기. <br/>
                        이렇게 버려지면, 그대로 쓰레기가 되어 아무 쓸모가 없을까요? <br/><br/>
                        그 정답은 우리에게 달려있어요. <br/> 기업과 개인이 지속 가능한 삶을 위한 힘을 보여준다면 말이에요! <br/>
                        톡톡 튀는 다양한 아이디어들로 ‘버려진 것’들의 대변신은  <br/>그야말로 무한한 가능성을 보여주고 있는데요.<br/> <br/>
                        ‘업사이클링’을 통해 버려진 쓰레기들의 대변신,  <br/>UPTOWN과 함께 경험해 보세요.</p>
                    </div>
                </div>
                <div className='about_page_box_odd'>
                    <img className='about_intro_img' src="../../images/book_story.jpg" alt='소개img1'></img>
                    <div className='about_intro_card'>
                        <h2 className='about_intro_title'>OUR STORY</h2>
                        <p className='about_intro_text'>
                        업사이클링에는 폐기물의 본래 사용 목적이나 이야기들이 자연스럽게 담깁니다. <br/>
                    
                        업사이클링은 폐기될 자원을 새로운 가치를 지닌 상품으로 재탄생시킨다는 점에서
                        <br/> 환경적, 경제적 의의가 큽니다. <br/><br/>
                        이에 따라 유럽 등 해외의 경우, <br/> 1990년대부터 잠재력이 큰 산업으로 각광받고 있으나 <br/>
                        국내의 경우 업사이클링 용어가 등장한 것은 2006년부터입니다. <br/>

                        이때까지만 해도 업사이클 브랜드 수가 2011년 10여 개에 그쳤지만 <br/>
                        시간이 흐르면서 점차 환경문제에 대해 많은 사람들이 의식하기 시작했고 <br/>
                        그 결과 2017년 기준 100개를 넘어섰습니다.<br/><br/>
                        이제 여러분들의 이야기를 담아 함께해보는건 어떨까요?

                        </p>
                    </div>
                </div>
                <div className='about_page_box_even'>
                    <img className='about_intro_img' src="../../images/frontImg3.jpg" alt='소개img1'></img>
                    <div className='about_intro_card'>
                        <h2 className='about_intro_title'>YOUR UPTOWN</h2>
                        <p className='about_intro_text'>
                        아주 잠깐 사용되고 쓰임이 다하거나 유행이 지나 버려지는 물건 중 <br/>
                        재활용이 어려운 소재일 때, <br/>
                        업사이클링을 통해 다시 인간의 공간 어딘가에 머물게 된다면 <br/>
                        환경적인 측면에서 긍정적이고 <br/>지구상에 더 이상 둘 곳 없는 쓰레기들의 안식처가 될 수 있습니다. <br/><br/>

                        하지만 업사이클링이 모든 것을 해결해줄 거라는 안일한 믿음은 섣부릅니다. <br/>
                        지구 상의 쓰레기는 지금까지 버려진 양도 다 구제하지 못할 만큼 넘쳐나고 있습니다. <br/>
                        또 다른 소비를 불러일으켜 다시 한번 쓰레기가 된다면<br/> 그것 역시 친환경적이라고 할 수 없습니다. <br/><br/>
                        </p>
                    </div>
                </div>  
            </div>
        </div>
    </div>
    );
};
export default IntroList;
