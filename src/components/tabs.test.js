import * as React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Tabs } from "./tabs";
import { MemoryRouter, Link } from "react-router-dom";

configure({ adapter: new Adapter() });

describe("tabs control", () => {
    it("Renders initial tab", () => {
        const wrapper = mount(
            <MemoryRouter>
                <Tabs
                    tabs={[
                        {
                            header: "Tab1",
                            data: { text: "Tab1" }
                        }
                    ]}
                    renderTab={data => (
                        <div id="contents">{data.text}</div>
                    )}
                />
            </MemoryRouter>
        );

        expect(wrapper.find("#contents").text()).toBe(
            "Tab1"
        );
    });

    it("Can switch to the second tab", async () => {
        const wrapper = mount(
            <MemoryRouter>
                <Tabs
                    tabs={[
                        {
                            header: "Tab1",
                            data: { text: "Tab1" }
                        },
                        {
                            header: "Tab2",
                            data: { text: "Tab2" }
                        }
                    ]}
                    renderTab={data => (
                        <div id="contents">{data.text}</div>
                    )}
                />
            </MemoryRouter>
        );

        const tab2Link = wrapper
            .find(Link)
            .filterWhere(link => link.text() === "Tab2");

        tab2Link.simulate("click", { button: 0 });
    });
});
