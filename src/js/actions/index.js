export function selectItem(item) {
    // clickItem is an ActionCreator, it needs to return an action.
    // which is an obect containing a type that describes the purpose of the action
    // and maybe data or payload that describes the action
    return {
        type: 'ITEM_SELECTED',
        item
    };
}
