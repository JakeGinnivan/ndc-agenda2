import * as React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { MemoryRouter, Link } from 'react-router-dom'
import { Tabs } from './tabs'
import { setTimeout } from 'timers'
import { Route } from 'react-router'

configure({ adapter: new Adapter() })

it('renders without params', () => {
    const wrapper = mount(
        <MemoryRouter>
            <Tabs
                tabs={[
                    { header: 'Tab1', data: 'tab 1 data' },
                    { header: 'Tab2', data: 'tab 2 data' }
                ]}
                renderData={data => <div id="result">{data}</div>}
            />
        </MemoryRouter>
    )

    expect(wrapper.find('#result').text()).toBe('tab 1 data')
})

it('can switch tabs', async () => {
    const wrapper = mount(
        <MemoryRouter>
            <Tabs
                tabs={[
                    { header: 'Tab1', data: 'tab 1 data' },
                    { header: 'Tab2', data: 'tab 2 data' }
                ]}
                renderData={data => <div id="result">{data}</div>}
            />
        </MemoryRouter>
    )

    const tab2Link = wrapper
        .find(Link)
        .filterWhere(wrapper => wrapper.text() === 'Tab2')
    tab2Link.simulate('click', { button: 0 })

    await new Promise(resolve => setTimeout(resolve))

    expect(wrapper.find('#result').text()).toBe('tab 2 data')
})

it('switching tabs updates link', async () => {
    let currentLocation
    const wrapper = mount(
        <MemoryRouter>
            <Tabs
                tabs={[
                    { header: 'Tab1', data: 'tab 1 data' },
                    { header: 'Tab2', data: 'tab 2 data' }
                ]}
                renderData={data => (
                    <div id="result">
                        {data}
                        <Route
                            render={rp =>
                                (currentLocation = rp.location.pathname)
                            }
                        />
                    </div>
                )}
            />
        </MemoryRouter>
    )

    const tab2Link = wrapper
        .find(Link)
        .filterWhere(wrapper => wrapper.text() === 'Tab2')
    tab2Link.simulate('click', { button: 0 })

    await new Promise(resolve => setTimeout(resolve))

    expect(currentLocation).toBe('/1')
})
