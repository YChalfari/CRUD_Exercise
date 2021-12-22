# CRUD_Exercise

## Mistakes:

1. I tried to isolate everything to the User component. Therefore the main state is not changing the data of all users rather the specific user itself. This resulted in a loop where the user continues to recieve the original prop even after I delete it from the isolated state.
2. My inputs should have been contained to a form to allow for better controlled inputs and not need to rerender the entire user on every input change.
3. Many Styling issues which I did not want to get into without having functinality
4. Forgot to add an option to POST a new user
