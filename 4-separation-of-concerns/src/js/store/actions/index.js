export * from './toaster';

export const DISMISS_TOAST = 'DISMISS_TOAST';
export const onDismissToast = uiId => ({ uiId, type: DISMISS_TOAST });

export const DISMISS_ALL_TOAST = 'DISMISS_TOAST';
export const dismissAllToast = () => ({
  type: DISMISS_ALL_TOAST,
});
