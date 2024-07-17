import { yupResolver } from "@hookform/resolvers/yup";
import { Inter } from "next/font/google";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

const inter = Inter({ subsets: ["latin"] });

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
});

interface FormValues {
  name: string;
  email: string;
  phone: string;
}

export default function ContactCard({ languages }: { languages: any }) {
  const contact = languages.page.default.contact;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler: SubmitHandler<FormValues> = (data) => {
    reset();
  };

  return (
    <div className="flex flex-col w-full 2xl:h-[calc(100vh-165px)] justify-center items-center mx-4 md:mx-0">
      <div className="flex flex-col justify-center items-center w-full mb-14 ">
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
          onSubmit={handleSubmit(onSubmitHandler)}
          className="flex flex-col gap-4 max-w-[488px] w-full"
        >
          <input
            className="w-full bg-[#151412] border border-[#302F2D] rounded-sm py-[12px] px-[15px] pt-4 "
            {...register("name")}
            placeholder={contact.completeName}
            type="text"
            required
          />

          <input
            className="w-full bg-[#151412] border border-[#302F2D] rounded-sm py-[12px] px-[15px] pt-4 "
            {...register("email")}
            placeholder={contact.email}
            type="text"
            required
          />

          <input
            className="w-full bg-[#151412] border border-[#302F2D] rounded-sm py-[12px] px-[15px] pt-4 "
            {...register("phone")}
            placeholder={contact.phone}
            type="text"
            required
          />

          <button
            type="submit"
            className="w-full h-[48px] bg-[#A06A08] font-bold"
          >
            {contact.send}
          </button>
        </form>
      </div>
    </div>
  );
}
