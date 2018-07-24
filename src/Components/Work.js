import React from 'react'
import styled from 'styled-components'

const Work = (props) => (
    <div>
        <div>{props.title}</div>
        <div>{props.date}</div>
        {props.description.map((point, i) => {
            return <div key={i} >{point}</div>
        })}
    </div>
)

export default Work