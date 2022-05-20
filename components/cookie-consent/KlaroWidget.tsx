/* eslint-disable @typescript-eslint/no-explicit-any */
import { siteMetadata } from '@/data/siteMetadata'
import React from 'react'

declare global {
  interface Window {
    klaro: any
  }
}

export class KlaroWidget extends React.Component {
  componentDidMount() {
    // Initialize Klaro cookie consent
    const Klaro = require('../../scripts/klaro.js')

    // we assign the Klaro module to the window, so that we can access it in JS
    window.klaro = Klaro

    // we set up Klaro with the config
    Klaro.setup(siteMetadata.cookieConsent.klaroConfig)
  }

  render() {
    return <></>
  }
}
