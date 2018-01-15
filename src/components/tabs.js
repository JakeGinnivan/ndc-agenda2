import * as React from "react";

export const TabHeader = ({
    selectedTab,
    currentTabIndex,
    header,
    onClick
}) => (
    <div
        style={{
            display: "inline-block",
            fontSize: "6rem",
            margin: "0 20px",
            textDecoration:
                selectedTab === currentTabIndex
                    ? "underline"
                    : undefined
        }}
        onClick={onClick}
    >
        {header}
    </div>
);
export class Tabs extends React.Component {
    state = { selectedTab: 0 };

    render() {
        const tabData = this.props.tabs[
            this.state.selectedTab
        ];
        return (
            <React.Fragment>
                {this.props.tabs.map((tab, index) => (
                    <TabHeader
                        currentTabIndex={index}
                        header={tab.header}
                        onClick={() =>
                            this.setState({
                                selectedTab: index
                            })
                        }
                        selectedTab={this.state.selectedTab}
                    />
                ))}
                {tabData &&
                    this.props.renderTab(tabData.data)}
            </React.Fragment>
        );
    }
}
