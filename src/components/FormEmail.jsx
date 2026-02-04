import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";

function FormEmail() {
  const [disabledBtn, setDisabledBtn] = useState(false);

  const [btnValue, setBtnValue] = useState("Enviar");
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  const schema = z.object({
    name: z.string().min(2, "Nome muito curto.").max(30, "Nome muito longo."),
    user_email: z.string().email("E-mail invalido"),
    user_number: z
      .string()
      .min(10, "Número de telefone inválido!")
      .max(11, "Número de Telefone muito longo")
      .regex(/^[1-9]{2}9?\d{8}$/, "O número de telefone não esta conforme os requisitos"),
    message: z
      .string()
      .min(
        10,
        "Por favor, insira no minímo 10 caracteres para inserir a mensagem."
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    setDisabledBtn(true);
    setBtnValue("Enviando...");
    emailjs.init({ publicKey: import.meta.env.VITE_EMAILJS_PUBLICKEY });
    emailjs.send(serviceID, templateID, data).then(
      (response) => {
        setBtnValue("Enviado com sucesso!");
        console.log(response.status);
        setTimeout(() => {
          setBtnValue("Enviar");
          setDisabledBtn(false);
        }, 2000);
      },
      (error) => {
        console.log(error);
        alert(
          "Não foi possível enviar o seu e-mail, estamos com problemas internos e logo resolveremos"
        );
        setBtnValue("Enviar");
      }
    );
  };

  return (
    <div className="flex items-center w-[80%] md:w-[50%] h-[80vh] justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-black rounded-3xl shadow-[0px_0px_10px_1px_#fff] w-full h-full flex flex-col justify-center items-center gap-6 md:gap-4"
      >
        <label className="w-[80%] text-start text-xl font-bold">Name:</label>
        <input
          type="text"
          placeholder="Digite o seu nome"
          {...register("name")}
          className="w-[80%] bg-transparent text-white placeholder:text-slate-400 text-md border border-amber-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:shadow-[0px_0px_7px_#FFCC66] hover:border-amber-100 shadow-sm"
        />
        {errors.name && <span>{errors.name.message}</span>}
        <label className="w-[80%] text-start font-bold text-xl">E-mail</label>
        <input
          type="email"
          name="user_email"
          placeholder="Digite o seu e-mail"
          {...register("user_email")}
          className="w-[80%] bg-transparent text-white placeholder:text-slate-400 text-md border border-amber-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:shadow-[0px_0px_7px_#FFCC66] hover:border-amber-100 shadow-sm"
        />
        {errors.user_email && <span>{errors.user_email.message}</span>}
        <label className="w-[80%] text-start font-bold text-xl">Telefone</label>
        <input
          type="number"
          inputMode="numeric"
          placeholder="Digite o seu telefone"
          {...register("user_number")}
          className="w-[80%] bg-transparent text-white placeholder:text-slate-400 text-md border border-amber-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:shadow-[0px_0px_7px_#FFCC66] hover:border-amber-100 shadow-sm"
        />
        {errors.user_number && <span>{errors.user_number.message}</span>}
        <label className="w-[80%] text-start font-bold text-xl">Mensagem</label>
        <textarea
          type="text"
          placeholder="Digite a sua mensagem"
          required
          {...register("message")}
          className="w-[80%] min-h-[10vh] md:min-h-[20vh] bg-transparent text-white placeholder:text-slate-400 text-md border border-amber-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:shadow-[0px_0px_7px_#FFCC66] hover:border-amber-100 shadow-sm field-sizing-content"
        />
        {errors.message && <span>{errors.message.message}</span>}
        <input
          type="submit"
          disabled={disabledBtn}
          value={btnValue}
          className={`w-[70%] md:w-[30%] border border-amber-200 rounded-sm my-1 md:my-3 h-10  transition duration-200 ease focus:shadow-[0px_0px_7px_#FFCC66] hover:bg-[#d3b069] hover:cursor-pointer`}
        />
      </form>
    </div>
  );
}

export default FormEmail;
