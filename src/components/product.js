import React, { Component } from 'react';
import '../style.css';

class Product extends Component {
    render() {
        return (
            <div >

                <div id="body">
                    <div className="products">
                        <h1>product</h1>
                        <div>
                            <h2>we have free templates for everyone</h2>
                            <p>This website template has been designed by <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a> for you, for free. You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the <a href="http://www.freewebsitetemplates.com/forum">Forum</a>.</p>
                        </div>
                        <div>
                            <div> 
                                <h3>Proin molestienipurus vulpu tate suscipitS uspend</h3>
                                <img src={require("../images/discuss2.jpg")} alt="" />
                                <p>Morbi laoreet, tellus non tristique vulputate, dolor quam scelerisque nulla, id facilisis velit ante sit amet lorem. Nullam vulputate lorem id massa pharetra eu posuere</p>
                            </div>
                            <div>
                                <h3>Suspendisse euisMaurimod au gue  penatibus </h3>
                                <img src={require("../images/flags2.jpg")} alt="" />
                                <p>Velit ante sit amet lorem. Nullam vulputate lorem id massa pharetra eu posuere lorem egestas. Nulla inpurus quisquam fermentum imperdiet</p>
                            </div>
                            <div>
                                <h3>fringilla congue elitel plac erat mau riscommodoCu</h3>
                                <img src={require("../images/graph3.jpg")} alt="" />
                                <p>Nullam vulputate lorem id massa pharetra eu posuere lorem egestas. Nulla in purus quis quam fermentum imperdiet arcu Sed ipsum velit, tristique vel sollicitudin </p>
                            </div>
                        </div>
                        <p>This website template has been designed by <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a> for you, for free. You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the <a href="http://www.freewebsitetemplates.com/forum">Forum</a>.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;