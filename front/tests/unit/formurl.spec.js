import { shallowMount, mount } from "@vue/test-utils";
import FormURL from "../../src/components/FormURL";

describe("FormURL component", () => {
  test("snapshot match", () => {
    const wrapper = shallowMount(FormURL);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("test valid long url", async () => {
    const wrapper = mount(FormURL, {
      data() {
        return {
          formURL: "https://www.google.com/",
          urlshortened: null,
          notification: null,
          copied: null,
          error: "",
        };
      },
    });
    await wrapper.vm.shortenURL();
    expect(wrapper.find("#result span").exists()).toBeTruthy();
    expect(wrapper.find("i.fa-copy").exists()).toBeTruthy();
  });

  test("test null url", async () => {
    const wrapper = mount(FormURL, {
      data() {
        return {
          formURL: null,
          urlshortened: null,
          notification: null,
          copied: null,
          error: "",
        };
      },
    });
    await wrapper.vm.shortenURL();
    expect(wrapper.find("#result span").exists()).toBeTruthy();
    expect(wrapper.find("#result span").text()).toMatch("URL INVALID");
    expect(wrapper.find("i.fa-copy").attributes().style).toBe("display: none;");
  });

  test("test invalid long url", async () => {
    const wrapper = mount(FormURL, {
      data() {
        return {
          formURL: "test",
          urlshortened: null,
          notification: null,
          copied: null,
          error: "",
        };
      },
    });
    await wrapper.vm.shortenURL();
    expect(wrapper.find("#result span").exists()).toBeTruthy();
    expect(wrapper.find("#result span").text()).toMatch("URL INVALID");
    expect(wrapper.find("i.fa-copy").attributes().style).toBe("display: none;");
  });
});
