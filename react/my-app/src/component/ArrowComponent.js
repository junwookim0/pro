import {PropTypes} from "prop-types";

const ArrowComponent = (props) => {
    const { name, children } = props;
    return(
        <div>
            <p> { children } </p>
            <p> { name} </p>
            화살표 함수로 만든 컴포넌트입니다props
        </div>
    );
};
//값을 작성해주지않으면 아래값으로 들어가서 출력된다
ArrowComponent.defaultProps ={
    name : "기본이름",
};

ArrowComponent.protoTypes = {
    name : PropTypes.string,
};

export default ArrowComponent;
