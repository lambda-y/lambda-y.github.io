import React from 'react';
import Hero from '../components/Hero'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import events from "./events.json";


function timelinePage(props) {

    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
            test
            <VerticalTimeline>
                {events.map(event => (
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={event.date}
                    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                    >
                <h3
                className="vertical-timeline-element-title"
                dangerouslySetInnerHTML={{ __html: event.event }}
                />
                </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
      
        </div>
    );
}

export default timelinePage;