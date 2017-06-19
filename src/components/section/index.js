const React = require('react');

const About = require('./about');
const Work = require('./work');
const Footer = require('./footer');

const Section = React.createClass({
    render: function () {
        const skillsContent = {
            skills: this.props.skills,
            languages: this.props.languages
        };

        return (
            <div>
                <About content={this.props.basics}/>
                <Work content={this.props.work}/>
                <Footer content={this.props.basics}/>
            </div>
        );
    }
});

module.exports = Section;
