import { act} from '@testing-library/react'
import {shallow} from "enzyme";

import {
        checkValidFields,
        useFormFields
} from "utils/utils"

const mountReactHook = (hook: any) => {
  const Component = ({ children }: any) => children(hook());
  const componentHook = {};
  let componentMount;

  act(() => {
    componentMount = shallow(
      <Component>
        {(hookValues: any) => {
          Object.assign(componentHook, hookValues);
            return null;
        }}
      </Component>
    );
  });
    return { componentMount, componentHook };
};

describe("utils/utils", () => {
        describe("useFormFields", () => {
                let setupComponent: any;
             beforeEach(() => {
                setupComponent = mountReactHook(useFormFields);
             })
           it("test if useFormFields sets the fields", () =>{
           const hook = setupComponent.componentHook;
           hook[1]({
                   target: {id: "talent"},
                   currentTarget: {value: 3,validity: {valid: true}}
           })
           expect(hook[0]).toEqual({ talent: { content: 3, status: true } })
          })
       })
        describe("checkValidFields", () => {
                it("return false if a field is false", () => {
                        const initialState = { 
                                1: {content: "choco", status:true},
                                2: {content: "pablo", status: false},
                                3: {content: "marco", status: false}
                        }
                        expect(checkValidFields(initialState)).toEqual(false);
                })
                it("return true if a field all fields are true", () => {
                        const initialState = { 
                                1: {content: "choco", status:true},
                                2: {content: "pablo", status: true},
                                3: {content: "marco", status: true}
                        }
                        expect(checkValidFields(initialState)).toEqual(true);
                })
        });
})
