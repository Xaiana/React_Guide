import Week from './Week.js';
import Header from './Header.js';

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptionValue: '',
      urlValue: '',
      week1: [
        {
          description: 'Js-assessment',
          url: 'https://github.com/rmurphey/js-assessment'
        },
        {
          description: 'DevDocs',
          url: 'http://devdocs.io/offline'
        },
        {
          description: 'funfunfunction: Higher Order Functions',
          url: 'https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84'
        },
        {
          description: 'funfunfunction: Var Let Const',
          url: 'https://www.youtube.com/watch?v=sjyJBL5fkp8'
        },
        {
          description: 'funfunfunction: Arrow Functions',
          url: 'https://www.youtube.com/watch?v=6sQDTgOqh-I'
        },
        {
          description: 'Top City for Woman in Tech',
          url: 'http://tech.co/dc-is-the-top-city-for-women-in-tech-2016-02'
        },
        {
          description: 'Surviving the Framework Hype Cycle',
          url: 'https://www.youtube.com/watch?time_continue=17&v=O6TtfK9gGvA'
        },
        {
          description: 'Javascript Scene: var let const',
          url: 'https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.ditexjhpx'
        },
        {
          description: 'Understanding the Weird Parts',
          url: 'https://www.udemy.com/understand-javascript/?couponCode=OCT1202&siteID=Kzz30XxWgII-loSkKDchAkcHj_nnwiIBHQ&LSNPUBID=Kzz30XxWgII'
        },
        {
          description: 'ECMAScript 6: New Features',
          url: 'http://es6-features.org/'
        },
        {
          description: 'Essential ES6',
          url: 'https://www.youtube.com/watch?v=CozSF5abcTA'
        },
        {
          description: 'ES6 Cheatsheet',
          url: 'https://www.youtube.com/watch?v=AfWYO8t7ed4'
        },
        {
          description: 'ES6 Cheatsheet #2',
          url: 'https://www.youtube.com/watch?v=LmL0Gh193M0'
        },
        {
          description: 'ES6 New Features Tutorial 1',
          url: 'https://www.youtube.com/watch?v=ZJZfIw3P8No'
        },
        {
          description: 'ES6 interactive guide',
          url: 'http://stack.formidable.com/es6-interactive-guide/#/'
        }
      ],
      week2: [
        {
          description: 'Forget Click Bait: Javascript Job Market',
          url: 'https://medium.com/javascript-scene/forget-the-click-bait-here-s-what-the-javascript-job-market-really-looks-like-in-2016-ddfe0d39b467#.gfrkg54a1'
        },
        {
          description: 'Airbnb/Javascript',
          url: 'https://github.com/airbnb/javascript'
        },
        {
          description: 'Egghead: Learn ES6',
          url: 'https://egghead.io/courses/learn-es6-ecmascript-2015'
        },
        {
          description: 'Junior Dev Contract Rate/Google Forums',
          url: 'https://groups.google.com/forum/#!topic/pdxruby/GfmtqzI9YqA'
        },
        {
          description: 'Learn Four Semesters of Computer Science in 5 Hours',
          url: 'https://frontendmasters.com/courses/computer-science/'
        },
        {
          description: 'How to Save the Princess in 8 Programming Languages',
          url: 'https://toggl.com/programming-princess'
        },
        {
          description: 'Git Magic Intro',
          url: 'http://www-cs-students.stanford.edu/~blynn/gitmagic/'
        },
        {
          description: 'Thinking in React',
          url: 'https://facebook.github.io/react/docs/thinking-in-react.html'
        },
        {
          description: 'Atom Keyboard Shortcuts',
          url: 'https://github.com/nwinkler/atom-keyboard-shortcuts'
        },
        {
          description: 'Thinking in React',
          url: 'https://facebook.github.io/react/docs/thinking-in-react.html'
        },
        {
          description: 'React JS Tutorial',
          url: 'https://youtu.be/fd2Cayhez58'
        }
      ],
      week3: [
        {
          description: 'React on ES6',
          url: 'https://babeljs.io/blog/2015/06/07/react-on-es6-plus'
        },
        {
          description: 'Learning How to Learn',
          url: 'https://www.coursera.org/learn/learning-how-to-learn'
        },
        {
          description: 'Our First 50,000 Stars - React Blog',
          url: 'https://facebook.github.io/react/blog/2016/09/28/our-first-50000-stars.html'
        }
      ]
    }
    this.addLink = this.addLink.bind(this);
  }

  addLink(resource, destination) { //resource is the package containing the new link object pair, destination is the week id to add to.
    const _destination = this.state[destination]; //[destination] is in brackets because it's value is a string
    _destination.push(resource) ;
    this.setState({[destination] : _destination});
  }

  render() {
    return (
      <div>
        <Header header={"React Journal"} />
        <Week
          id='week1'
          title={'Week 1'}
          week={this.state.week1}
          addLink={this.addLink}
        />
        <Week
          id='week2'
          title={'Week 2'}
          week={this.state.week2}
          addLink={this.addLink}
        />
        <Week
          id='week3'
          title={'Week 3'}
          week={this.state.week3}
          addLink={this.addLink}
        />
      </div>
    );
  }
}



export default App;
