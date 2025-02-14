"use client";
import { useEffect, useState } from "react";
import {
  medicalSpecialties,
  cities,
  situations,
} from "@/constants/registerConstants";
import { Control, Controller, FieldValues, useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import BigFormFieldRec from "./_components/big-form-field-rec";
import styles from "./styles.module.scss";
import Select from "react-select";
import SmallFormFieldRec from "./_components/small-form-field-rec";
import { Check } from "lucide-react";
import {
  allowOnlyLetters,
  formatCEP,
  formatCPF,
  formatPhoneNumber,
  formatStringAsNumber,
  removerFormatacao,
} from "@/utils/number-format";
import { Base64Format, formatName, validateEmail } from "@/utils/String-Format";
import { useRouter, useSearchParams } from "next/navigation";
import { Lexend } from "next/font/google";
import Link from "next/link";
import ReqModal from "@/components/Modals/ReqModal";
import { formatDate } from "@/utils/dateUtils";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function RegisterFormRec() {
  const [currentStep, setCurrentStep] = useState(1);
  const { register, handleSubmit, setValue, watch, getValues, control, reset } =
    useForm();
  const [paymentData, setPaymentData] = useState<string[]>([]);
  const [affiliation, setAffiliation] = useState(true);
  const [profilePicture, setProfilePicture] = useState("AAAAAAAAAAAA");
  const [crmState, setCrmState] = useState("Alagoas");
  const [crmFile, setCrmFile] = useState<string | null>(null);
  const [crmImage, setCrmImage] = useState<string | ArrayBuffer | null>(null);
  const [idImage, setIdImage] = useState<string | ArrayBuffer | null>(null);
  const [profileImage, setProfileImage] = useState<string | ArrayBuffer | null>(
    null
  );
  const [crmFileName, setCrmFileName] = useState<string | null>(null);
  const [idFileName, setIdFileName] = useState<string | null>(null);
  const [isCrmFileSelected, setIsCrmFileSelected] = useState(false);
  const [isIdFileSelected, setIsIdFileSelected] = useState(false);
  const searchParams = useSearchParams();
  const name = searchParams.get("nome");
  const cpfFromQuery = searchParams.get("cpf");
  const router = useRouter();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isResident, setIsResident] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

  const [city, state, street, neighborhood, number, phone] = watch([
    "affiliateData.address.city",
    "affiliateData.address.state",
    "affiliateData.address.street",
    "affiliateData.address.neighborhood",
    "affiliateData.address.number",
    "phone",
  ]);

  const SuccessModal = () => {};
  useEffect(() => {
    if (cpfFromQuery) {
      setValue("cpf", cpfFromQuery);
    }
  }, [cpfFromQuery, setValue]);

  useEffect(() => {
    if (name) {
      const formattedName = formatName(name);
      setValue("name", formattedName);
    }
  }, [name, setValue]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "name") {
      setValue(name, allowOnlyLetters(value));
    } else if (name === "affiliateData.crm") {
      setValue(name, formatStringAsNumber(value));
    } else if (
      name === "cpf" ||
      name === "cep" ||
      name === "affiliateData.address.number"
    ) {
      setValue(name, removerFormatacao(value));
    } else if (name === "phone") {
      setValue(name, formatPhoneNumber(value), { shouldValidate: true });
    } else if (
      [
        "affiliateData.birthDate",
        "affiliateData.residencyTimeStart",
        "affiliateData.residencyTimeEnd",
      ].includes(name)
    ) {
      const numbersOnly = value.replace(/\D/g, "");

      let visualDate = numbersOnly;
      if (numbersOnly.length > 2) {
        visualDate = `${numbersOnly.slice(0, 2)}/${numbersOnly.slice(2)}`;
      }
      if (numbersOnly.length > 4) {
        visualDate = `${numbersOnly.slice(0, 2)}/${numbersOnly.slice(
          2,
          4
        )}/${numbersOnly.slice(4)}`;
      }

      e.target.value = visualDate;

      if (numbersOnly.length === 8) {
        const day = numbersOnly.slice(0, 2);
        const month = numbersOnly.slice(2, 4);
        const year = numbersOnly.slice(4, 8);
        const submitValue = `${year}-${month}-${day}`;

        setValue(name, submitValue, { shouldValidate: true });
      } else {
        setValue(name, visualDate, { shouldValidate: true });
      }
    } else {
      setValue(name, value, { shouldValidate: true });
    }
  };

  const handleCrmBase64 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const data = new FileReader();
    data.onload = () => {
      const Base64String = data.result as string;
      const formattedBase64 = Base64Format(Base64String);
      setCrmImage(formattedBase64);
      setPaymentData((prev) => [...prev, formattedBase64 as string]);
      setValue("crmFileInput", formattedBase64);
    };
    data.readAsDataURL(files[0]);
  };

  const handleIdBase64 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const data = new FileReader();
    data.onload = () => {
      const Base64String = data.result as string;
      const formattedBase64 = Base64Format(Base64String);
      setIdImage(formattedBase64);
      setPaymentData((prev) => [...prev, formattedBase64 as string]);
      setValue("idFileInput", formattedBase64);
    };
    data.readAsDataURL(files[0]);
  };

  const handleProfilePictureBase64 = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const data = new FileReader();
    data.onload = () => {
      const Base64String = data.result as string;
      const formattedBase64 = Base64Format(Base64String);
      setProfileImage(formattedBase64);
      setValue("profilePicture", formattedBase64);
    };
    data.readAsDataURL(files[0]);
  };

  const validateNextStep = () => {
    const values = getValues();

    if (currentStep === 1) {
      if (
        !values.name ||
        !values.email ||
        !values.password ||
        !values.duplicatedPassword ||
        !values.affiliateData.birthDate ||
        !values.cpf
      ) {
        toast.error("Preencha todos os campos.");
        return false;
      }

      if (values.password.length < 8) {
        toast.error("Insira uma senha com pelo menos 8 caracteres!", {
          style: {
            backgroundColor: "#9c1515",
          },
        });
        return false;
      }

      if (values.password !== values.duplicatedPassword) {
        toast.error("As senhas não coincidem!", {
          style: {
            backgroundColor: "#9c1515",
          },
        });
        return false;
      }

      if (!validateEmail(values.email)) {
        toast.error(
          "Formato de Email inválido! Por favor insira um novo email.",
          {
            style: {
              backgroundColor: "#9c1515",
            },
          }
        );
        return false;
      }
    } else if (currentStep === 2) {
      if (
        !values.affiliateData.address.cep ||
        !values.phone ||
        !values.affiliateData.address.city ||
        !values.affiliateData.address.state ||
        !values.affiliateData.address.street ||
        !values.affiliateData.address.neighborhood ||
        !values.affiliateData.address.number
      ) {
        toast.error("Preencha todos os campos.");
        return false;
      }
    } else if (currentStep === 3) {
      if (
        !values.affiliateData.municipality ||
        !values.affiliateData.crm ||
        !values.affiliateData.medicalSpecialty ||
        !values.affiliateData.situation
      ) {
        toast.error("Preencha todos os campos.");
        return false;
      }
    }
    return true;
  };

  const saveCpfToFile = async (cpfToSave: string): Promise<boolean> => {
    try {
      const response = await fetch("/api/save-cpf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cpf: formatCPF(cpfToSave),
        }),
      });

      const data = await response.json();

      return data.success;
    } catch (error) {
      console.error("Erro ao salvar CPF:", error);
      return false;
    }
  };

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);
    const formattedData = {
      ...data,

      affiliateData: {
        ...data.affiliateData,

        paymentData,
        crmState,
        affiliation,
        subscriptionData: {
          category: "FRESHMAN",
          duration: 12,
        },
      },
    };

    
    

    saveCpfToFile(getValues("cpf"));
  };

  const checkCEP = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (!e.target.value) return;
    const cep = e.target.value.replace(/\D/g, "");

    fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then((res) => res.json())
      .then((data) => {
        if (data.erro) {
          toast.error("CEP inválido. Por favor, verifique e tente novamente.", {
            style: {
              backgroundColor: "#9c1515",
            },
          });

          return;
        }

        setValue("affiliateData.address.city", data.localidade);
        setValue("affiliateData.address.state", data.uf);
        setValue("affiliateData.address.street", data.logradouro);
        setValue("affiliateData.address.neighborhood", data.bairro);
      })
      .catch(() => {
        toast.error(
          "Erro ao buscar o CEP. Por favor, verifique e tente novamente."
        );
      });
  };

  const nextStep = () => {
    if (validateNextStep()) {
      setCurrentStep((currentStep) => currentStep + 1);
    }
    const values = getValues();
    console.log(values);
  };

  const previousStep = () => {
    setCurrentStep((currentStep) => currentStep - 1);
  };

  const formatValue = (value: string) => {
    if (!value) return "";
    return value.includes("-") ? value.split("-").reverse().join("/") : value;
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} method="POST">
        <div className={styles.registerAreaRec}>
          <Toaster
            richColors
            toastOptions={{
              style: {
                background: "#9c1515",
                color: "white",
              },
            }}
            position="top-right"
          />
          <h2>{name ? "Recadastramento" : "Novo Registro"}</h2>
          <div className={styles.separatorRec}></div>
          {currentStep === 1 && (
            <>
              <p>Informe seus dados pessoais</p>
              <BigFormFieldRec
                label="Nome Completo"
                type="text"
                {...register("name")}
                onChange={handleChange}
              />
              <BigFormFieldRec
                label="Email"
                type="email"
                {...register("email")}
                onChange={handleChange}
              />
              <div className={styles.smallGridRec}>
                <SmallFormFieldRec
                  label="Senha"
                  type="password"
                  {...register("password")}
                  onChange={handleChange}
                />
                <SmallFormFieldRec
                  label="Repita a senha"
                  type="password"
                  {...register("duplicatedPassword")}
                  onChange={handleChange}
                />
                <Controller
                  name="affiliateData.birthDate"
                  control={control}
                  render={({ field }) => (
                    <SmallFormFieldRec
                      label="Data de Nascimento"
                      type="text"
                      max={10}
                      {...field}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      value={formatValue(field.value)}
                    />
                  )}
                />

                <SmallFormFieldRec
                  label="CPF"
                  type="text"
                  max={11}
                  {...register("cpf")}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
              <p>Dados adicionais</p>
              <div className={styles.smallGridRec}>
                <SmallFormFieldRec
                  label="CEP"
                  type="text"
                  max={8}
                  {...register("affiliateData.address.cep")}
                  onChange={handleChange}
                  onBlur={checkCEP}
                />
                <SmallFormFieldRec
                  label="Telefone"
                  type="text"
                  {...register("phone")}
                  onChange={handleChange}
                />
                <SmallFormFieldRec
                  label="Cidade"
                  type="text"
                  value={city || ""}
                  {...register("affiliateData.address.city")}
                  onChange={handleChange}
                  readOnly={true}
                />
                <SmallFormFieldRec
                  label="Estado"
                  type="text"
                  value={state || ""}
                  {...register("affiliateData.address.state")}
                  onChange={handleChange}
                  readOnly={true}
                />
              </div>
              <BigFormFieldRec
                label="Rua"
                type="text"
                value={street || ""}
                {...register("affiliateData.address.street")}
                onChange={handleChange}
                readOnly={true}
              />
              <div className={styles.smallBox}>
                <SmallFormFieldRec
                  label="Bairro"
                  type="text"
                  value={neighborhood || ""}
                  {...register("affiliateData.address.neighborhood")}
                  onChange={handleChange}
                  readOnly={true}
                />
                <SmallFormFieldRec
                  label="Número"
                  type="text"
                  {...register("affiliateData.address.number")}
                  onChange={handleChange}
                />
              </div>
              <BigFormFieldRec
                label="Complemento"
                type="text"
                {...register("affiliateData.address.complement")}
                onChange={handleChange}
              />
            </>
          )}

          {currentStep === 3 && (
            <>
              <p>Informe seus dados médicos</p>

              <div className={styles.smallBox}>
                <SmallFormFieldRec
                  label="CRM AL"
                  type="text"
                  {...register("affiliateData.crm")}
                  onChange={handleChange}
                  max={5}
                />
                <Controller
                  name="affiliateData.situation"
                  control={control}
                  render={({ field }) => (
                    <div className={styles.newDiv}>
                      <h3>Situação</h3>

                      <Select
                        {...field}
                        className={`${styles.input} ${styles.situationInput}`}
                        options={situations}
                        placeholder="Selecione sua situação..."
                        value={situations.find(
                          (situation) => situation.value === field.value
                        )}
                        onChange={(selectedOption) => {
                          field.onChange(selectedOption?.value);
                          setIsResident(selectedOption?.value === "Residente");
                        }}
                        styles={{
                          container: (provided) => ({
                            ...provided,
                            border: "none",
                            height: "44px",
                            borderRadius: "15px",
                          }),
                          control: (provided) => ({
                            ...provided,
                            height: "44px",

                            background: "rgba(255, 255, 255, 0.2)",
                            boxShadow:
                              "0px 2px 20px 0px rgba(34, 108, 95, 0.25)",
                            border: "none",
                            borderRadius: "15px",
                          }),
                          menu: (provided) => ({
                            ...provided,
                            borderRadius: "15px",
                            color: "#fff",
                            marginTop: "0.5rem",
                            boxShadow:
                              "0px 2px 20px 0px rgba(34, 108, 95, 0.25)",
                          }),
                          option: (provided, state) => ({
                            ...provided,
                            backgroundColor: state.isSelected
                              ? "rgba(33, 190, 46, 0.25)"
                              : state.isFocused
                              ? "rgba(55, 160, 141, 0.226)"
                              : "transparent",
                            color: state.isSelected ? "#FFFFFF" : "#226c5f",
                            padding: "10px",
                            borderRadius: "10px",
                          }),
                          singleValue: (provided) => ({
                            ...provided,
                            color: "#226c5f",
                          }),

                          dropdownIndicator: (provided, state) => ({
                            ...provided,
                            color: state.isFocused
                              ? "rgba(34, 108, 95, 0.6)"
                              : "#09412a",
                            transition: "color 0.2s",
                            "&:hover": {
                              color: "rgba(34, 108, 95, 1)",
                            },
                          }),
                        }}
                      />
                      {isResident && (
                        <div
                          className={`${styles.inputContainer}   w-fit text-center flex gap-1`}
                        >
                          <Controller
                            control={control}
                            name="affiliateData.residencyTimeStart"
                            render={({ field }) => (
                              <div
                                className={`${styles.inputContainer} my-3 mx-auto w-fit text-center flex flex-col gap-1`}
                              >
                                <label htmlFor="residencyTimeStart">
                                  Data de Início
                                </label>
                                <input
                                  {...field}
                                  maxLength={10}
                                  id="residencyTimeStart"
                                  type="text"
                                  onChange={(e) => handleChange(e)}
                                  value={formatValue(field.value)}
                                  placeholder="Digite o tempo"
                                  className=" outline-none w-32 h-11 px-2 rounded-xl bg-white/20 shadow-lg border-none text-emerald-800 placeholder-emerald-800/60"
                                />
                              </div>
                            )}
                          />
                          <Controller
                            control={control}
                            name="affiliateData.residencyTimeEnd"
                            render={({ field }) => (
                              <div
                                className={`${styles.inputContainer} my-3 mx-auto w-fit text-center flex flex-col gap-1`}
                              >
                                <label htmlFor="residencyTimeEnd">
                                  Data de Término
                                </label>
                                <input
                                  {...field}
                                  maxLength={10}
                                  id="residencyTimeEnd"
                                  type="text"
                                  onChange={(e) => handleChange(e)}
                                  value={formatValue(field.value)}
                                  placeholder="Digite o tempo"
                                  className=" outline-none w-32 h-11 px-2 rounded-xl bg-white/20 shadow-lg border-none text-emerald-800 placeholder-emerald-800/60"
                                />
                              </div>
                            )}
                          />
                        </div>
                      )}
                    </div>
                  )}
                />
              </div>
              <div className={styles.boxWrapper}>
                <Controller
                  name="affiliateData.municipality"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <h3>Município(s) de Atuação</h3>
                      <Select
                        {...field}
                        className={styles.input}
                        isMulti
                        options={cities}
                        placeholder="Selecione as cidades..."
                        closeMenuOnSelect={false}
                        value={cities.filter((option) =>
                          field.value?.includes(option.value)
                        )}
                        onChange={(selectedOptions) => {
                          const values = selectedOptions.map(
                            (option) => option.value
                          );
                          field.onChange(values);
                        }}
                        styles={{
                          container: (provided) => ({
                            ...provided,
                            border: "none",
                            borderRadius: "15px",
                          }),
                          control: (provided) => ({
                            ...provided,
                            background: "rgba(255, 255, 255, 0.2)",
                            boxShadow:
                              "0px 2px 20px 0px rgba(34, 108, 95, 0.25)",
                            border: "none",
                            borderRadius: "15px",
                          }),
                          menu: (provided) => ({
                            ...provided,
                            borderRadius: "15px",
                            marginTop: "0.5rem",
                            boxShadow:
                              "0px 2px 20px 0px rgba(34, 108, 95, 0.25)",
                          }),
                          option: (provided, state) => ({
                            ...provided,
                            backgroundColor: state.isSelected
                              ? "rgba(33, 190, 46, 0.25)"
                              : state.isFocused
                              ? "rgba(55, 160, 141, 0.226)"
                              : "transparent",
                            color: state.isSelected ? "#FFFFFF" : "#226c5f",
                            padding: "10px",
                            borderRadius: "10px",
                          }),
                          multiValue: (provided) => ({
                            ...provided,
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            borderRadius: "15px",
                          }),
                          multiValueLabel: (provided) => ({
                            ...provided,
                            color: "#226c5f",
                          }),
                          multiValueRemove: (provided) => ({
                            ...provided,
                            color: "#226c5f",
                            ":hover": {
                              backgroundColor: "rgba(255, 255, 255, 0.2)",
                            },
                          }),
                          dropdownIndicator: (provided, state) => ({
                            ...provided,
                            color: state.isFocused
                              ? "rgba(34, 108, 95, 0.6)"
                              : "#09412a",
                            transition: "color 0.2s",
                            "&:hover": {
                              color: "rgba(34, 108, 95, 1)",
                            },
                          }),
                        }}
                      />
                      <span>*Mais de um município pode ser selecionado</span>
                    </div>
                  )}
                />

                <Controller
                  name="affiliateData.medicalSpecialty"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <h3>Especialidade(s)</h3>
                      <Select
                        {...field}
                        className={styles.input}
                        isMulti
                        options={medicalSpecialties}
                        placeholder="Selecione as especialidades..."
                        closeMenuOnSelect={false}
                        value={medicalSpecialties.filter((option) =>
                          field.value?.includes(option.value)
                        )}
                        onChange={(selectedOptions) => {
                          const values = selectedOptions.map(
                            (option) => option.value
                          );
                          field.onChange(values);
                        }}
                        styles={{
                          container: (provided) => ({
                            ...provided,
                            border: "none",
                            borderRadius: "15px",
                          }),
                          control: (provided) => ({
                            ...provided,
                            background: "rgba(255, 255, 255, 0.2)",
                            boxShadow:
                              "0px 2px 20px 0px rgba(34, 108, 95, 0.25)",
                            border: "none",
                            borderRadius: "15px",
                          }),
                          menu: (provided) => ({
                            ...provided,
                            borderRadius: "15px",
                            marginTop: "0.5rem",
                            boxShadow:
                              "0px 2px 20px 0px rgba(34, 108, 95, 0.25)",
                          }),
                          option: (provided, state) => ({
                            ...provided,
                            backgroundColor: state.isSelected
                              ? "rgba(33, 190, 46, 0.25)"
                              : state.isFocused
                              ? "rgba(55, 160, 141, 0.226)"
                              : "transparent",
                            color: state.isSelected ? "#FFFFFF" : "#226c5f",
                            padding: "10px",
                            borderRadius: "10px",
                          }),
                          multiValue: (provided) => ({
                            ...provided,
                            backgroundColor: "rgba(255, 255, 255, 0.2)",
                            borderRadius: "15px",
                          }),
                          multiValueLabel: (provided) => ({
                            ...provided,
                            color: "#226c5f",
                          }),
                          multiValueRemove: (provided) => ({
                            ...provided,
                            color: "#226c5f",
                            ":hover": {
                              backgroundColor: "rgba(255, 255, 255, 0.2)",
                            },
                          }),
                          dropdownIndicator: (provided, state) => ({
                            ...provided,
                            color: state.isFocused
                              ? "rgba(34, 108, 95, 0.6)"
                              : "#09412a",
                            transition: "color 0.2s",
                            "&:hover": {
                              color: "rgba(34, 108, 95, 1)",
                            },
                          }),
                        }}
                      />
                      <span>
                        *Mais de uma especialidade pode ser selecionada
                      </span>
                    </div>
                  )}
                />
              </div>
            </>
          )}

          {currentStep === 4 && (
            <>
              <p className={styles.insertDescription}>
                Insira foto do seus documentos <br /> (CRM, RG ou CNH) e sua
                foto de perfil
              </p>
              <div className={styles.insertAreaRec}>
                <div>
                  <h4>CRM</h4>
                  <input
                    id="crmFileInput"
                    type="file"
                    accept="image/*"
                    {...register("crmFileInput")}
                    onChange={handleCrmBase64}
                  />
                  <label
                    htmlFor="crmFileInput"
                    className={styles.customFileUpload}
                  >
                    Inserir
                  </label>
                  {crmImage && (
                    <span className={styles.firstSpan}>
                      <Check size={20} />
                    </span>
                  )}
                </div>
                <div>
                  <h4 className={styles.secondHeading}>RG ou CNH</h4>
                  <input
                    type="file"
                    id="idFileInput"
                    accept="image/*"
                    {...register("idFileInput")}
                    onChange={handleIdBase64}
                  />
                  <label
                    htmlFor="idFileInput"
                    className={`${styles.customFileUpload} ${styles.firstLabel}`}
                  >
                    Inserir
                  </label>

                  {idImage && (
                    <span className={styles.secondSpan}>
                      <Check size={20} />
                    </span>
                  )}
                </div>
                <div>
                  <h4>Foto ou Selfie</h4>
                  <input
                    id="profilePictureInput"
                    type="file"
                    accept="image/*"
                    {...register("profilePicture")}
                    onChange={handleProfilePictureBase64}
                  />
                  <label
                    htmlFor="profilePictureInput"
                    className={styles.customFileUpload}
                  >
                    Inserir
                  </label>
                  {profileImage && (
                    <span className={styles.firstSpan}>
                      <Check size={20} />
                    </span>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
        <div className={styles.buttonGroup}>
  {currentStep > 1 && (
    <button
      type="button"
      onClick={previousStep}
      className={styles.prevButton}
    >
      Voltar
    </button>
  )}
  {currentStep < 4 && (
    <button
      type="button"
      onClick={nextStep}
      className={styles.nextButton}
    >
      Avançar
    </button>
  )}
{currentStep == 4 && (
    <button
      type="button"
      className={styles.finishButton}
      onClick={() => {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          setIsSuccessModalVisible(true);
        }, 4000);
      }}
      disabled={isLoading}
    >
      {isLoading ? "Cadastro em andamento..." : "Finalizar"}
    </button>
  )}
</div>
</form>
<ReqModal message="Cadastro em Andamento..." isOpen={isLoading} />
{isSuccessModalVisible && (
  <div className={styles.modalOverlay}>
    <div className={styles.modalContent}>
      <div className={styles.successIcon}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={styles.checkmark}
        >
          <path d="M20 6L9 17L4 12" />
        </svg>
      </div>
      <h2 className={`${styles.title} ${lexend.className}`}>
        Cadastro efetuado com sucesso!
      </h2>
      <p className={`${styles.message} ${lexend.className}`}>
        Em breve você poderá explorar todos os recursos inovadores da nova
        plataforma.
      </p>
      <Link href="/">
        <button className={`${styles.confirmButton} ${lexend.className}`}>
          Finalizar
        </button>
      </Link>
    </div>
  </div>
)}

    </>
  );
}