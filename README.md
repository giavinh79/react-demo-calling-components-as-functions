# React Demo - Calling Components as Functions

https://react.dev/reference/rules/react-calls-components-and-hooks#never-call-component-functions-directly

Small demo on why you should not call React components as functions.

- They get treated as hooks (see React Dev Tools)
- React relies on the order of hooks being deterministic (https://legacy.reactjs.org/docs/hooks-rules.html#explanation) which means it cannot be conditionally called (will error)
