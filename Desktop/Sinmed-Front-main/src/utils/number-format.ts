"use client";

export function formatCPF(value: string) {
  value = value.replace(/\D/g, "");
  value = value.substring(0, 11);

  if (value.length > 9) {
    value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, "$1.$2.$3-$4");
  }
  if (value.length > 6) {
    value = value.replace(/(\d{3})(\d{3})(\d{0,3})/, "$1.$2.$3");
  } else if (value.length > 3) {
    value = value.replace(/(\d{3})(\d{0,3})/, "$1.$2");
  }
  return value;
}

export const isValidCPF = (cpf: string): boolean => {
  cpf = cpf.replace(/\D/g, "");

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
    return false;
  }

  let soma = 0;
  let resto;

  for (let i = 1; i <= 9; i++) {
    soma += parseInt(cpf[i - 1]) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf[9])) return false;

  soma = 0;

  for (let i = 1; i <= 10; i++) {
    soma += parseInt(cpf[i - 1]) * (12 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;

  return resto === parseInt(cpf[10]);
};

export function removerFormatacao(value: string): string {
  return value.replace(/[^0-9]/g, "");
}

export function formatCEP(value: string) {
  value = value.replace(/\D/g, "");
  value = value.substring(0, 8);

  if (value.length > 5) {
    value = value.replace(/(\d{5})(\d{0,3})/, "$1-$2");
  }
  return value;
}

export function formatPhoneNumber(value: string) {
  value = value.replace(/\D/g, "");

  value = value.substring(0, 11);

  if (value.length > 6) {
    value = value.replace(/(\d{2})(\d{5})(\d{4})/, "$1 $2-$3");
  } else if (value.length > 2) {
    value = value.replace(/(\d{2})(\d{0,5})/, "$1 $2");
  } else {
    value = value.replace(/(\d*)/, "($1");
  }

  return value;
}

export function formatStringAsNumber(value: string) {
  value = value.replace(/\D/g, "");
  return value;
}

export function allowOnlyLetters(value: string) {
  return value.replace(/[^A-Za-zÀ-ÿ\s]/g, "");
}

export const formatDate = (value: string) => {
  if (!value) return "";
  const cleanValue = value.replace(/\D/g, "");

  const maxLength = 8;
  const formattedValue = cleanValue.substring(0, maxLength);

  if (formattedValue.length <= 2) return formattedValue;
  if (formattedValue.length <= 4)
    return `${formattedValue.slice(0, 2)}/${formattedValue.slice(2)}`;
  return `${formattedValue.slice(0, 2)}/${formattedValue.slice(
    2,
    4
  )}/${formattedValue.slice(4)}`;
};
