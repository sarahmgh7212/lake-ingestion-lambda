//https://www.youtube.com/watch?v=uI_S1_ucXi4
const TODOS = [
  { id: "1", name: "wake up at 7 am" },
  { id: "2", name: "wake up at 10 am" },
  { id: "3", name: "wake up at 12 am" },
  { id: "4", name: "wake up at 3 am" },
];
function getTodos() {
  return TODOS;
}

function getTodoById(id) {
  return TODOS.filter((todo) => todo.id === id);
}

// const listSourceTypes = gql`
//   query ListSourceTypes(
//     $filter: ModelSourceTypeFilterInput
//     $limit: Int
//     $nextToken: String
//   ) {
//     listSourceTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
//       items {
//         id
//         name
//         configSchema
//         container
//         taskARN
//         createdAt
//         updatedAt
//       }
//       nextToken
//     }
//   }
// `;

const resolvers = {
  Query: {
    todos: () => {
      return getTodos();
    },
    getTodos: (ctx) => {
      return getTodoById(ctx.arguments.id);
    },
    listSourceTypes: () => {
      return listSourceTypes();
    },
  },
};

exports.handler = async (event) => {
  const typeHandler = resolvers[event.typeName];
  if (typeHandler) {
    const resolver = typeHandler[event.fieldName];
    if (resolver) {
      const result = await resolver(event);
      console.log(result);
      return result;
    }
  }
  throw new Error("Resolver not found");
};
