import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      date: ' September 2022- present',
      title: 'TREASURER & MEDIA COORDINATOR| Somali Student Association (SSA)    ',
      description: [
        "Organized and promoted 3+ mentorship events, connecting members with industry professionals and boosting engagement by 50% across SSA platforms."
      ],
      expanded: false,
    },
    {
      date: '     June 2022 – Present',
      title: 'HEAD COACH | KBA (Khalid Bin Walid Basketball League), Toronto     ',
     description: [
  "Led U16 basketball team in skill development, game strategy, and leadership training; coached team to playoffs and improved player retention and engagement through structured practice plans and mentorship."
],
      expanded: false,
    },
    {
      date: '     March 2023 – Present',
      title: 'ASSISTANT COACH | Dixson FC Soccer Club, Toronto          ',
     description: [
  "Supported training and development of U14 players by assisting in planning drills, managing practices, and providing on-field guidance; contributed to a 25% improvement in team performance over the season."
]
,
      expanded: false,
    },
  ]);

  const handleItemClick = (index) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event, idx) => {
        if (idx === index) {
          return { ...event, expanded: !event.expanded };
        }
        return event;
      });
      return updatedEvents;
    });
  };

  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div
          className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
          key={index}
          onClick={() => handleItemClick(index)}
        >
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            {event.expanded ? (
              <div>
                {event.description.map((desc, descIndex) => (
                  <p key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </div>
            ) : (
              <>
                <div className="more">
                  <p>Click for more</p>
                </div>
                <div className="date">{event.date}</div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
