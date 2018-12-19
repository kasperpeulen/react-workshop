export * from './toaster';

export const DISMISS_TOAST = 'DISMISS_TOAST';
export const dismissToast = (uiId) => ({
  type: DISMISS_TOAST,
  payload: { uiId },
});
