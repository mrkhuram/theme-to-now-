import React, {Component} from 'react';




class Content extends Component{

    render(){


        return(
            <div>

				<div id="body">
					<div className="header">
						<div>
							<ul>
								<li><img src={require('../images/discuss.jpg')} alt="" /></li>
								<li><img src={require('../images/flags.jpg')} alt="" /></li>
								<li><img src={require('../images/graph.jpg')} alt="" /></li>
							</ul>
							<div>
								<h3>This website template has been designed by <span><a href="http://www.freewebsitetemplates.com/">Free Website Templates</a> for you, for free.</span></h3>
								<p>You can remove any link to our website from this website template, you're free to use this website template without linking back to us.If you're having problems editing this website template, then don't hesitate to ask for help on the <a href="http://www.freewebsitetemplates.com/forum">Forum</a>.</p>
							</div>
						</div>
					</div>
					<div className="body">
						<div className="section">
							<a href="services.html">
								<img src={require('../images/gears.jpg')} alt="" />
								services
				</a>
						</div>
						<div className="article">
							<img src={require('../images/graph2.jpg')} alt="" />
							<h4>This website template has been designed by <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a></h4>
							<p>for you, for free. You can replace all this text with your own text. You can remove any link to our website from this website template, you're free to use this website template without linking back to us.</p>
						</div>
						<div className="section">
							<a href="about.html"><img src={require('../images/globe.jpg')} alt="" />about</a>
						</div>
					</div>
					<div className="footer">
						<div className="section">
							<h3><a href="blog.html">blog</a></h3>
							<ul>
								<li>
									<p>This website template has been designed</p>
									<span>Sept 21, by Nullam | 99 Views | 69 Comments</span>
								</li>
								<li>
									<p>by <a href="http://www.freewebsitetemplates.com/">Free Website Templates</a> for you, for free. You can replace all this text with your own text.</p>
									<span>Sept 21, by Nullam | 99 Views | 69 Comments</span>
								</li>
								<li>
									<p>className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
									<span>Sept 21, by Nullam | 99 Views | 69 Comments</span>
								</li>
							</ul>
						</div>
						<div className="featured">
							<ul>
								<li>
									<h3>If you're having problems editing this website template, then don't hesitate to ask for help on the <a href="http://www.freewebsitetemplates.com/forum">Forum</a>.</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu augue vel dui cursus porta. Nulla sit amet tellus urna</p>
									<span>Sept 21, by Nullam | 99 Views | 69 Comments</span>
								</li>
								<li>
									<h3>Vestibulum tristique, dui a vestibulum blandit, mi elit laoreet nulla consequat nec quam</h3>
									<img src={require('../images/discussing.jpg')} alt="" />
									<p>Morbi non leo augue, et hendrerit lectus. Pellentesque ultricies sapien ornare ipsum tempor lobortis ullamcorper urna</p>
									<span>Sept 21, by Nullam | 99 Views | 69 Comments</span>
								</li>
							</ul>
						</div>
						<div className="section">
							<h3>suspendisse aliquam</h3>
							<ul className="news">
								<li>
									<p>You can remove any link to our</p>
								</li>
								<li>
									<p>website from this website template, you're free to use</p>
								</li>
								<li>
									<p>this website template without linking back to us.</p>
								</li>
								<li>
									<p>lorem ipsum dolor sit amet</p>
								</li>
								<li>
									<p>consectetur adipiscing nunc eu augue vel dui cursus</p>
								</li>
							</ul>
						</div>
					</div>
				</div>

			</div>
        )
    }
}

export default Content;