import { Component } from "react";
import CategoryBanner from "../banner/CategoryBanner";


class MyReview extends Component {
    constructor (props) {
        super(props);

    }

    render () {
        return (
            <div>
                <CategoryBanner></CategoryBanner>
                
            </div>
        )
    }
};

export default MyReview;