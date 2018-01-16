import * as React from "react";
import { Link, withRouter, Route } from "react-router-dom";

export const TabHeader = ({
    selectedTab,
    currentTabIndex,
    header,
    onClick,
    path
}) => (
    <Link
        to={`${path}/${currentTabIndex}`}
        style={{
            display: "inline-block",
            fontSize: "6rem",
            margin: "0 20px",
            textDecoration:
                selectedTab === currentTabIndex
                    ? "underline"
                    : undefined
        }}
    >
        {header}
    </Link>
);

export const Tabs = withRouter(
    class TabsComponent extends React.Component {
        renderTabs = routeProps => {
            const selectedTab =
                routeProps.match.params.selectedTab || 0;

            const contentData = this.props.tabs[
                selectedTab
            ];

            return (
                <React.Fragment>
                    {this.props.tabs.map((tab, index) => (
                        <TabHeader
                            key={tab.header}
                            path={this.props.match.url}
                            currentTabIndex={index}
                            header={tab.header}
                            selectedTab={selectedTab}
                        />
                    ))}
                    {contentData &&
                        this.props.renderTab(
                            contentData.data
                        )}
                </React.Fragment>
            );
        };

        render() {
            const currentPath = this.props.match.url;

            return (
                <Route
                    path={`${currentPath}/:selectedTab?`}
                    render={this.renderTabs}
                />
            );
        }
    }
);
