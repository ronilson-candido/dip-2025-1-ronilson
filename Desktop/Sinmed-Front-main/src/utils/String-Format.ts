export function Base64Format(base64: string | null) {
  if (!base64) {
    return "Nenhuma imagem selecionada!";
  }
  if (!base64.startsWith("data:image/jpeg;base64,")) {
    return base64.slice(22);
  }
  return base64.slice(23);
}

export function formatName(name: string) {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
