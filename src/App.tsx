import React from 'react';
import './App.scss';
import './styles/default.scss';
import './styles/wechat.scss';
import url from 'url';
import query from 'querystring';

export default class App extends React.Component {

  render() {
    let data = url.parse(window.location.href);
    /**
     * n - nickname
     * s - signature
     * m - message
     * t - css style
     * p - province
     * c - city
     */
    let { n, s, m, t, p, c } = query.parse(data.query || '') as { n: string, s?: string, m: string, t?: string, p?: string, c?: string };

    return (
      <div id='container' className={t || 'default'}>
        <div id='info'>
          <img id='avatar' src="https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg" alt="" />
          <div id='person'>
            <div id='name'>{n}</div>
            <div id='signature'>{`${s || ''} ${p || ''} ${c || ''}`}</div>
          </div>
        </div>

        <div id='message'>
          <div>
            {m}
          </div>

          <div id='timestamp'>
            {`${new Date().toLocaleString()} - LeaveXchat`}
          </div>
        </div>

      </div>
    );
  }
}