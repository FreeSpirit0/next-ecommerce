import Order from "@/components/Order";
import { useCart } from "@/contexts/CartContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";

const Checkout = () => {
  const { items } = useCart();
	const price = (items: Product[]) => {
		return items.reduce((acc, obj) => { return acc + obj.price; }, 0);
	}

  return (
    <div className="grid grid-cols-2">
      <div className="border-r mr-4">
        <h1 className="text-2xl ml-8 mt-8">Your order:</h1>
        <Order products={items} />
        <div className="flex justify-between ml-8 mr-8">
          <span className="text-xl font-bold place-self-start">Total Price:</span>
          <span className="text-xl font-bold place-self-start">{price(items)} Baht</span>
        </div>
      </div>
      <div className="w-screen flex flex-col justify-start">
        <h1 className="text-2xl mt-8">Billing and Shipping:</h1>
        <Formik
          initialValues={{ address: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="grow">
              <div>
                <label className="mt-5 block">Shipping Address</label>
                <Field
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="w-2/6 p-4 mt border"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 bg-blue-500 p-4 rounded-md text-white"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Checkout;
