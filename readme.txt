my-automation/
├── playwright.config.js          # cấu hình trung tâm
├── package.json
├── jsconfig.json                 # (tùy chọn) để VS Code gợi ý code tốt hơn
├── .env                          # biến môi trường (KHÔNG commit)
├── .env.example
├── .gitignore
│
├── tests/
│   ├── auth.setup.js             # đăng nhập 1 lần, lưu storageState
│   ├── login/
│   │   └── login.spec.js
│   ├── invoice/
│   │   ├── create-invoice.spec.js
│   │   └── search-invoice.spec.js
│   └── api/
│       └── invoice-api.spec.js
│
├── pages/                        # Page Object Model
│   ├── BasePage.js
│   ├── LoginPage.js
│   ├── DashboardPage.js
│   └── InvoicePage.js
│
├── components/                   # UI dùng lại nhiều trang
│   ├── NavBar.js
│   └── DataTable.js
│
├── fixtures/
│   └── index.js                  # export `test` và `expect` đã mở rộng
│
├── test-data/
│   ├── users.json
│   └── invoices.js
│
├── utils/
│   ├── api-helper.js
│   ├── data-factory.js
│   └── db-helper.js              # (tùy chọn)
│
├── playwright/.auth/             # storageState (gitignore)
├── test-results/                 # (gitignore)
└── playwright-report/            # (gitignore)