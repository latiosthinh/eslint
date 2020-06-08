# Using Eslint + Pretier in VSCode

## Step 1
Install extensions: Prettier + ESLint

## Step 2
Press `Cmd + Shift + P` or `Ctrl + Shift + P` to open `Preferences: Settings (JSON)`

Paste in the code below:

```javascript
"editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": true
},
```

## Step 3
Create a `.eslintrc.js` file in your working folder

Paste in your custome [rules]( https://eslint.org/docs/rules/ )

## Step 4
Open your .js files to see the result.

Saving your document for auto-formatting.