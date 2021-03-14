import React from 'react';
import Hero from '../components/Hero'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import events from "./events.json";


function TimelinePage(props) {

    return (
        <div style={{ background: "#ccc"}}>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
            <VerticalTimeline>
                {events.map(event => (
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={event.date}
                    iconStyle={{ background: "rgb(33, 150, 0)", color: "#111" }}
                    >
                <h3
                className="vertical-timeline-element-title"
                dangerouslySetInnerHTML={{ __html: event.event }}
                />
                <h6
                    className="vertical-timeline-element-text"
                    dangerouslySetInnerHTML={{__html: event.description}}
                />
                <h6
                    className="vertical-timeline-element-text"
                    dangerouslySetInnerHTML={{__html: event.list}}
                />
                
                </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
      
        </div>
    );
}

export default TimelinePage;