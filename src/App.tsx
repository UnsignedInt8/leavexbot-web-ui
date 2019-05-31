import React from 'react';
import './App.scss';
import './styles/default.scss';
import './styles/wechat.scss';
import url from 'url';
import query from 'querystring';

export default class App extends React.Component {

  render() {
    let data = url.parse(window.location.href);
    let decoded = Buffer.from(data.query || '', 'base64').toString('utf8');

    /**
     * n - nickname
     * s - signature
     * m - message
     * t - css style
     * p - province
     * c - city
     * a - avatar file name
     */
    let { n, s, m, t, p, c, a } = query.parse(decoded || '') as { n: string, s?: string, m: string, t?: string, p?: string, c?: string, a: string };

    return (
      <div id='container' className={t || 'default'}>
        <div id='info'>
          <img id='avatar' src={`/static/${a}`} alt="" />
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