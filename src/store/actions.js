export const GRADIENT_ADD = 'GRADIENT_ADD';
export const GRADIENT_UPDATE = 'GRADIENT_UPDATE';
export const GRADIENT_DELETE = 'GRADIENT_DELETE';

export const addGradient = (gradient) => ({
  gradient,
  type: GRADIENT_ADD
});

export const updateGradient = (id, gradient) => ({
  id,
  gradient,
  type: GRADIENT_UPDATE
});

export const deleteGradient = (id) => ({
  id,
  type: GRADIENT_DELETE
});