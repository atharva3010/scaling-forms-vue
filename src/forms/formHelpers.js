// ErrorHandler
export const apiErrorHandler = function(error) {
  let errorData = {
    inputErrors: {},
    formErrors: []
  };

  let status = error?.response?.status,
    detail = error?.detail,
    message = error?.message,
    genericErr = `${status}: Something went wrong`;

  errorData.formErrors.push(
    `Oops! ${
      detail ? detail : message ? message : genericErr
    }, please try again.`
  );

  return errorData;
};

// Helper Functions
export const today = function() {
  let today = new Date().toISOString().split('T')[0];
  return today;
};

// Component generators
export const iconLabel = function(icon, label) {
  return [
    {
      component: 'i',
      class: 'fas mr-2 ' + icon
    },
    {
      component: 'span',
      children: label
    }
  ];
};

// Styles
// Always add a space after the classes in the style string
// so that it can be easily appended to any other style
export const buttonFloatingPill =
  'fixed lg:static bottom-0 right-0 m-5 lg:m-0 shadow-card lg:shadow-none rounded-full lg:rounded-lg ';

export const baseLinkStyles =
  'tg-mobile-link-small md:tg-desktop-link hover:text-opacity-75 ';
