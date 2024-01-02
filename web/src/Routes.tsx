// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, PrivateSet } from '@redwoodjs/router'

import PortalLayout from 'src/layouts/PortalLayout'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={ScaffoldLayout} title="Logs" titleTo="logs" buttonLabel="New Log" buttonTo="newLog">
        <PrivateSet unauthenticated="home" roles="ADMIN">
          <Route path="/admin/logs/new" page={LogNewLogPage} name="newLog" />
          <Route path="/admin/logs/{id:Int}/edit" page={LogEditLogPage} name="editLog" />
          <Route path="/admin/logs/{id:Int}" page={LogLogPage} name="log" />
          <Route path="/admin/logs" page={LogLogsPage} name="logs" />
        </PrivateSet>
      </Set>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={PortalLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/disclaimer" page={DisclaimerPage} name="disclaimer" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
