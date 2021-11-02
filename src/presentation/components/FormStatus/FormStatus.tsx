import React, { useContext } from 'react'
import Spinner from '../Spinner/Spinner'
import Styles from './form-status-styles.scss'
import Context from '@/presentation/context/form/form-context'

const FormSatus: React.FC = () => {
  const { initialState } = useContext(Context)
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {initialState.isLoading && <Spinner className={Styles.spinner} />}
      {initialState.mainError && (
        <span data-testid="main-error" className={Styles.error}>
          {initialState.mainError}
        </span>
      )}
    </div>
  )
}

export default FormSatus
