export const selectFilterValue = state => state.filter;

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilterValue],
//   (contacts, filterValue) => {
//     const normalyzeFilter = filterValue.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalyzeFilter)
//     );
//   }
// );
