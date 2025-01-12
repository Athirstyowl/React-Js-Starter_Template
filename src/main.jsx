import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store/store'
import queryClient from './services/react-query/queryClient'
import { QueryClientProvider } from '@tanstack/react-query'
import SuperTokens, { SuperTokensWrapper } from 'supertokens-auth-react'
import { SuperTokensConfig } from './services/supertokens/config'
import App from './App'

SuperTokens.init(SuperTokensConfig)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SuperTokensWrapper>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    </SuperTokensWrapper>
  </StrictMode>
)
