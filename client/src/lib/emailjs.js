import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

emailjs.init(PUBLIC_KEY);

export const sendOrderRequest = async (formData) => {
  const templateParams = {
    customer_name: formData.fullName,
    customer_email: formData.email,
    customer_phone: formData.phone || 'Not provided',
    customer_country: formData.country,
    customer_company: formData.company || 'Individual',
    product_name: formData.productName || 'Not specified',
    quantity: formData.quantity || 1,
    message: formData.message || '-',
    submission_date: new Date().toLocaleString(),
  };

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );
    return { success: true, response };
  } catch (error) {
    return { success: false, error };
  }
};