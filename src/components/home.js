const React = require('react');
const PropTypes = React.PropTypes;

const request = require('superagent');

const Header = require('./header');
const Navigation = require('./navigation');
//const Banner = require('./banner');
const ScrollDown = require('./scrolldown');
const Section = require('./section');
const Loading = require('./loading');

const Home = React.createClass({
    propTypes: {
        route: PropTypes.shape({
            config: PropTypes.shape({
                resumePath: PropTypes.string.isRequired,
                navigation: PropTypes.object.isRequired
            }).isRequired
        }).isRequired
    },

    getInitialState: function () {
        return {
            resume: false
        };
    },

    componentDidMount: function () {
        return request
            .get(this.props.route.config.resumePath)
            .end(function (error, response) {
                return error ? error : this.setState({
                    resume: response.body
                });
            }.bind(this));
    },

    onLoad: function () {
        return (
            <div>
                <Header>
                    <Navigation navigation={this.props.route.config.navigation}/>
                    <ScrollDown/>
                </Header>
                <Section
                    basics={this.state.resume.basics}
                    languages={this.state.resume.languages}/>
            </div>
        );
    },

    beforeLoad: function () {
        return (
            <Loading/>
        );
    },

    render: function () {
        return this.state.resume ? this.onLoad() : this.beforeLoad();
    }
});

module.exports = Home;
