import React, { Component } from 'react'
import { Section, Title, SectionButton } from '../../utils'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { styles } from '../../utils'

export default class QuickInfo extends Component {
    render() {
        return (
            <Section>
                <Title message="let us tell you" title="our mission"/>
                <QuickInfoWrapper>
                    <p className="text">
                    This quick start is intended for intermediate to advanced developers. For a gentler intro to Gatsby
                    This quick start is intended for intermediate to advanced developers. For a gentler intro to Gatsby
                    </p>
                    <Link to="/about/" style={{textDecoration:'none'}}>

                    </Link>
                    <SectionButton style={{margin: '2rem auto'}}>about</SectionButton>
                </QuickInfoWrapper>
            </Section>
        )
    }
}

const QuickInfoWrapper  = styled.div`
width: 90%;
margin: 2rem auto;
.text{
    line-height:1.5rem;
    color:${styles.colors.mainGrey};
    word-spacing: 0.2rem;
    font-size:0.8rem;
}
@media (min-width:768px){
    width:60%;
    text-align:center;
}
`
 