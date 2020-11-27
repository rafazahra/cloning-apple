import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import AppleIcon from '@material-ui/icons/Apple';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

class Home extends Component{
  render(){
      return(
        <div>
            <div class="navbar-fixed">
                <nav class="black">
                   
                        <div class="nav-wrapper grey darken-3">
                            <ul id="nav-mobile" class="center hide-on-med-and-down">
                                <li><a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<AppleIcon/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                                <li><a href="#">Mac&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                                <li><a href="#">iPad&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                                <li><a href="#">iPhone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                                <li><a href="#">Watch&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                                <li><a href="#">TV&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                                <li><a href="#">Music&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                                <li><a href="#">Support&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                                <li><a><SearchIcon/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></li>
                                <li><a><ShoppingBasketIcon/></a></li>
                            </ul>
                        </div>
                    
                    </nav><br/><br /><br />

                    <img class="materialboxed" data-caption="A picture of a way with a group of trees in a park" width="1349" height="630" src="/iphone.jpg"></img>
                       

                    <div class="container">
                        
                        <center>
                        <br/><br/>
                        <p><font size="7"><b>iPhone 12</b></font><br/><font size="5">blast past fast.</font></p>
                        <div class="pricing-info">
                            <p class="price price-with-carrier">
                                <span aria-label="From forty one dollars and sixty two cents per month or nine hundred ninety nine dollars before trade in." role="text">
                                    From $41.62/mo. or $999 before trade-in. </span><sup><a href="#" class="footnote">2</a></sup></p>
                                    <p>Buy directly from Apple with special carrier offers.</p>
                                </div>
                                <div class="cta-links">
                                    <a class="icon icon-after icon-chevronright" href="/" target="_self" rel="follow" data-analytics-region="learn more" data-analytics-title="Learn more about iPhone 12 Pro" aria-label="Learn more about iPhone 12 Pro">Learn more &gt;</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a class="icon icon-after icon-chevronright" href="/" target="_self" rel="follow" data-analytics-region="buy" data-analytics-title="Buy iPhone 12 Pro" aria-label="Buy iPhone 12 Pro">Buy &gt;</a>
                            </div>    
                            <img src="/apple.jpg" width="700" height="350"></img><br /><br />
                            <img src="/logomac.jpg" width="200" height="150"></img><br /><br />
                            <h2><b>Give something wonderful</b></h2>
                            <a class="icon icon-after icon-chevronright" href="/" target="_self" rel="follow" data-analytics-region="shop gifts" data-analytics-title="shop gifts" aria-label="shop gifts">Shop gifts &gt;</a><br />

                                <br /><br />
                            <Mui.Grid container spacing={1}>
                            <Mui.Grid item xs={6} sm={4}>
                              <img src="/ip12.jpg" width="300" height="200"></img>
                            </Mui.Grid>
                            
                            <Mui.Grid item xs={6} sm={4}>
                                <img src="/macbook.jpg" width="300" height="200"></img> 
                            </Mui.Grid>

                            <Mui.Grid item xs={6} sm={4}>
                                <img src="/airpods.jpg" width="300" height="200"></img>
                            </Mui.Grid>
                </Mui.Grid>
                    </center>
                    </div>
                </div>
        </div>
      )
    }
  }

export default Home