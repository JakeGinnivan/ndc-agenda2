import * as React from 'react'
import * as propTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import * as glamorous from 'glamorous'
import { withRouter, Route } from 'react-router'

export const TabHeader = ({ path, index, children }) => (
    <NavLink to={`${path}/${index}`}>{children}</NavLink>
)

export const Tabs = withRouter(
    class TabsComponent extends React.Component {
        render() {
            const currentPath = this.props.match.url

            return (
                <Route
                    path={`${currentPath}/:selectedTab?`}
                    render={routeProps => {
                        const contentData = this.props.tabs[
                            routeProps.match.params.selectedTab || 0
                        ]

                        return (
                            <React.Fragment>
                                <div>
                                    {this.props.tabs.map((tab, index) => (
                                        <TabHeader
                                            path={this.props.match.url}
                                            index={index}
                                        >
                                            {tab.header}
                                        </TabHeader>
                                    ))}
                                </div>
                                <div>
                                    {contentData &&
                                        this.props.renderData(contentData.data)}
                                </div>
                            </React.Fragment>
                        )
                    }}
                />
            )
        }
    }
)

Tabs.propTypes = {
    tabs: propTypes.arrayOf(
        propTypes.shape({
            header: propTypes.string.isRequired,
            data: propTypes.object.isRequired
        })
    ),
    renderData: propTypes.func.isRequired
}
