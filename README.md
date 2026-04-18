
  # Portfolio Website Design

  This is a code bundle for Portfolio Website Design. The original project is available at https://www.figma.com/design/IFNDEvtOqmNbMrFudtF7G7/Portfolio-Website-Design.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Accessibility audit (CI-friendly)

  The accessibility audit uses Playwright's managed Chromium browser, so it does not require a system Chrome install.

  Install the browser once:

  ```bash
  npm run a11y:audit:install-browser
  ```

  Run the audit (optionally against a specific URL):

  ```bash
  npm run a11y:audit
  AUDIT_URL=http://localhost:5174 npm run a11y:audit
  ```

  For CI (including GitHub Actions), use:

  ```bash
  npm run a11y:audit:ci
  ```
  