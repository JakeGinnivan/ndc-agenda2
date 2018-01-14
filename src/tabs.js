import * as React from 'react'
import * as propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import * as glamorous from 'glamorous'

export const TabHeader = ({ index, children }) => (
    <NavLink to={`/agenda/${index}`}>{children}</NavLink>
)

export class Tabs extends React.Component {
    render() {
        const contentData = this.props.tabs[this.props.currentDay || 0]

        return (
            <React.Fragment>
                <div>
                    {this.props.tabs.map((tab, index) => (
                        <TabHeader index={index}>{tab.header}</TabHeader>
                    ))}
                </div>
                <div>
                    {contentData && this.props.renderData(contentData.data)}
                </div>
            </React.Fragment>
        )
    }
}

Tabs.propTypes = {
    currentDay: propTypes.number,
    tabs: propTypes.arrayOf(
        propTypes.shape({
            header: propTypes.string.isRequired,
            data: propTypes.object.isRequired
        })
    ),
    renderData: propTypes.func.isRequired
}
