import React from 'react';
import { Link } from 'react-router';

function Discussion(props) {
  return (
    <div id="discussion">
      <dl className="dl-horizontal">
        <dt>Discussion</dt>
        <DiscussionItem user="Adrian Demian" when="4 days ago" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."/>
        <DiscussionItem user="Markus Döring" when="12 days ago" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."/>
        <DiscussionItem user="Herbert Schmidt" when="2016-07-21" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."/>

        <dd><textarea name="comment" cols="5" className="form-control" placeholder="Leave a comment ..." /></dd>
      </dl>

    </div>
  )
}

function DiscussionItem(props) {
  return (
    <dd>
      <blockquote className="comment">
        <p>{props.text}</p>
        <footer className="blockquote-footer">{props.when} by <Link to="">{props.user}</Link></footer>
      </blockquote>
    </dd>
  )
}

DiscussionItem.propTypes = {
  text: React.PropTypes.string,
  when: React.PropTypes.string,
  user: React.PropTypes.string,
};

export default Discussion;
