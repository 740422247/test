module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: "vue-eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    // eslint-config-prettier 的缩写
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  // eslint-plugin-vue @typescript-eslint/eslint-plugin eslint-plugin-prettier的缩写
  plugins: ["vue", "@typescript-eslint", "prettier"],
  rules: {
    "vue/html-self-closing": "off",
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: 0, // 字符串允许使用“”，‘’
    // "no-console": 1, // 允许使用console
    indent: ["error", 2],
    semi: ["error", "always"], // 语句后分号设置;
    "semi-style": ["error", "last"],
    // "linebreak-style": ["error", "unix"],  //换行符
    "comma-dangle": ["error", "never"], // 要求或禁止使用拖尾逗号
    "comma-style": ["error", "last"], // 要求逗号放在数组元素、对象属性或变量声明之后，且在同一行
    // "no-cond-assign": ["error", "always"],    //禁止条件表达式中出现赋值操作符
    "no-empty-function": 1, // 禁止空函数
    "func-call-spacing": ["error", "never"], // 在函数标识符和其调用之间有空格
    "space-before-function-paren": ["error", "never"], // 函数圆括号之前有一个空格
    "no-empty": 2,//块语句中的内容不能为空
    "no-eq-null": 2,//禁止对null使用==或!=运算符
    "no-func-assign": 2,//禁止重复的函数声明
    "no-var": 0,//禁用var，用let和const代替
    "camelcase": "error",//强制驼峰法命名
    "complexity": [0, 11],//循环复杂度
    "default-case": 1,//switch语句最后必须有default
    "eqeqeq": 2,//必须使用全等
    "key-spacing": [0, { "beforeColon": false, "afterColon": true }],//对象字面量中冒号的前后空格
    "newline-after-var": 2,//变量声明后是否需要空一行
    "object-shorthand": 0,//强制对象字面量缩写语法
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
}
