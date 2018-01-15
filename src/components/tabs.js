import * as React from "react";
import { Link } from "react-router-dom";
export const TabHeader = ({
    selectedTab,
    currentTabIndex,
    header,
    onClick
}) => (
    <Link
        to={`/agenda/${currentTabIndex}`}
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
export class Tabs extends React.Component {
    render() {
        const tabData = this.props.tabs[
            this.props.selectedTab
        ];
        return (
            <React.Fragment>
                {this.props.tabs.map((tab, index) => (
                    <TabHeader
                        currentTabIndex={index}
                        header={tab.header}
                        selectedTab={this.props.selectedTab}
                    />
                ))}
                {tabData &&
                    this.props.renderTab(tabData.data)}
            </React.Fragment>
        );
    }
}
