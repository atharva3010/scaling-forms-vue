import { iconLabel, baseLinkStyles } from './formHelpers';

const linkStyles = baseLinkStyles + 'text-black';

const buttonStyles = 'bg-black';

const authLogin = [
  {
    component: 'h1',
    children: 'Login',
    class: 'text-3xl text-center font-bold'
  },
  {
    type: 'email',
    name: 'email',
    label: 'Please enter your e-mail address',
    autocomplete: 'new-email',
    validation: 'bail|required|email'
  },
  {
    type: 'password',
    name: 'password',
    label: 'Please enter your password',
    autocomplete: 'new-password',
    validation: 'required'
  },
  {
    component: 'FormulateErrors'
  },
  {
    type: 'submit',
    inputClass: [buttonStyles],
    children: iconLabel('fa-user', 'Login')
  },
  {
    component: 'router-link',
    to: { name: 'ResetPasswordRequestLink' },
    class: linkStyles,
    children: iconLabel('fa-unlock', 'Forgot password?')
  }
];

const resetPasswordRequestLink = [
  {
    component: 'h1',
    children: 'Forgot password?',
    class: 'text-3xl text-center font-bold mb-4'
  },
  {
    component: 'p',
    children: `Enter your email address below and we'll immediately send you a link to reset your password.`,
    class: 'mb-4'
  },
  {
    type: 'email',
    name: 'username',
    label: 'Your email',
    autocomplete: true,
    validation: 'bail|required|email'
  },
  {
    component: 'FormulateErrors'
  },
  {
    type: 'submit',
    inputClass: [buttonStyles],
    children: iconLabel('fa-unlock', 'Reset password')
  }
];

const resetPasswordLinkSent = [
  {
    component: 'h1',
    children: 'Success',
    class: 'text-3xl text-center font-bold mb-4'
  },
  {
    component: 'p',
    children:
      'We have sent a reset link to the email address you entered. Use the link in the email to reset your password.',
    class: 'mb-4'
  },
  {
    component: 'div',
    class: 'flex justify-between',
    children: [
      {
        component: 'router-link',
        to: { name: 'ResetPasswordRequestLink' },
        class: linkStyles,
        children: iconLabel('fa-redo', 'Send reset link again')
      },
      {
        component: 'router-link',
        to: {
          name: 'ResetPasswordChange',
          params: { token: 'eyAdbkjbnaASAdbnjfnbMB21' }
        },
        class: linkStyles,
        children: iconLabel('fa-arrow-right', 'Dummy token')
      }
    ]
  }
];

const resetPasswordChange = [
  {
    component: 'h1',
    children: 'Reset password',
    class: 'text-3xl text-center font-bold'
  },
  {
    type: 'password',
    name: 'password',
    label: 'Your new password',
    validation: [
      ['bail'],
      ['required'],
      ['min', 6, 'length'],
      ['matches', /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/]
    ],
    validationMessages: {
      matches:
        'Password should contain atleast one lowercase, one uppercase, one number, and one special character'
    }
  },
  {
    type: 'password',
    name: 'password_confirm',
    label: 'Confirm new password',
    validation: 'bail|^required|confirm:password',
    validationName: 'Password'
  },
  {
    component: 'FormulateErrors'
  },
  {
    type: 'submit',
    inputClass: [buttonStyles],
    children: iconLabel('fa-user-lock', 'Set Password')
  }
];

const resetPasswordSuccess = [
  {
    component: 'h1',
    children: 'Success',
    class: 'text-3xl text-center font-bold mb-4'
  },
  {
    component: 'p',
    children: 'Congratulations! Your password has been successfully changed!',
    class: 'mb-4'
  },
  {
    component: 'FormulateErrors'
  },
  {
    component: 'router-link',
    to: { name: 'AuthLogin' },
    class: linkStyles,
    children: iconLabel('fa-user', 'Return to login page')
  }
];

const formSchemas = {
  authLogin,
  resetPasswordRequestLink,
  resetPasswordLinkSent,
  resetPasswordChange,
  resetPasswordSuccess
};

export function getFormSchema(schemaName) {
  return formSchemas[schemaName];
}
