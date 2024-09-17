import axios from "axios";
import { useFormik } from "formik";
import { Inter } from "next/font/google";
import { useState } from "react";
import * as yup from "yup";

const inter = Inter({ subsets: ["latin"] });

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
});

interface FormValues {
  name: string;
  email: string;
  phone: string;
}

export default function ContactCard({ languages }: { languages: any }) {
  const contact = languages.page.default.contact;
  const [submitted, setSubmitted] = useState(false);
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        console.log(values);
        await axios.post(
          `https://backend.mailfy.com/v1/contacts`,
          {
            name: values.name,
            email: values.email,
            phone: values.phone,
            listId: "66743e5fd0dea16e07b0d532",
          },
          {
            headers: {
              "api-key": "/rvMFbNAgfiwi2sI+VBF6TPAot4=",
            },
          }
        );
        setSubmitted(true);
        formik.resetForm();
      } catch (error) {
        console.error("Submission error:", error);
      }
    },
  });

  return (
    <div className="flex flex-col w-full 2xl:h-[calc(100vh-165px)] justify-center items-center mx-4 md:mx-0">
      <div className="flex flex-col justify-center items-center w-full mb-14">
        <p className="text-[#C89305] font-bold text-[14px] mt-4 uppercase">
          {contact.topText}
        </p>
        <p className="text-[30px] md:text-[40px] mb-[20px]">{contact.title}</p>

        <p
          className={`max-w-[510px] text-[16px] mb-[64px] text-center ${inter.className}`}
        >
          {contact.subtitle}
        </p>

        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-4 max-w-[488px] w-full"
        >
          <input
            className="w-full bg-[#151412] border border-[#302F2D] rounded-sm py-[12px] px-[15px] pt-4 "
            id="name"
            name="name"
            onChange={formik.handleChange}
            placeholder={contact.completeName}
            type="text"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          ) : null}

          <input
            id="email"
            name="email"
            onChange={formik.handleChange}
            className="w-full bg-[#151412] border border-[#302F2D] rounded-sm py-[12px] px-[15px] pt-4 "
            placeholder={contact.email}
            type="text"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}

          <input
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            className="w-full bg-[#151412] border border-[#302F2D] rounded-sm py-[12px] px-[15px] pt-4 "
            placeholder={contact.phone}
            type="text"
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-500 text-sm">{formik.errors.phone}</div>
          ) : null}

          <button
            disabled={submitted}
            type="submit"
            className="w-full h-[48px] bg-[#A06A08] font-bold disabled:opacity-65"
          >
            {contact.send}
          </button>
        </form>

        {submitted && (
          <div className="text-center text-[#C89305] text-[20px] mb-[20px] mt-6 font-medium">
            Form sent successfully! ✨
          </div>
        )}
      </div>
    </div>
  );
}
