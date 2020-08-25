# React Mini Challenge: State & Events

## Instructions

Fork this repo, then run `git clone` to download it locally. Then `cd` into the downloaded directory and open it in your text editor with `code .`.

To get started, run:

```
npm install
npm start
```

## Submitting

When you’re finished, run the following commands in your terminal to submit:

```
git add .
git commit -m 'Done'
git push
```

To get feedback on your code, make a [pull request from your forked repo](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork).

## Assignment

We're going to continue working on our Spice Store and we'll be adding some new functionality to get practice working with state and events.

Here are the deliverables you'll be building out:

<!-- - [ ] When a user clicks the heart icon on a spice, it should change between a filled heart (🤍) to indicate this spice is in the user's list of favorites, and an outlined heart (♡) to indicate this spice is no longer in the user's list of favorites. -->
<!-- - [ ] When a user types in the search bar, the list of spices displayed should be filtered to match based on the text in the input field and the *notes* property of the spice. For example, if the user types 'warm', the list should show Allspice, Cardamom Pods, and Garam Masala. -->
<!-- - [ ] When the user clicks the checkbox next to '4 Star Only', the list of spices should be filtered to only display the spices with a *rating* of 4 or higher. -->

## Tips
You will need to add state to some components in order to build out these deliverables. Think about *which* components state belongs in - refer to [Thinking in React](https://reactjs.org/docs/thinking-in-react.html#step-4-identify-where-your-state-should-live) if you're not sure!

If you need help getting access to the data the user typed into the search input field, have a look at the React docs for [Controlled Components](https://reactjs.org/docs/forms.html#controlled-components) - even though we aren't using a form element in our example, this approach is still helpful.

If you're not sure how to tackle the filtering deliverables, the key word (and also, the Javascript method you'll need to use) is [`.filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter). Make sure you understand how to filter an array in JS before tackling these deliverables! And if you need a hint on comparing the text from the input field to the spice, check out the [`.includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) method for one possible approach.
