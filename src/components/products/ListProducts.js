import React, { Component } from "react";

import Product from "./Product";
import Advertising from "../layout/Advertising";

import { ProductConsumer } from "../globalData/Context";
import ListCategories from "../categories/ListCategories";

import { Pagination } from "../layout/Pagination";

import BestSellers from "./BestSellers";

export default class ListProducts extends Component {
  state = {
    search: "",
  };
  render() {
    return (
      <>
        <Advertising />

        <div class="ps-section--features-product ps-section masonry-root pt-100 pb-100" />
        <div class="ps-container">
          <div class="ps-section__header mb-50">
            <h3 class="ps-section__title" data-mask="">
                
            </h3>
          </div>
          <div class="ps-section__content pb-50">
            <div
              class="masonry-wrapper"
              data-col-md="4"
              data-col-sm="2"
              data-col-xs="1"
              data-gap="30"
              data-radio="100%"
            >
              <div class="grid-sizer" />
              <div className="row">
                
                <div className="col-md-9 col-lg-9">
                 
                   
                

                  
                    
                 
                  <hr />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
