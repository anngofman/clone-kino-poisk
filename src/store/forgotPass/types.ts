export type ForgotPassStateType={
  isLoading: boolean
  error: string | null 
  isSuccess: boolean
}

export type ForgotPassActionType = {
  type: string
  payload?: string
}