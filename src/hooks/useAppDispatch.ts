// Util and Lib Imports
import {AppDispatch} from '../libs/reduxToolkit'

// Package Imports
import {useDispatch} from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatch>()