import React from "react";
import styled, { css } from "styled-components";
import { Component } from "react";
import CategoryBanner from "../banner/CategoryBanner";
class MyLike extends Component {
    constructor (props) {
        super (props);
    }

    render() {
        return (
            <div>
                <CategoryBanner></CategoryBanner>
            </div>
        )
    }
};

export default MyLike;