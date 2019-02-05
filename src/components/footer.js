import React, { Component } from 'react';
import '../style.css';
 
class Footer extends Component {

    render() {
        return (
            <div>
 
                <div id="footer">
                    <div>
                        <div>   
                            <h3>america</h3>
                            <ul>
                                <li>457-380-1654 main</li>
                                <li>257-301-9417 toll free</li>
                            </ul>
                        </div>
                        <div>
                            <h3>europe</h3>
                            <ul>
                                <li>457-380-1654 main</li>
                                <li>257-301-9417 toll free</li>
                            </ul>
                        </div>
                        <div>
                            <h3>canada</h3>
                            <ul>
                                <li>457-380-1654 main</li>
                                <li>257-301-9417 toll free</li>
                            </ul>
                        </div>
                        <div>
                            <h3>middle east</h3>
                            <ul>
                                <li>457-380-1654 main</li>
                                <li>257-301-9417 toll free</li>
                            </ul>
                        </div> 
                        <div>
                            <h3>follow us:</h3>
                            <a className="facebook" href="http://facebook.com/freewebsitetemplates">facebook</a>
                            <a className="twitter" href="http://twitter.com/fwtemplates">twitter</a>
                        </div>
                    </div>
                    <div>
                        <p>&copy Copyright 2012. All rights reserved</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;