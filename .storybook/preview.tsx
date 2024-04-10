// .storybook/preview.js
import React, { Suspense } from 'react'
import { I18nextProvider } from 'react-i18next'
import type { Preview } from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './global.css'
// import i18n from '../src/localization/i18n-client'

// Wrap your stories in the I18nextProvider component
// const withI18next = (Story) => {
//   return (
//     <Suspense fallback={<div>loading translations...</div>}>
//       <I18nextProvider i18n={i18n}>
//         <Story />
//       </I18nextProvider>
//     </Suspense>
//   );
//  };

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // decorators: [withI18next]
}

export default preview
