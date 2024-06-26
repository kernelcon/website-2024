import React, { Component } from 'react';

import ocConfig from 'ocConfig';
import './About.scss';


class Organizers extends Component {
  static displayName = 'Organizers';

  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {};
  static defaultProps = {};

  getImage(ele) {
    const imageName =  ele.image ? ele.image : 'kernel.png';
    const imgUrl = require(`../../static/images/oc/${imageName}`);

    return imgUrl;
  }

  render() {

    const oc = ocConfig.map((ele, idx) => {
      const people = ele.people.sort((a, b) => {
        return a.name.localeCompare(b.name)
      });

      const display = people.map((el, idx) => {
        const imgUrl = this.getImage(el);
        return (
          <div className='oc-member'
            key={el.name}>
            <div className='oc-member-box'>
              <div className='oc-member-img'>
                <img src={imgUrl} height="70" alt={el.name}/>
              </div>
              <div className='oc-text-section'>
                <div className='oc-name'>{el.name}</div>
                <div className='oc-title'>{el.title}</div>
                {el.twitter && <a className='oc-twitter' target='_blank' rel='noopener noreferrer' href={`https://twitter.com/${el.twitter}`}>{`@${el.twitter}`}</a>}
                {el.mastodon && <a className='oc-twitter' target='_blank' rel='noopener noreferrer' href={`${el.mastodon_url}`}>{`@${el.mastodon}`}</a>}
              </div>
            </div>
          </div>
        );
      });

      return (
        <div key={ele.idx}>
          <div className='tab-title'>
            {ele.heading}
          </div>
          {ele.subHeading && <div className='tab-subtitle'>
            {ele.subHeading}
            <br />
            <br />
          </div>}         
          <div className='oc-list'>
            {display}
          </div>
        </div>
      );
    }); 


    return (
      <div className='organizers'>
        {oc}
      </div>
    );
  }
}

export default Organizers;