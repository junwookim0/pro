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

const FirstpageIntro = () => {
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
        <div className="cInnerContent">
            <h1 className="header-section gs_reveal ipsType_center">Upcycling</h1>
                <div className="features">
                    <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
                        <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
                            <div className="card">
                                <img width="479" src="../../images/Category003.jpg" alt="img1"/>
                            </div>
                        </div>
                        <div className="ipsGrid_span7 ipsType_left">
                            <h2 className="heading_large gs_reveal">For <strong>Upcycling</strong></h2>
                            <p className="gs_reveal">새활용(-活用) 또는 업사이클(영어: upcycling 또는 creative reuse)은 부산물, 폐자재와 같은 쓸모 없거나 버려지는 물건을 새롭게 디자인해 예술적·환경적 가치가 높은 물건으로 재탄생시키는 재활용 방식이다. </p>
                        </div>
                    </div>
                <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
                    <div className="ipsGrid_span7 ipsType_right">
                        <h2 className="heading_large gs_reveal"> 예술 </h2>
                        <p className="gs_reveal"> 주류 미술에서 발견된 물건(objet trové)을 재사용하는 전통은 민속 예술에서 오랫동안 사용된 방식이기는 했지만, 20세기 성숙기를 겪으며 더욱 발전했다. 예를 들어 아미쉬 퀼트는 인양된 천을 재사용한 것이다. 로스앤젤레스에 있는 사이먼 로디아의 와츠 타워(1921–1954)는 고철, 도자기, 깨진 유리의 거대한 재활용의 대표적 예이며, 이는 와츠 스카이라인에서 30미터가 넘는 가장 높은 17개의 구조물로 구성되어 있다.</p>
                    </div>
                    <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight">
                        <div className="card">
                            <img width="479" src="../../images/222.PNG" alt="img2"/>
                        </div>
                    </div>
                </div>
                <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
                    <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
                        <div className="card">
                            <img width="479" src="../../images/산업.jpg" alt="img3"/>
                        </div>
                    </div>
                    <div className="ipsGrid_span7 ipsType_left">
                        <h2 className="heading_large gs_reveal">산업 </h2>
                        <p className="gs_reveal"> 플라스틱 및 전자 제조와 같은 많은 산업 공정은 유한한 자원의 소비에 의존한다.또한 폐기물은 환경에 악영향을 미칠 수 있으며 인간의 건강에 영향을 미칠 수 있다. 이러한 맥락에서 새활용은 폐기물 또는 부산물에서 더 높은 가치를 지닌 제품을 만들어 폐기물과 자원 소비를 줄이기 위해 사용 가능한 미래 기술의 사용을 설명한다.
                        소비자 가전에서 중고 제품의 재 제조 또는 리퍼브 프로세스는 새로운 제조에 비해 에너지 및 재료 소비가 감소하기 때문에 업 사이클링으로 볼 수 있다. 재생산된 제품은 폐기하거나 재활용하는 것보다 가치가 더 높다. 양조 공정에서 나오는 폐기물을 바이오가스 공정의 기판으로 사용함으로써 폐기할 필요가 없어지고 전체 양조 공정에 상당한 이익을 창출할 수 있다. 기판 가격에 따라 운영비의 약 20%의 이익이 가능하다. 이 과정에서 바이오가스 공장은 "업사이클러" 역할을 한다.</p>
                    </div>
                </div>
                <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
                    <div className="ipsGrid_span7 ipsType_right">
                        <h2 className="heading_large gs_reveal">의류</h2> 
                        <p className="gs_reveal">디자이너들은 산업 섬유 폐기물과 기존 의류를 모두 새로운 패션을 만드는 기본 재료로 사용하기 시작했다. 업사이클링은 소비 이전 또는 소비 이후 폐기물을 사용하거나 둘의 조합을 사용하는 것으로 알려져 있다. 소비 이전 폐기물은 공장에서 패턴을 도려내고 남은 원단 잔해와 같이 만들어진다. 소비 이후 폐기물은 기증받은 옷과 같이 주인에게 더 이상 유용하지 않을 때 완성된 제품을 말한다.
                        종종, 사람들은 사고, 사용하고, 버리는 것에 만족하는 선형 경제를 실행한다. 이 시스템은 수백만 킬로그램의 섬유 폐기물이 버려지는 데 기여한다. 생산되는 대부분의 섬유는 재활용이 가능하지만, 미국에서만 약 85%가 토지 매각으로 귀결된다. 지속 가능한 삶을 살기 위해서는 패스트패션에 의해 장려되는 "버리는" 태도와는 반대되는 의복 선택이 필요하다. 새활용(upcycling)은 이것을 도와 줄 수 있는데, 그것은 그것이 더 순환적인 경제 모델을 실행에 옮기기 때문이다. 
                        순환 경제(Circular Economy)는 리소스를 최대한 오래 사용하여 사용 중에 최대한 많은 가치를 창출한 다음, 사용이 끝나면 복원하고 용도 변경하는 것을 말한다.
                        맥도너와 브라웅가트에 의해 대중화된 이것은 요람 대 요람 원리로도 알려져 있다. 이 원리는 제품이 여러 수명 주기를 가지거나 생분해되도록 설계되어야 한다고 말한다.</p>
                    </div>
                    <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight">
                        <div className="card">
                            <img width="479" src="../../images/의류.jpg" alt="img4"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};
export default FirstpageIntro;
