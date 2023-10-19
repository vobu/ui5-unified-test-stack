# UI5 Application single.teststack

showcasing Unit (QUnit)-, Integration (OPA)- and end-to-end (wdi5)-tests running on the same tech stack, namely Webdriver.IO

Corresponding blog post is at https://blogs.sap.com/2023/10/19/ui5s-unified-test-tech-stack/

## Preparation

```sh
npm install
```

## Run the App and all tests

```sh
npm test
```

## Thanks

All done with community-driven tooling!

- `yo easy-ui5 app` -> generate the UI5 app
- `npm init wdi5@latest` -> install `wdi5`
- `wdio-qunit-service` -> testrunner for QUnit- and OPA-tests


## License

This work is dual-licensed under [Apache 2.0 and the Derived Beer-ware 🍺 License](LICENSE). The official license will be Apache 2.0 but finally you can choose between one of them if you use this work.
