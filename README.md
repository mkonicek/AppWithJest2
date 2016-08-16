# React Native template project with Jest tests

Trying out how to use Jest with React Native.

There are two components, each with a test:

`Button`: A very simple component with no state, the test is trivial.

`CreateScreen`: A stateful component that expands a part of the UI on tap. The question here is what should be the right API for simulating the tap in the test. The component uses React Native's `<TouchableOpacity onPress={_onHelpPress}>`. The `onPress` callback is not present in the "native" snapshot rendered by Jest, because `TouchableOpacity` works by attaching some native events to its child, the names of those events are an implementation detail.