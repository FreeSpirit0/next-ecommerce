import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useUser } from "@/contexts/UserContext";

interface FormError {
  email: string;
}

const Account = () => {
  const { username, setUsername } = useUser();

  if (username) {
    return (
      <div className="flex flex-col gap-10 mt-10">
        <p className="text-3xl text-center">Welcome back {username}</p>
        <button
          className="w-fit place-self-center p-4 rounded-full bg-red-500 hover:bg-red-700 text-white"
          onClick={() => setUsername("")}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-center h-screen">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setUsername(values.email);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="grow flex flex-col items-center max-w-3xl">
            <div>
              <label className="mt-5 block">Email</label>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="p-4 mt border"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label className="mt-5 block">Password</label>
              <Field
                type="password"
                placeholder="Password"
                name="password"
                className="p-4 border"
              />
              <ErrorMessage
                name="password"
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
  );
};

export default Account;
