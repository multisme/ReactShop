import { mount } from "enzyme";
import { Elements } from "@stripe/react-stripe-js";

import StripeCheckoutForm from "features/buy/StripeCheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { MemoryRouter } from "react-router-dom";

describe("StripeCheckoutForm", () => {
  const stripePromise = loadStripe(
    "pk_test_esdk3EP8hqcjKThBW7kK36Vv00Ah7Cskxb"
  );
  let stripeMock: any;
  beforeEach(() => {
    const elementMock = {
      mount: jest.fn(),
      destroy: jest.fn(),
      on: jest.fn(),
      update: jest.fn(),
    };
    const elementsMock = {
      create: jest.fn().mockReturnValue(elementMock),
    };
    stripeMock = {
      elements: jest.fn().mockReturnValue(elementsMock),
      createToken: jest.fn(),
      createSource: jest.fn(),
      createPaymentMethod: jest.fn(),
      handleCardPayment: jest.fn(),
      handleCardSetup: jest.fn(),
    };

    window.Stripe = jest.fn().mockReturnValue(stripeMock);
  });
  it("checks that the total is correct", () => {
    const component = mount(
      <MemoryRouter>
        <Elements stripe={stripePromise}>
          <StripeCheckoutForm total={42} />
        </Elements>
      </MemoryRouter>
    );
    const button = component.find('button[type="submit"]');
    expect(button.text()).toEqual("Pay 42€");
    expect(component).toMatchSnapshot();
  });
  it("goes to ThanksPage page if paiement succeed", () => {
    stripeMock.createPaymentMethod.mockReturnValue({
      error: null,
      paymentMethod: jest.fn(),
    });
    const component = mount(
      <MemoryRouter>
        <Elements stripe={stripePromise}>
          <StripeCheckoutForm total={42} />
        </Elements>
      </MemoryRouter>
    );
    const button = component.find('button[type="submit"]').simulate("click");
    expect(stripeMock.createPaymentMethod).toHaveBeenCalled();
  });
  it("goes to ErrorPaiement page if paiement succeed", () => {
    const component = mount(
      <MemoryRouter>
        <Elements stripe={stripePromise}>
          <StripeCheckoutForm total={42} />
        </Elements>
      </MemoryRouter>
    );
    const button = component.find('button[type="submit"]').simulate("click");
  });
});
