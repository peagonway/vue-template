module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "eol-last": [0],
    "semi": [2, "never"], // 强制语句分号结尾
    "indent": [2, 2], // 强制缩进4 spaces
    "no-new": [0], // 不允许new一个实例后不赋值或不比较
    "camelcase": [0, { "properties": "never" }], // 关闭驼峰命名规则
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": "error"
  }
}
