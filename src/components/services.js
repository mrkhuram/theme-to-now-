import React, { Component } from 'react';

class Services extends Component {
    
    render() {


        return (
            <div >

                <div id="body">
                    <div className="services">
                        <h1>services</h1>
                        <div>
                            <h2>This website template has been designed by 
                                <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a> 
                                for you, for free. You can replace all this text with your own text.</h2>
                            <p>You can remove any link to our website from this 
                                website template, you're free to use this website template without linking back to us.
                                 If you're having problems editing this website template, then don't hesitate to ask for 
                                 help on the <a href="http://www.freewebsitetemplates.com/forum">Forum</a>.</p>
                        </div>
                        <div>
                            <h4>Lorem ipsum dolor sit amet consectetur adipiscing elit maecenas sapien viverra aliquam 
                                a libero nuncmauris aliquam malesuada, mi a iaculis suscipit, magna elit dictum lectuset 
                                sollic</h4>
                            <ul>
                                <li>Aliquam eget ligula et diam sollicitud</li>
                                <li>Sed venenatis arcu a felis aliquet et</li>
                                <li>Sed laoreet felis et ante</li>
                                <li>Viverra arcu a felis aliquet</li>
                                <li>Pellentesque consectetur tellus sed</li>
                            </ul>
                            <ul>
                                <li>Diam sollicitud Aliquam eget ligula</li>
                                <li>Venenatis arcu a felis aliquet</li>
                                <li>Felis et antesed laoreet</li>
                                <li>Consectetur tellus Pellentesque</li>
                                <li>Ullamcorper ut interdum  sollicitud</li>
                            </ul>
                            <ul>
                                <li>Diam sollicitud Aliquam eget ligula</li>
                                <li>Venenatis arcu a felis aliquet</li>
                                <li>Felis et antesed laoreet</li>
                                <li>Consectetur tellus Pellentesque</li>
                                <li>Ullamcorper ut interdum  sollicitud</li>
                            </ul>
                        </div>
                        <div>
                            <div>
                                <img src={require("../images/settings.jpg")} alt="" />
                                <h3>Looking for more templates? Just browse through all our
                                     <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a>
                                      and find what you’re looking for.</h3>
                                <p>But if you don’t find any website template you can use, you can try our
                                     <a href="http://www.freewebsitetemplates.com/freewebdesign/">Free Web Design</a> 
                                     service and tell us all about it. Maybe you’re looking for something different, 
                                     something special. And we love the challenge of doing something different and
                                      something special.</p>
                            </div>
                            <div>
                                <img src={require("../images/globe2.jpg")} alt="" />
                                <h3>Integer cursus odio vel lorem fringilla et faucibus justo malesuada. 
                                    Morbi ut eros vitae turpis mattis ultrices sit amet sit amet augue. </h3>
                                <p> Phasellus quis est et massa rhoncus hendrerit quis ut justo.
                                     Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
                                     cubilia Curae</p>
                            </div>
                            <div>
                                <img src={require("../images/stats.jpg")} alt="" />
                                <h3>This website template has been designed by
                                     <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a> 
                                     for you, for free. You can replace all this text with your own text.</h3>
                                <p>You can remove any link to our website from this website template, 
                                    you're free to use this website template without linking back to us. 
                                    If you're having problems editing this website template, then don't 
                                    hesitate to ask for help on the <a href="http://www.freewebsitetemplates.com/forum">
                                    Forum</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services;