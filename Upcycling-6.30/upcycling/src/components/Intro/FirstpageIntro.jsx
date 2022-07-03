//첫페이지 "/"  페이지 소개 내용  FirstMain 에서 사용
import './FirstpageIntro.css';

const FirstpageIntro = () => {

return (
    <div>
        <div className='about_page' id='about_upctown'>
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
    );
};
export default FirstpageIntro;