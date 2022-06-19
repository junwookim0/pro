// 소개 페이지
import './IntroList.css';
import Nav from '../Nav/Nav';
import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function animateFrom(elem, direction) {
        direction = direction || 1;
        var x = 0,
            y = direction * 100;
        if(elem.classList.contains("gs_reveal_fromLeft")) {
        x = -100;
        y = 0;
        } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 100;
        y = 0;
        }
        elem.style.transform = "translate(" + x + "px, " + y + "px)";
        elem.style.opacity = "0";
        gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
        duration: 1.25, 
        x: 0,
        y: 0, 
        autoAlpha: 1,  
        ease: "expo", 
        overwrite: "auto"
        });
    }
    
    function hide(elem) {
        gsap.set(elem, {autoAlpha: 0});
    }
    
const IntroList = () => {
    useEffect(()=>{
            gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
            hide(elem); 
            ScrollTrigger.create({
                trigger: elem,
                onEnter: function() { animateFrom(elem) }, 
                onEnterBack: function() { animateFrom(elem, -1) },
                onLeave: function() { hide(elem) }
            });
            })
        });

    return (
    <div>
        <Nav/>
        <div className="cInnerContent">
            {/*1단 나누기 */}
            <div className="cInnerContent_1">
                    <div className="cInnerContent_1_left">
                        <h1>다시 한 번, <br /></h1> 
                        <h3>지구를 되살리기 위해</h3>
                        <p>
                            대한민국에서 버려지는 생수 페트병은 연간 49억개.<br />
                            다 쓴 페트병을 모두 연결하면 지구를 10바퀴도 넘게 돌 수 있는 양입니다.<br />
                            <br />
                            전세계 1인당 일회용 플라스틱 폐기물 배출량 3위를 기록한 
                            우리나라가 할 수 있는 일은 과연 무엇이었을까요?<br />
                            <br /></p> 
                            
                            분류 배출을 넘어 쓰레기를 새로운 방법으로 재탄생시키는
                            <p><b className='point'>“Upcycling”</b><br />
                            저희는 이 단어로부터 출발했습니다.
                            </p>
                    </div>
                    <div className="cInnerContent_1_right">
                        <img className="intro01"src="../../images/intro01(수정).PNG"></img>
                    </div>
            </div>
             {/*2단 나누기 */}
            <div className="cInnerContent_2">
                <div className="cInnerContent_2header">
                    <h1>Upcycling?</h1>
                </div>
                    <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
                        <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
                            <div className="card">
                                <img width="479" src="../../images/intro02.JPG" alt="img2"/>
                            </div>
                        </div>
                        <div className="ipsGrid_span7 ipsType_left">
                            <h2 className="heading_large gs_reveal">1. 업사이클링이란</h2>
                            <p className="gs_reveal">
                                업사이클링이란 쓸모를 다한 물건의 부산물, 폐자재와 같은 재활용품에 디자인
                                또는 활용도를 더해 예술적·환경적 가치가 높은 물건으로 재탄생시키는 방식을 말합니다.
                            </p> 
                        </div>
                    </div>
                <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
                    <div className="ipsGrid_span7 ipsType_right">
                        <h2 className="heading_large gs_reveal">2. 예술</h2>
                        <p className="gs_reveal"> 
                        물건을 재사용하는 전통은 민속 예술부터 오랫동안 사용되어 왔습니다. 
                        대표적인 예로 아미쉬 퀼트는 인양된 천을 재사용하여 제작한 작품이며, 
                        로스앤젤레스에 있는 이먼 로디아의 와츠 타워(1921–1954)는 고철, 도자기, 깨진 유리를 재활용한 대표적인 작품으로 알려져 있습니다. 
                        </p>
                    </div>
                    <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight">
                        <div className="card">
                            <img width="479" src="../../images/intro03.PNG" alt="img3"/>
                        </div>
                    </div>
                </div>
                <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
                    <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
                        <div className="card">
                            <img width="479" src="../../images/intro04.jpg" alt="img4"/>
                        </div>
                    </div>
                    <div className="ipsGrid_span7 ipsType_left">
                        <h2 className="heading_large gs_reveal">3. 산업 </h2>
                        <p className="gs_reveal"> 
                        중고 제품의 재제조, 혹은 리퍼브로 만들어진 재생산된 제품은 폐기하거나 재활용하는 것보다 더 높은 가치를 가집니다. 
                        양조 공정에서 나오는 폐기물을 바이오가스 공정의 기판으로 사용함으로써 폐기할 필요가 없어지고 전체 양조 공정에 상당한 이익을 창출할 수 있어, 
                        이 과정에서 바이오가스 공장은 "업사이클러" 역할을 한다고 볼 수 있습니다.
                        </p>
                    </div>
                </div>
                <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
                    <div className="ipsGrid_span7 ipsType_right">
                        <h2 className="heading_large gs_reveal">4. 의류</h2> 
                        <p className="gs_reveal">
                        현대 디자이너들은 산업 섬유 폐기물과 기존 의류를 모두 새로운 패션을 만드는 기본 재료로 사용하기 시작했습니다. 
                        산업 섬유 폐기물이란 공장에서 패턴을 도려내고 남은 원단 잔해와 같이 만들어진 것을 의미하며, 
                        기증받은 옷 등 주인에게 더이상 유용하지 않은, 완성된 제품 역시 소비 이후 폐기물이라 일컬어집니다. 
                        <br />
                        이 때 순환 경제(Circular Economy)란 리소스를 최대한 오래 사용하여 사용 중에 최대한 많은 가치를 창출한 다음, 
                        사용이 끝나면 복원하거나 용도를 변경하는 것을 말합니다. 
                        섬유 폐기물 및 기존 의복을 재활용 하는 것 역시 업사이클링의 한 종류로 볼 수 있습니다.
                        </p>
                    </div>
                    <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight">
                        <div className="card">
                            <img width="479" src="../../images/intro05.jpg" alt="img5"/>
                        </div>
                    </div>
                </div>
             
            </div>

            {/*3단 나누기*/}
                <div className='cInnerContent_3'>
                    <h1>다시에서 우리는 아래와 같은 활동을 합니다.</h1>
                <ul className='cInnerContent_31'>
                    <li className='cInnerContent_list'>
                    <i class="fab fa-envira"></i>
                        <h3>아껴쓰기</h3>
                        <p>내용1</p>
                    </li>
                    <li className='cInnerContent_list'>
                    <i class="fas fa-oil-can"></i>
                        <h3>바꿔쓰기</h3>
                        <p>내용1</p>
                    </li>
                    <li className='cInnerContent_list'>
                    <i class="fas fa-exchange-alt"></i>
                        <h3>나눠쓰기</h3>
                        <p>내용1</p>
                    </li>
                    <li className='cInnerContent_list'>
                    <i class="fas fa-recycle"></i>
                        <h3>다시쓰기</h3>
                        <p>내용1</p>
                    </li>
                </ul>
            </div>
            
            {/*4단 나누기*/}
            <div className='cInnerContent_4'>
                <h1>Review Community</h1>
                {/*그리드 3*3단으로 Review 게시물 가져오기*/}

            </div>
            {/*인트로 종료 */}
        </div>
    </div>
    );
};
export default IntroList;
