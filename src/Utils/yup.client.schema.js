import * as Yup from 'yup';

export const validationClientSchema = Yup.object().shape({
    rs: Yup
    .string('nombre inválido')
    .required("El nombre de la empresa es requerido")
    .min(4, "El nombre de la empresa debe tener al menos 4 caracteres")
    .max(50, "El nombre de la empresa debe tener máximo 50 caracteres")
    .required("El nombre de la empresa es requerido"),
    ruc: Yup
    .number('ruc inválido')
    .required("El RUC es requerido")
    .max(99999999999, "El RUC debe tener máximo 11 dígitos")
    .required("El RUC es requerido")
    .test(
      'len',
      'El RUC debe tener exactamente 11 dígitos',
      val => val ? val.toString().length === 11 : true
  ),
    address: Yup
    .string('dirección inválida')
    .required("La dirección es requerida")
    .min(5, "La dirección debe tener al menos 5 caracteres")
    .max(100, "La dirección debe tener máximo 100 caracteres")
    .required("La dirección es requerida"),
    phone: Yup
    .string('teléfono inválido')
    .required("El teléfono es requerido")
    .min(6, "El teléfono debe tener al menos 6 caracteres")
    .max(15, "El teléfono debe tener máximo 15 caracteres")
    .required("El teléfono es requerido"),
    email: Yup
    .string('correo inválido')
    .email("Correo electrónico inválido")
    .required("El correo electrónico es requerido")
    .min(5, "El correo electrónico debe tener al menos 5 caracteres")
    .max(50, "El correo electrónico debe tener máximo 50 caracteres")
    .required("El correo electrónico es requerido"),
  });

