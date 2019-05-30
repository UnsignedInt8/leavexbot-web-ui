import React from 'react';
import logo from './logo.svg';
import './App.scss';
import './styles/default.scss';
import url from 'url';
import query from 'querystring';

export default class App extends React.Component {

  render() {
    let data = url.parse(window.location.href);
    let { n, s, m } = query.parse(data.query || '') as { n: string, s: string, m: string };

    return (
      <div id='container' className='default'>
        <div id='info'>
          <img id='avatar' src="https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg" alt="" />
          <div id='person'>
            <div id='name'>{n}</div>
            <div id='signature'>{s}</div>
          </div>
        </div>

        <div id='message'>
          <div>
            {m}
          </div>

          <div id='timestamp'>
            {new Date().toLocaleString()}
          </div>
        </div>

      </div>
    );
  }
}