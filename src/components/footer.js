import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
          <footer className="container">
            <!--
            <p>
              <a href="https://github.com/sPyOpenSource"><img className="avatar" alt="GitHub" src="img/social_network_icons/github.png"/></a>
              <a href="https://twitter.com/xuyi_wang"><img className="avatar" alt="Twitter" src="img/social_network_icons/twitter2.png"/></a>
              <a href="https://soundcloud.com/xuyi-wang"><img className="avatar" alt="SoundCload" src="img/social_network_icons/soundcload2.png"/></a>
            </p>
            -->
            <p>
              You can also use following resources: <a href="/git/index.html">Git Server</a> and <a href="/html/index.html">Wiki</a>.
            </p>
          </footer>
        );
    }
}

export default Footer;
