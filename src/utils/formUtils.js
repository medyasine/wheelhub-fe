export const handleChange = (event, formData, setFormData) => {
  const { name, value } = event.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};
