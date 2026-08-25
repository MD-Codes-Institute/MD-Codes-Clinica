import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { contentFormEmail } from "../data/contentFormEmail";
import { useMotionValue, useTransform, useSpring, motion } from "motion/react";

const schema = z.object({
  name: z.string().min(2, "Nome muito curto.").max(30, "Nome muito longo."),
  email: z.email("E-mail invalido"),
  phone: z
    .string()
    .min(10, "Número de telefone inválido!")
    .max(11, "Número de Telefone muito longo")
    .regex(/^[1-9]{2}9?\d{8}$/, "O número de telefone não esta conforme os requisitos"),
  message: z.string().min(10, "Por favor, insira no minímo 10 caracteres para enviar  a mensagem."),
});

function FormEmail() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const [disabledBtn, setDisabledBtn] = useState(false);
  const [btnValue, setBtnValue] = useState("Enviar");

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  const x = useMotionValue(0);
  const progressWidth = useTransform(x, [0, 70, 100], ["0%", "70%", "100%"]);
  const smoothWidth = useSpring(progressWidth, { stiffness: 60, damping: 20 });

  const onSubmit = async (form) => {
    try {
      setDisabledBtn(true);
      x.set(70);
      setBtnValue("Enviando...");

      emailjs.init({ publicKey: import.meta.env.VITE_EMAILJS_PUBLICKEY });
      const sendEmail = await emailjs.send(serviceID, templateID, form);
      console.log(sendEmail.status);
      x.set(100);
      setBtnValue("Enviado com sucesso!");
      setTimeout(() => {
        reset();
        x.set(0);
        setBtnValue("Enviar");
        setDisabledBtn(false);
      }, 2000);
    } catch (error) {
      alert(
        "Não foi possível enviar o seu e-mail, estamos com problemas internos e logo resolveremos",
      );
      console.log(error);
      x.set(0);
      setBtnValue("Enviar");
      setDisabledBtn(false);
    }
  };
  return (
    <div className=" flex w-[90%] xl:w-[50%] xl:h-[80vh] max-h-screen justify-center items-center py-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col items-center justify-center h-full gap-3 relative"
      >
        {contentFormEmail.map((item, i) => (
          <div key={item.id} className="w-full flex flex-col items-center">
            {item.id !== "message" && (
              <>
                <label htmlFor={item.id} className="text-white font-bold w-[90%]" key={i}>
                  {item.label}
                </label>
                <input
                  key={item.id}
                  id={item.id}
                  {...register(item.id)}
                  type={item.type}
                  style={item.id === "email" ? { textTransform: "lowercase" } : undefined}
                  inputMode={item.inputMode ?? "text"}
                  className={`w-[90%] outline-none px-2 py-2 text-white focus:border-b-[#ffcc66] transition-colors duration-200 ${
                    errors[item.id] ? "border-b border-red-500  focus:ring-red-500" : "border-b"
                  }`}
                />
                {errors[item.id] && (
                  <span className="text-red-600 mt-1">{errors[item.id].message}</span>
                )}
              </>
            )}
            {item.id === "message" && (
              <>
                <label htmlFor={item.id} className="w-[90%] font-bold mt-5">
                  {item.label}
                </label>
                <textarea
                  id={item.id}
                  {...register(item.id)}
                  className={`text-white font-bold field-sizing-content min-h-30 border rounded-2xl w-[90%] mt-5 px-5 py-2 outline-none focus:border-[#ffcc66] focus:shadow-[0px_0px_10px_#ffcc66] transition-shadow duration-200 ${
                    errors[item.id] ? "border-b border-red-500  focus:ring-red-500" : "border-b"
                  }`}
                />
                {errors[item.id] && (
                  <span className="text-red-600 mt-1">{errors[item.id].message}</span>
                )}
              </>
            )}
          </div>
        ))}
        {/* button para enviar o forms */}
        <div className="relative overflow-hidden border border-amber-200 py-1 rounded-2xl w-50 max-w-50 transition-shadow duration-300 hover:shadow-[0px_0px_10px_#ffcc66] mt-5 min-h-8">
          <input
            type="submit"
            value={btnValue}
            disabled={disabledBtn}
            className="font-bold relative bg-transparent text-center outline-none cursor-pointer z-50 min-w-full min-h-full"
          />
          <motion.div
            style={{
              width: smoothWidth,
              top: 0,
              left: 0,
              bottom: 0,
              position: "absolute",
              backgroundColor: "#ffcc66dd",
              pointerEvents: "none",
            }}
            className="rounded-xl"
          />
        </div>
      </form>
    </div>
  );
}

export default FormEmail;
