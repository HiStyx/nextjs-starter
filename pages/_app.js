import React from 'react'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'

function MyApp ({ Component, pageProps }) {
  return <Component {...pageProps}/>
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object.isRequired
}

export default MyApp
