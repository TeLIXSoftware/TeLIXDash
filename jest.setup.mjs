// jest.setup.mjs
import '@testing-library/jest-dom'


// Polyfill for TextEncoder/TextDecoder
import { TextEncoder, TextDecoder } from 'util'

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

if (typeof global.Request === 'undefined') {
    global.Request = class Request {}
  }
  if (typeof global.Response === 'undefined') {
    global.Response = class Response {}
  }