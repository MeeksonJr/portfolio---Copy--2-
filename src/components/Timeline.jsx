import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../styled/Timeline.css';

const timelineItems = [
  { date: '2024-01-01', content: 'Started learning React.' },
  { date: '2024-03-01', content: 'Built my first app.' },
  { date: '2024-05-15', content: 'Published my app.' },
  // Add more items as needed
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const items = timelineRef.current.querySelectorAll('.timeline-item');
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isInView = rect.top + rect.height * 0.15 < windowHeight && rect.top > 0;

        if (isInView) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id='timeline' className="timeline-section">
      <h1 className="timeline-title">My Journey</h1>
      <div className="timeline" ref={timelineRef}>
        <div className="timeline-inner">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index === activeIndex ? 'active' : ''}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="date">{item.date}</div>
              <div className="content">{item.content}</div>
            </motion.div>
          ))}
          {/* Duplicate items for continuous scroll effect */}
          {timelineItems.map((item, index) => (
            <motion.div
              key={`duplicate-${index}`}
              className={`timeline-item ${index === activeIndex ? 'active' : ''}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="date">{item.date}</div>
              <div className="content">{item.content}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
