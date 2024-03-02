export const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    //check if we are inserting new item in the begining
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(), // can use uuid lib for unique id's
        name: item,
        isFolder,
        items: [],
      });
    }

    let latestNode = [];
    latestNode = tree.items.map((obj) => {
      return insertNode(obj, folderId, item, isFolder);
    });

    return { ...tree, items: latestNode };
  }
  return { insertNode };
};

//tree-> complete tree
//folderId-> where we insert the new file or folder
//item-> new item to be created
//isFolder-> what type of item to be creted
