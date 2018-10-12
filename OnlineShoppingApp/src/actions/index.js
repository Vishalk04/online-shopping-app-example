export const selectUser = (user) =>{
console.log(user.name);
console.log(user);
return {
    type : 'ISSUE_SELECTED',
    payload : user
}

}