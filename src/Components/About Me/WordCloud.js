import React, { useEffect } from 'react'
import TagCloud from 'TagCloud';


const container = '.content';
const texts = [
  'JavaScript',
  'CSS3', 'React', 'Java',
  'Wordpress', 'SpringBoot', 'SQL',
  'Linux', 'NodeJS',
];
const options = {
  radius: 200,
  // animation speed
  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'fast',
  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  // interact with cursor move on mouse out
  keep: true
};

const WordCloud = () => {
  // to render wordcloud each time the page is reloaded
  useEffect(() => {
    TagCloud(container, texts, options);
  },[])

  return (
    <div className='main'>
      <span className="content"></span>
    </div>
  )
}

export default WordCloud;