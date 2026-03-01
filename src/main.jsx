import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './App.css'
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from './redux/store'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { TokenAdminProvider } from './context/tokenAdmin'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>

    {/* <QueryClientProvider client={queryClient}> */}
    <HashRouter>
      <TokenAdminProvider>

        <React.StrictMode>
          <App />
          {/*  <ReactQueryDevtools></ReactQueryDevtools> */}
        </React.StrictMode>
      </TokenAdminProvider>

    </HashRouter>

    {/*  </QueryClientProvider> */}
  </Provider>
)
