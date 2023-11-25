export const requireValidation = (value) => !["", undefined, null, []].includes(value);
export const emailValidation = (value) => (/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/).test(value)
export const passwordValidation = (value) => value.length  > 6