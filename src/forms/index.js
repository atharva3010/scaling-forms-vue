import Vue from 'vue';
import VueFormulate from '@braid/vue-formulate';
import { apiErrorHandler } from './formHelpers';

const options = {
  errorHandler: apiErrorHandler,

  classes: {
    outer: 'my-4',
    input(context) {
      let commonStyles = 'rounded-md h-10 outline-none w-full ',
        baseInputStyles =
          'border border-gray-500 focus:border-black border-box ';
      switch (context.classification) {
        case 'button':
          return (
            commonStyles +
            'px-6 text-white tg-mobile-button md:tg-desktop-button hover:shadow-xl hover:bg-opacity-75'
          );
        case 'textarea':
          return commonStyles + baseInputStyles + 'p-3 h-40';
        default:
          return commonStyles + baseInputStyles + 'px-3';
      }
    },
    label: 'tg-mobile-label md:tg-desktop-label text-black',
    help: 'text-xs mb-1 text-black',
    error: 'text-error'
  },

  slotComponents: {
    label: 'BaseInputLabel'
  },

  slotProps: {
    label: ['labelIcon', 'showRequiredLabel']
  }
};

Vue.use(VueFormulate, options);
