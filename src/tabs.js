import * as React from 'react'
import * as propTypes from 'prop-types'

export const TabHeader = ({ onSelect, selected, children }) => (
    <div
        onClick={onSelect}
        style={{ fontWeight: selected ? 'bold' : 'normal' }}
    >
        {children}
    </div>
)

export class Tabs extends React.Component {
    state = { selectedIndex: 0 }

    render() {
        const contentData = this.props.tabs[this.state.selectedIndex]

        return (
            <React.Fragment>
                <div>
                    {this.props.tabs.map((tab, index) => (
                        <TabHeader
                            selected={index === this.state.selectedIndex}
                            onSelect={() =>
                                this.setState({ selectedIndex: index })
                            }
                        >
                            {tab.header}
                        </TabHeader>
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
    tabs: propTypes.arrayOf(
        propTypes.shape({
            header: propTypes.string.isRequired,
            data: propTypes.object.isRequired
        })
    ),
    renderData: propTypes.func.isRequired
}
