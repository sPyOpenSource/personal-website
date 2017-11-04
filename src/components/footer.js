import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
          <footer className="container">
            <p>
              <a href="https://www.linkedin.com/pub/xuyi-wang/a0/7b5/a30"><img className="avatar" alt="LinkedIn" src="img/social_network_icons/LinkedIn.png"/></a>
              <a href="https://www.facebook.com/xuyi.wang.1"><img className="avatar" alt="Facebook" src="img/social_network_icons/facebook.png"/></a>
              <a href="https://twitter.com/xuyi_wang"><img className="avatar" alt="Twitter" src="img/social_network_icons/twitter2.png"/></a>
              <a href="https://soundcloud.com/xuyi-wang"><img className="avatar" alt="SoundCload" src="img/social_network_icons/soundcload2.png"/></a>
            </p>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick"/>
              <input type="hidden" name="hosted_button_id" value="XLWX6BWCMMJEY"/>
              <p>
                Any amount of donation is appreciated.
                The major use of your donation is to support the open source projects.
                If you have any questions, then you can use <a href="/git/index.html">Git Server</a> or <a href="/html/index.html">Wiki</a>.
              </p>
              <input type="submit" value="Donate" className="btn btn-primary"/>
            </form>
          </footer>
        );
    }
}

export default Footer;
