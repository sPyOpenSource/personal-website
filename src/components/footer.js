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
            <p>
              You can also use following resources: <a href="/ai.html">AI Demo</a>, <a href="/git/index.html">Git Server</a> or <a href="/html/index.html">Wiki</a>.
            </p>
          </footer>
        );
    }
}

export default Footer;
