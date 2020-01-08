const scriptIndent = () => [
    'error',
    4,
    {
        'baseIndent': 1
    }
];

module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'plugin:vue/recommended',
        'eslint:recommended'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': 'off',
        'vue/script-indent': scriptIndent(), // 缩进4个spaces
        'vue/html-indent': scriptIndent(), // 缩进4个spaces
        'vue/require-default-prop': "off",
        "space-before-function-paren": ["error", {
            // always (默认) 要求在参数的 ( 前面有一个空格。 never 禁止在参数的 ( 前面有空格。
            "anonymous": "always", // 针对匿名函数表达式 (比如 function () {})
            "named": "never", // 针对命名的函数表达式 (比如 function foo () {})。
            "asyncArrow": "always" // 针对异步的箭头函数表达式 (比如 async () => {})。
        }],
        "key-spacing": [
            "error",
            {
                'beforeColon': false, // 禁止在对象字面量的键和冒号之间存在空格
                'afterColon': true // 要求在对象字面量的键和冒号之间存在至少有一个空格
            }
        ],
        "spaced-comment": [
            "error",
            "always" // 注释 //后加空格
        ],
        "semi": [ // 句尾加分号
            "error",
            "always"
        ]
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
};
